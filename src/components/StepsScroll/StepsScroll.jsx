import React from "react";
import { motion } from "framer-motion";

const StepsScroll = () => {
  return (
    <div className="flex flex-col md:flex-row items-start min-h-screen">
      {/* Left Section */}
      <div className="w-full sm:w-[50%]  p-6 md:p-16 space-y-6 md:sticky md:top-0">
        <h1 className="text-3xl md:text-6xl font-semibold">
          3 Easy Steps to Create a Slack Bot with Upsilon
        </h1>
      </div>

      {/* Right Section */}
      <motion.div
        className="w-full sm:w-[70%] p-6 md:p-16 md:px-[10rem]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="space-y-4 md:space-y-6 mb-8 md:mb-12 p-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex justify-between items-start gap-4">
            <div
              className="mr-4 bg-[#FAED00] text-black border border-black p-4 rounded-full flex items-center justify-center"
              style={{ width: "3rem", height: "3rem" }}
            >
              01
            </div>
            <div>
              <h1 className="text-xl md:text-xl font-bold">
                Complete the form
              </h1>
              <p className="text-sm md:text-sm">
                Fill out the form - give us an idea of what kind of a Slack app
                you need. Our specialist will contact you shortly to arrange the
                best time for a call.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="space-y-4 md:space-y-6 mb-8 md:mb-12 p-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex justify-between items-start gap-4">
            <div
              className="mr-4 bg-[#FAED00] text-black border border-black p-4 rounded-full flex items-center justify-center"
              style={{ width: "3rem", height: "3rem" }}
            >
              02
            </div>
            <div>
              <h1 className="text-xl md:text-xl font-bold">
                Tell us more about your project
              </h1>
              <p className="text-sm md:text-sm">
                On the call, we’ll be happy to discuss your project in more
                detail. Then, our team will put everything together and start
                thinking about the optimal solution.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="space-y-4 md:space-y-6 mb-8 md:mb-12 p-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex justify-between items-start gap-4">
            <div
              className="mr-4 bg-[#FAED00] text-black border border-black p-4 rounded-full flex items-center justify-center"
              style={{ width: "3rem", height: "3rem" }}
            >
              03
            </div>
            <div>
              <h1 className="text-xl md:text-xl font-bold">
                Review the proposal and start
              </h1>
              <p className="text-sm md:text-sm">
                In a couple of days, we’ll get back to you with the proposal.
                Once you are happy with it, we’ll sign a contract and get things
                rolling!
              </p>
              <button className="button-54 mt-8">Get Started</button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StepsScroll;
