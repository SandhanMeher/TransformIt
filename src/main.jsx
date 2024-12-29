import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Routes, Route } from "react-router";
import ImageCompressionn from "./Components/ImageCompressionn/ImageCompressionn.jsx";
import ImageToPdf from "./Components/ImageToPdf/ImageToPdf.jsx";
import MergePdf from "./Components/MergePdf/MergePdf.jsx";
import PdfCompression from "./Components/PdfCompression/PdfCompression.jsx";
import RouteNotMatched from "./Components/Error/RouteNotMatched.jsx";
import FeatureToCome from "./Components/Error/FeatureToCome.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/imageCompression" element={<ImageCompressionn/>} />
          <Route path="/imageToPdf" element={<ImageToPdf/>} />
          <Route path="/mergePdf" element={<MergePdf/>} />
          <Route path="/pdfCompression" element={<PdfCompression/>} />
          <Route path="/newFeatures" element={<FeatureToCome/>}/>
          <Route path="*" element={<RouteNotMatched/>}/>
        </Routes>
      </BrowserRouter>
    </Theme>
  </StrictMode>
);
