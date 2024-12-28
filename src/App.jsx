import "./App.css";
import AllFeaturesScroll from "./Components/AllFeaturesScroll";
import ScrollTriggered from "./Components/ScrollTriggered";
import WebName from "./Components/WebName";
import { motion, useSpring, useScroll } from "motion/react"

function App() {
  return (
    <div className="w-screen min-h-screen p-3 flex flex-col items-center justify-center bg-gradient-to-b from-[rgb(49,16,32)] to-black">
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
