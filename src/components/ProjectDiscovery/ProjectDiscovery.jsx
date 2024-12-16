import React from "react";
import { motion } from "framer-motion";

const ProjectDiscovery = () => {
  return (
    <div className="flex flex-col md:flex-row items-start min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-6 md:p-16 space-y-6 md:sticky md:top-0">
        <h1 className="text-3xl md:text-5xl font-bold">
          Our Project Discovery Process
        </h1>
        <p className="text-base md:text-lg">
          Our team has conducted project discovery numerous times, for both our
          own startups and clients' products. We've established a reliable
          process that takes you closer to a crisp product plan and beyond with
          every step.
        </p>
        <button className="button-54">Let's Talk</button>
      </div>

      {/* Right Section */}
      <motion.div
        className="w-full md:w-1/2 p-6 md:p-16 md:px-[10rem]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section 1 */}
        <motion.div
          className="space-y-4 md:space-y-6 mb-8 md:mb-12 p-6  border-2 border-black text-left"
          initial={{ opacity: 0, y: 20, backgroundColor: "#ffffff" }}
          whileInView={{ opacity: 1, y: 0, backgroundColor: "#FAED00" }}
          whileHover={{ backgroundColor: "#ffffff", scale: 1.02 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/66328069b84459687313540d_discovery-process-1-p-500.webp"
            alt=""
            className="w-full"
          />
          <h1 className="text-xl md:text-xl font-bold">Introduction</h1>
          <p className="text-sm md:text-sm">
            We schedule a series of intro calls with a Business Analyst. During
            these calls, we gather the initial requirements to get a clear
            picture of your business idea, main goals, and the value you
            envision for the future product.
          </p>
        </motion.div>
        {/* Section 2 */}
        <motion.div
          className="space-y-4 md:space-y-6 mb-8 md:mb-12 p-6  border-2 border-black text-left"
          initial={{ opacity: 0, y: 20, backgroundColor: "#ffffff" }}
          whileInView={{ opacity: 1, y: 0, backgroundColor: "#FAED00" }}
          whileHover={{ backgroundColor: "#ffffff", scale: 1.02 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src="https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/66328069b84459687313540d_discovery-process-1-p-500.webp"
            alt=""
            className="w-full"
          />
          <h1 className="text-xl md:text-xl font-bold">Introduction</h1>
          <p className="text-sm md:text-sm">
            We schedule a series of intro calls with a Business Analyst. During
            these calls, we gather the initial requirements to get a clear
            picture of your business idea, main goals, and the value you
            envision for the future product.
          </p>
        </motion.div>
        {/* Section 3 */}
        <motion.div
          className="space-y-4 md:space-y-6 mb-8 md:mb-12 p-6  border-2 border-black text-left"
          initial={{ opacity: 0, y: 20, backgroundColor: "#ffffff" }}
          whileInView={{ opacity: 1, y: 0, backgroundColor: "#FAED00" }}
          whileHover={{ backgroundColor: "#ffffff", scale: 1.02 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <img
            src="https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/66328069b84459687313540d_discovery-process-1-p-500.webp"
            alt=""
            className="w-full"
          />
          <h1 className="text-xl md:text-xl font-bold">Introduction</h1>
          <p className="text-sm md:text-sm">
            We schedule a series of intro calls with a Business Analyst. During
            these calls, we gather the initial requirements to get a clear
            picture of your business idea, main goals, and the value you
            envision for the future product.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDiscovery;
