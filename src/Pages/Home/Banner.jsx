import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import tem1 from "../../assets/tem/tem1.jpg";
import tem2 from "../../assets/tem/tem2.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="max-w-md border-primary border-l-8 rounded-t-4xl border-b-8"
            src={tem1}
            alt=""
          />
          <motion.img
            animate={{ x: [100, 0, 100] }}
            transition={{ duration: 14, repeat: Infinity }}
            className="max-w-sm  border-primary border-l-8 rounded-t-4xl border-b-8"
            src={tem2}
            alt=""
          />
        </div>
        <div className="flex-1">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { duration: 5 },
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{
                color: [
                  "#ff0000",
                  "#ff7f00",
                  "#ffff00",
                  "#00ff00",
                  "#0000ff",
                  "#8b00ff",
                  "#ff1493",
                ],
                transition: { duration: 7, repeat: Infinity },
              }}
            >
              jobs
            </motion.span>{" "}
            for You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
