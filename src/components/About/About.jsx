import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="flex flex-col items-center md:flex-row min-h-screen bg-[#FAED00]"
      id="about-us"
    >
      <motion.div
        className="w-full sm:w-[70%] pt-2 md:p-16 md:px-[10rem] bg-white  border-2 border-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="space-y-4 md:space-y-6 py-2 px-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl mb-4 font-mono font-bold text-gray-800">
                About Us
              </h1>
              <p className="text-lg md:text-2xl font-sans mb-4 text-gray-700">
                Amplifying Your Digital Presence
              </p>
              <p className="text-lg md:text-2xl font-sans text-gray-600">
                Elevate Your Brand, Ignite Engagement. Unleash possibilities,
                Ignite Influence
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="space-y-4 md:space-y-6 py-2 px-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <p className="text-lg md:text-xl font-sans text-gray-600">
              Seasoned professionals who have been at the forefront of the
              industry for nearly a decade. Fueled by a passion for shaping
              compelling narratives and driving impactful results, our founders
              embarked on a journey to redefine the landscape of digital
              communication. Their collective expertise forms the cornerstone of
              our agency, ensuring that every client receives a blend of
              experience, creativity, and strategic insight.
            </p>
          </div>
        </motion.div>
      </motion.div>
      {/* Left Section */}
      <div className="w-full sm:w-[50%] p-6 md:p-16 space-y-6 md:sticky md:top-0">
        <img
          src="https://www.greater-thought.com/wp-content/uploads/2020/12/websites-digital-icon-comp3.gif"
          alt=""
          className="rounded-lg w-[25rem]"
        />
      </div>

      {/* Right Section */}
    </div>
  );
};

export default About;
