import "./App.css";
import AllFeaturesScroll from "./Components/AllFeaturesScroll";
import WebName from "./Components/WebName";
import { motion, useSpring, useScroll } from "motion/react"

function App() {
  return (
    <div className="w-screen min-h-screen p-3 flex flex-col items-center justify-center bg-gradient-to-b from-[rgb(49,16,32)] to-black">
      <ScrollLinked/>
      <WebName />
      <AllFeaturesScroll/>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat cumque dignissimos adipisci cum praesentium voluptatum, impedit architecto et sed facere accusantium blanditiis numquam nesciunt quos officia distinctio. Non exercitationem porro aperiam quisquam vero corporis impedit quibusdam natus! Quas facere, iure consequatur nisi libero exercitationem dicta tempora nihil cupiditate, quo repellendus nulla blanditiis maxime eligendi quisquam consequuntur minima ratione molestiae eius similique ducimus dolorem suscipit mollitia! Magnam aliquam deleniti tenetur odit. Ipsam sunt alias reprehenderit quas tenetur. Reiciendis provident nam quam eos autem ipsum aliquid officia perspiciatis pariatur maiores harum aspernatur magnam modi id expedita saepe iste porro illum quae aperiam, debitis fuga? Repellendus quod qui, eaque laudantium illo nam, amet veniam doloribus eos distinctio mollitia natus esse dolorem id quam, possimus rem sint. Eaque quia harum ex nihil quas. Aperiam minus rem voluptates hic ullam non eveniet, necessitatibus magni aspernatur est ratione repudiandae, doloremque omnis similique cumque vero expedita, ipsum reprehenderit quis iste iusto. Nemo sed voluptatum natus adipisci atque animi quam molestias officiis, aliquam repudiandae similique, possimus porro maxime! Deleniti inventore sunt fugiat ut dicta ipsam a veniam vel ea corporis officiis libero eaque nemo fuga vero dolores, accusantium doloremque sed praesentium cumque illum voluptatum aliquid aperiam repudiandae? Explicabo, dolorum. Accusantium ea labore, sunt enim a quo quos molestias possimus cum, doloremque excepturi quasi odit. Cumque enim sequi molestias vero, nihil nam at illum reiciendis maxime tempore error vel explicabo, minima itaque obcaecati consequatur fugiat magni animi ut. Illo, maiores quidem saepe itaque, qui cum dicta temporibus dolorem ex similique sit delectus vitae sint. Blanditiis debitis nihil dolorum in doloribus nam nesciunt sint ipsam aspernatur iure aperiam veritatis rem, aliquam pariatur totam labore mollitia! Delectus iusto enim iste laborum optio reiciendis dignissimos nam consequuntur sed minus, natus similique culpa corrupti sunt est vero pariatur assumenda. Laborum qui sequi reprehenderit nihil sint repellat hic eos necessitatibus in, labore commodi dolore deleniti ab sunt dolorum, neque, culpa officia quae minima vitae obcaecati quibusdam dicta assumenda. Vero maiores sit minus, consequatur adipisci beatae distinctio id autem molestiae repudiandae enim aut ipsum, explicabo architecto, et error deleniti iure mollitia ut? Officia iusto, illo animi ab sapiente tempore? Sit sed voluptates ut error adipisci harum sapiente eveniet omnis animi illo incidunt corporis corrupti autem at, est provident totam perspiciatis atque quo explicabo in nihil deserunt. Doloribus consectetur vero ducimus officiis tempora odit natus expedita qui commodi assumenda, debitis autem repellat veniam est rem non obcaecati veritatis, nesciunt aliquam, enim fuga dicta eveniet. Aspernatur dolorem at recusandae illum. Inventore ipsum harum sapiente sed minus tempore distinctio commodi perferendis possimus dolores voluptas corrupti pariatur, ea facilis explicabo necessitatibus, odit mollitia neque itaque iusto tempora voluptatem numquam doloremque dolor? Autem possimus eum quod modi reiciendis. Nisi qui consequuntur delectus ea officia, quos eius quasi rem. Ut officiis nesciunt sunt mollitia maxime libero iste optio odio ipsum! Exercitationem, inventore odit quo totam nesciunt sint eum cupiditate, itaque, ipsum explicabo qui neque quis voluptatibus maxime corporis? Dolor at quibusdam molestiae a tenetur, quis dolore nisi numquam incidunt non accusamus.
    </div>
  );
}

 function ScrollLinked() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
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
                  right: 0,
                  height: 3,
                  originX: 0,
                  backgroundColor: "#6F5F58",
              }}
          />
      </>
  )
}
export default App;
