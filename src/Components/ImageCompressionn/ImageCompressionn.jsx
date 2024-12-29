import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ImageCompressionn() {
    const [compressionValue, setCompressionValue] = useState(50); // Default compression percentage
    const [compressedImageUrl, setCompressedImageUrl] = useState('');
    const [fileInfo, setFileInfo] = useState('');
    const fileInputRef = useRef(null);
    const canvasRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const img = new Image();
                img.onload = function () {
                    const canvas = canvasRef.current;
                    const ctx = canvas.getContext('2d');

                    canvas.width = img.width;
                    canvas.height = img.height;

                    // Draw the image onto the canvas
                    ctx.drawImage(img, 0, 0);

                    setFileInfo(`Original Image Size: ${(file.size / 1024 / 1024).toFixed(2)} MB`);
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const compressImage = () => {
        const canvas = canvasRef.current;
        const quality = compressionValue / 100;

        const compressedImage = canvas.toDataURL('image/jpeg', quality);
        setCompressedImageUrl(compressedImage);
        const compressedBlob = dataURLtoBlob(compressedImage);
        setFileInfo((prev) =>
            `${prev}\nCompressed Image Size: ${(compressedBlob.size / 1024 / 1024).toFixed(2)} MB`
        );
    };

    const dataURLtoBlob = (dataURL) => {
        const arr = dataURL.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    };

    const downloadCompressedImage = () => {
        const link = document.createElement('a');
        link.href = compressedImageUrl;
        link.download = 'compressed-image.jpg';
        link.click();
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#111A27] to-[#154467] text-white">
            <h1 className="text-3xl font-bold mb-6">Image Compression Tool</h1>

            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="mb-4 text-black rounded-lg"
            />

            {fileInfo && <p className="mb-4 text-white">{fileInfo}</p>}

            <label className="block mb-2">Compression Percentage: {compressionValue}%</label>
            <input
                type="range"
                min="10"
                max="90"
                value={compressionValue}
                onChange={(e) => setCompressionValue(e.target.value)}
                className="mb-4 w-3/4"
            />

            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

            <button
                onClick={compressImage}
                className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg transition mb-4"
            >
                Compress Image
            </button>

            {compressedImageUrl && (
                <button
                    onClick={downloadCompressedImage}
                    className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg transition"
                >
                    Download Compressed Image
                </button>
            )}
            <Link to="/" className="mt-4 text-blue-300 hover:underline">
                Go Back to Home
            </Link>
        </div>
    );
}
