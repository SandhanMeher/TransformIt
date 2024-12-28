import "./App.css";
import AllFeaturesScroll from "./Components/AllFeaturesScroll";
import ScrollTriggered from "./Components/ScrollTriggered";
import WebName from "./Components/WebName";
import { motion, useSpring, useScroll } from "motion/react"

function App() {
  return (
    <div className="w-screen min-h-screen p-3 flex flex-col items-center justify-center bg-gradient-to-br from-[#311020] via-[#1a0a15] to-black relative overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Animated grain effect */}
      <div className="absolute inset-0 opacity-20 animate-grain bg-[url('/grain.png')] pointer-events-none" />
      
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(45deg,#6F5F58_0px,#6F5F58_1px,transparent_1px,transparent_12px)] pointer-events-none" />
      
      {/* Subtle dot matrix */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#6F5F58_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      

      <ScrollLinked/>
      <WebName />
      <AllFeaturesScroll/>
      <ScrollTriggered/>
    </div>
  );
}

 function ScrollLinked() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
      stiffness: 90,
      damping: 30,
      restDelta: 0.001,
  })

  return (
      <>
          <motion.div
              id="scroll-indicator"
              style={{
                  scaleX,
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0  ,
                  height: 3,
                  originX: 0,
                  backgroundColor: "#6F5F58",
                  zIndex: 9999,
              }}
          />
      </>
  )
}
export default App;
