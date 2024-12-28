import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function ImageToPdf() {
    const [selectedImages, setSelectedImages] = useState([]);

    // Handle file input change (multiple images)
    const handleImageChange = (event) => {
        const files = event.target.files;
        setSelectedImages(files);
    };

    // Convert images to PDF
    const handleConvertToPdf = () => {
        if (selectedImages.length === 0) {
            alert('Please upload at least one image.');
            return;
        }

        const doc = new jsPDF();
        const padding = 10;  // Padding around the image

        Array.from(selectedImages).forEach((file, index) => {
            const reader = new FileReader();
            reader.onload = function (event) {
                const imgData = event.target.result;

                const img = new Image();
                img.onload = function () {
                    // Get the page size (A4 by default)
                    const pageWidth = doc.internal.pageSize.getWidth();
                    const pageHeight = doc.internal.pageSize.getHeight();

                    // Calculate aspect ratio of the image
                    const imgWidth = img.width;
                    const imgHeight = img.height;
                    const ratio = Math.min(
                        (pageWidth - 2 * padding) / imgWidth,
                        (pageHeight - 2 * padding) / imgHeight
                    );

                    // Calculate scaled image dimensions
                    const newWidth = imgWidth * ratio;
                    const newHeight = imgHeight * ratio;

                    // Calculate position to center the image on the page with padding
                    const x = (pageWidth - newWidth) / 2;
                    const y = (pageHeight - newHeight) / 2;

                    // Add the image to the PDF, centered on the page with padding
                    doc.addImage(imgData, 'JPEG', x, y, newWidth, newHeight);

                    // Add a new page if it's not the last image
                    if (index < selectedImages.length - 1) {
                        doc.addPage();
                    }

                    // Save the generated PDF when all images are processed
                    if (index === selectedImages.length - 1) {
                        doc.save('images.pdf');
                    }
                };

                img.src = imgData;
            };

            reader.readAsDataURL(file);
        });
    };

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-[#282C34]">
            <div className="w-[80%] h-[80%] bg-[#21252B] rounded-lg shadow-xl p-6">
                <h1 className="text-2xl font-bold text-center mb-6 text-[#ABB2BF]">Image to PDF Converter</h1>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                        className="block w-full text-[#ABB2BF]
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-[#2C313A] file:text-[#ABB2BF]
                        hover:file:bg-[#353B45]"
                    />
                    <button
                        className="px-6 py-2 bg-[#4D78CC] text-[#FFFFFF] rounded-lg hover:bg-[#5B8AE8] transition-colors"
                        onClick={handleConvertToPdf}
                    >
                        Convert to PDF
                    </button>
                </div>
            </div>
        </div>
    );
}
