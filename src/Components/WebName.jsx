import React from 'react'
import { Text } from "@radix-ui/themes";
import { ReactTyped } from "react-typed";

export default function WebName() {
  return (
      <Text size="9" weight="light" className="ml-3 text-[#B4B4B4] mt-10">wellcome to <Text size="8" className=" ml-8  text-[#EEEEEE]"><ReactTyped strings={["TransformIt","Speed","PDF merger","Image compressor","image to PDF","Pdf Compressor","TransformIt"] }typeSpeed={180} backSpeed={100} /></Text></Text>
      
  )
}
