import React from "react";
import { motion } from "framer-motion"; // Note: corrected import

export default function AllFeaturesScroll() {
    const features = [
        "Img to Pdf",
        "Pdf Compressor",
        "Pdf Merger",
        "Image Compressor",
        "Excel to Pdf",
        "Word to Pdf"
    ];

    return (
        <div className="mt-5 w-screen h-24 flex gap-4 items-center overflow-x-hidden overflow-y-auto px-4">
            <motion.div
                animate={{
                    x: [0, -1600], // Adjust based on your content width
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex gap-4"
            >
                {[...features, ...features].map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="h-16 min-w-28 border border-white/30 hover:border-white/80 rounded-full px-5 hover:font-bold text-white/80 hover:text-white flex items-center justify-center cursor-pointer transition-all duration-300"
                    >
                        {feature}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
