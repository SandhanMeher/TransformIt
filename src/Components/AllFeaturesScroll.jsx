import React from "react";
import { motion } from "motion/react";

export default function AllFeaturesScroll() {
  return (
    <div className="mt-5 w-screen h-24 flex gap-4 items-center justify-center overflow-x-auto overflow-y-auto px-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className=" ml-32  h-16 min-w-28 border border-white/30 hover:border-white/80 rounded-full px-5 hover:font-bold text-white/80 hover:text-white flex items-center justify-center cursor-pointer transition-all duration-300"
      >
        Img to Pdf
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="h-16 min-w-28 border border-white/30 hover:border-white/80 rounded-full px-5 hover:font-bold text-white/80 hover:text-white flex items-center justify-center cursor-pointer transition-all duration-300"
      >
        Pdf Compressor
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="h-16 min-w-28 border border-white/30 hover:border-white/80 rounded-full px-5 hover:font-bold text-white/80 hover:text-white flex items-center justify-center cursor-pointer transition-all duration-300"
      >
        Pdf Merger
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="h-16 min-w-28 border border-white/30 hover:border-white/80 rounded-full px-5 hover:font-bold text-white/80 hover:text-white flex items-center justify-center cursor-pointer transition-all duration-300"
      >
        Image Compressor
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="h-16 min-w-28 border border-white/30 hover:border-white/80 rounded-full px-5 hover:font-bold text-white/80 hover:text-white flex items-center justify-center cursor-pointer transition-all duration-300"
      >
        Excel to Pdf
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="h-16 min-w-28 border border-white/30 hover:border-white/80 rounded-full px-5 hover:font-bold text-white/80 hover:text-white flex items-center justify-center cursor-pointer transition-all duration-300"
      >
        Word to Pdf
      </motion.div>
    </div>
  );
}
