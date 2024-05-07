import { useEffect } from "react";
import Blank from "./Blank";
import Parallax from "./Parallax";
import Lenis from "lenis";

function App() {
  // LENIS SMOOTH SCROLL
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="App h-fit w-full flex justify-center flex-col items-center">
      <Blank prop={"SCROLL DOWN"} />
      <Parallax />
      <Blank prop={"SCROLL UP"} />
    </div>
  );
}

export default App;
