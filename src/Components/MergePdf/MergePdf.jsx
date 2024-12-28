import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

export default function MergePdf() {
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handle file input changes
    const handleFile1Change = (event) => {
        setFile1(event.target.files[0]);
    };

    const handleFile2Change = (event) => {
        setFile2(event.target.files[0]);
    };

    // Merge PDFs
    const handleMergePdf = async () => {
        if (!file1 || !file2) {
            alert('Please upload both PDF files.');
            return;
        }

        setLoading(true);

        try {
            const arrayBuffer1 = await file1.arrayBuffer();
            const arrayBuffer2 = await file2.arrayBuffer();

            const pdfDoc1 = await PDFDocument.load(arrayBuffer1);
            const pdfDoc2 = await PDFDocument.load(arrayBuffer2);

            const mergedPdf = await PDFDocument.create();

            const pages1 = await mergedPdf.copyPages(pdfDoc1, pdfDoc1.getPageIndices());
            pages1.forEach(page => mergedPdf.addPage(page));

            const pages2 = await mergedPdf.copyPages(pdfDoc2, pdfDoc2.getPageIndices());
            pages2.forEach(page => mergedPdf.addPage(page));

            const mergedPdfBytes = await mergedPdf.save();

            const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'merged.pdf';
            link.click();

        } catch (error) {
            alert('Error merging PDFs: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen w-screen flex justify-center items-center" style={{ background: 'linear-gradient(to right, #301C3B, #25482D)' }}>
            <div className="w-[80%] h-[80%] bg-white/30 backdrop-blur-md rounded-lg p-8 shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Merge PDF Files</h1>
                
                {/* File inputs */}
                <div className="mb-4 space-y-4">
                    <div>
                        <label className="block mb-2 text-gray-300">First PDF:</label>
                        <input
                            type="file"
                            accept="application/pdf"
                            onChange={handleFile1Change}
                            className="p-2 border-2 border-gray-300 rounded-lg w-full"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Second PDF:</label>
                        <input
                            type="file"
                            accept="application/pdf"
                            onChange={handleFile2Change}
                            className="p-2 border-2 border-gray-300 rounded-lg w-full"
                        />
                    </div>
                </div>

                {/* Merge button */}
                <button
                    onClick={handleMergePdf}
                    className="w-full px-6 py-3 bg-[#301C3B] text-white rounded-lg hover:bg-[#25482D] transition-colors"
                    disabled={loading}
                >
                    {loading ? 'Merging PDFs... Please wait.' : 'Merge PDFs'}
                </button>

                {/* Loading message */}
                {loading && (
                    <div className="text-center mt-4 text-gray-500">Merging PDFs... Please wait.</div>
                )}
            </div>
        </div>
    );
}
