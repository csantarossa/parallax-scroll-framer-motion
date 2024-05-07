import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const Parallax = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scale12 = useTransform(scrollYProgress, [0, 1], [1, 12]);

  return (
    <div ref={container} className="h-[300vh] w-full relative">
      <div className="sticky top-0 h-[100vh] overflow-hidden">
        <motion.div
          style={{ scale: scale4 }}
          className="w-full h-full absolute top-0 flex justify-center items-center"
        >
          <div className="w-[25vw] h-[25vh] relative flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/14616449/pexels-photo-14616449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          style={{ scale: scale5 }}
          className="w-full h-full absolute top-0 flex justify-center items-center"
        >
          <div className="w-[30vw] h-[30vh] relative flex justify-center items-center top-[45svh]">
            <img
              src="https://images.pexels.com/photos/19605327/pexels-photo-19605327/free-photo-of-silhouette-of-man-on-footbridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          style={{ scale: scale7 }}
          className="w-full h-full absolute top-0 flex justify-center items-center"
        >
          <div className="w-[30vw] h-[30vh] relative flex justify-center items-center right-[32vw]">
            <img
              src="https://images.pexels.com/photos/19605327/pexels-photo-19605327/free-photo-of-silhouette-of-man-on-footbridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          style={{ scale: scale12 }}
          className="w-full h-full absolute top-0 flex justify-center items-center z-50"
        >
          <div className="w-[30vw] h-[30vh] relative flex justify-center items-center left-[32vw]">
            <h1 className="text-7xl text-white font-bold">TEXT.</h1>
          </div>
        </motion.div>
        <motion.div
          style={{ scale: scale5 }}
          className="w-full h-full absolute top-0 flex justify-center items-center"
        >
          <div className="w-[30vw] h-[30vh] relative flex justify-center items-center left-[32vw] -z-10">
            <img
              src="https://images.pexels.com/photos/22192229/pexels-photo-22192229/free-photo-of-the-plaza-de-espana-in-seville-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          style={{ scale: scale9 }}
          className="w-full h-full absolute top-0 flex justify-center items-center"
        >
          <div className="w-[30vw] h-[30vh] relative flex justify-center items-center bottom-[44vh]">
            <img
              src="https://images.pexels.com/photos/19205888/pexels-photo-19205888/free-photo-of-person-at-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Parallax;
