import * as motion from "motion/react-client";
import ImageCompression from "../assets/ImageCompression.jpg";
import ImageCompressionn from "../assets/ImageCompressionn.jpg";
import MergePdf from "../assets/MergePdf.jpg";
import PdfCompression from "../assets/PdfCompression.jpg";
import PdfFromExcel from "../assets/PdfFromExcel.jpg";
import PdfFromImage from "../assets/PdfFromImage.jpg";
import WordFromPdf from "../assets/WordToPdf.jpg";

export default function ScrollTriggered() {
    return (
        <div style={container}>
            {food.map(([emoji,image, hueA, hueB], i) => (
                <Card key={emoji} i={i} emoji={emoji} image={image} hueA={hueA} hueB={hueB} />
            ))}
        </div>
    );
}

function Card({ emoji,image, hueA, hueB, i }) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
    // const background = `linear-gradient(306deg, #f5f5f5,    #5A4C47)`;

    return (
        <motion.div
            className={`card-container-${i} gap-5`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={card} variants={cardVariants} className="card flex flex-col gap-5">
                <h1>{emoji}</h1>
                <img src={image} className="" alt="image" />
            </motion.div>
        </motion.div>
    );
}

const cardVariants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */
const container = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
};

const cardContainer = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
};

const splash = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card = {
    fontSize: 32,
    fontWeight: "bold",
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
};

/**
 * ==============   Data   ================
 */
const food = [
    ["Img to Pdf",PdfFromImage, 250, 100],
    ["Pdf Compressor",PdfCompression, 200, 0],
    ["Pdf Merger",MergePdf, 60, 200],
    ["Image Compressor",ImageCompressionn, 50, 290],
    ["Excel to Pdf",PdfFromExcel, 10, 100],
    ["Word to Pdf",WordFromPdf, 290, 50],
];
