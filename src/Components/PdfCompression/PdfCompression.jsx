import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { Link } from "react-router-dom";

export default function PdfCompression() {
  const [fileInfo, setFileInfo] = useState("");
  const [compressedPdfUrl, setCompressedPdfUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [compressionLevel, setCompressionLevel] = useState(50); // Default compression level: 50%

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setFileInfo(
        `Original file size: ${(selectedFile.size / 1024 / 1024).toFixed(2)} MB`
      );
    } else {
      alert("Please select a valid PDF file.");
      setFile(null);
      setFileInfo("");
    }
  };

  const compressPdf = async () => {
    if (!file) return;

    try {
      setLoading(true);

      const fileBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(fileBuffer);

      // Adjust embedded image quality
      const pages = pdfDoc.getPages();
      for (const page of pages) {
        const images = page.node.Images || [];
        for (const img of images) {
          const scaledImage = await pdfDoc.embedJpg(await img.toArrayBuffer(), {
            quality: compressionLevel / 100,
          });
          page.drawImage(scaledImage, {
            x: img.x,
            y: img.y,
            width: img.width,
            height: img.height,
          });
        }
      }

      const optimizedPdf = await pdfDoc.save();
      const blobUrl = URL.createObjectURL(
        new Blob([optimizedPdf], { type: "application/pdf" })
      );

      setCompressedPdfUrl(blobUrl);
      const compressedSize = optimizedPdf.length / 1024 / 1024;
      setFileInfo(
        (prev) =>
          `${prev}\nCompressed file size: ${compressedSize.toFixed(2)} MB`
      );
    } catch (error) {
      alert("Error compressing PDF: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const downloadCompressedPdf = () => {
    const link = document.createElement("a");
    link.href = compressedPdfUrl;
    link.download = "compressed.pdf";
    link.click();
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#092C2B] to-[#1E685F]">
      <div className="w-[90%] max-w-2xl bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          PDF Compression Tool
        </h1>

        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
        />

        {fileInfo && (
          <div className="mb-4 text-gray-700">
            {fileInfo.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        )}

        {file && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Compression Level: {compressionLevel}%
            </label>
            <input
              type="range"
              min="10"
              max="90"
              value={compressionLevel}
              onChange={(e) => setCompressionLevel(e.target.value)}
              className="w-full"
            />
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center mb-4">
            <div className="loader border-4 border-gray-200 border-t-blue-500 rounded-full w-6 h-6 animate-spin"></div>
          </div>
        )}

        {file && !loading && (
          <button
            onClick={compressPdf}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition"
          >
            Compress PDF
          </button>
        )}

        {compressedPdfUrl && !loading && (
          <button
            onClick={downloadCompressedPdf}
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition"
          >
            Download Compressed PDF
          </button>
        )}
      </div>
      <Link to="/" className="mt-4 text-blue-300 hover:underline">
        Go Back to Home
      </Link>
    </div>
  );
}
