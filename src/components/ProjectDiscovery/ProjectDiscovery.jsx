import React from "react";
import { motion } from "framer-motion";

const ProjectDiscovery = () => {
  const sections = [
    {
      id: 1,
      title: "YOUTUBE",
      description:
        "YouTube Shorts Management: We optimize your content for YouTube Shorts, generating millions of views.",
      imageUrl:
        "https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png",
    },
    {
      id: 2,
      title: "META",
      description:
        "Media Partners: We tailor your content for Facebook, unlocking revenue through Reels.",
      imageUrl: "https://pngimg.com/d/meta_PNG5.png",
    },
    {
      id: 3,
      title: "SNAPCHAT",
      description:
        "Snap Discover Show: Partnering with Snap, we handle re-editing and performance analysis while you keep 100% ownership.",
      imageUrl: "https://pngimg.com/d/snapchat_PNG41.png",
    },
    {
      id: 4,
      title: "TIKTOK",
      description:
        "TikTok Creator Fund: We monetize your short-form content across platforms, turning hobbies into revenue.",
      imageUrl:
        "https://iconape.com/wp-content/files/fd/121669/svg/tiktok-logo-tik-tok-logo-icon-png-svg.png",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-start min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-6 md:p-16 space-y-6 md:sticky md:top-0">
        <h1 className="text-3xl md:text-5xl font-mono font-bold">
          Best solution for business
        </h1>
        <p className="text-base md:text-md font-sans">
          We anticipate challenges and proactively develop solutions.
          Sociallywiredinc excels in crisis management and problem-solving,
          ensuring your brand is resilient in the face of challenges and adapts
          swiftly to industry shifts. Sociallywiredinc has garnered recognition
          for excellence in the industry. Our portfolio showcases successful
          campaigns and projects across diverse sectors, illustrating our
          capability to deliver impactful results. Your success is our success.
          Sociallywiredinc thrives on collaborative excellence, working closely
          with you to understand your vision and goals. Consider us an extension
          of your team, dedicated to achieving your brand objectives.
        </p>
        <button className="button-54">All Services</button>
      </div>

      {/* Right Section */}
      <motion.div
        className="w-full md:w-1/2 p-6 md:p-16 md:px-[10rem]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="space-y-4 md:space-y-6 mb-8 md:mb-12 p-6 border-2 border-black text-left"
            initial={{ opacity: 0, y: 20, backgroundColor: "#ffffff" }}
            whileInView={{ opacity: 1, y: 0, backgroundColor: "#FAED00" }}
            whileHover={{ backgroundColor: "#ffffff", scale: 1.02 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          >
            <div className="text-xl bg-white border border-black rounded-full w-[50px] h-[50px] flex items-center justify-center font-bold">
              {section.id}
            </div>
            <div className="flex justify-center">
              <img src={section.imageUrl} alt="" className="w-[120px]" />
            </div>
            <h1 className="text-xl md:text-xl font-mono font-bold">
              {section.title}
            </h1>
            <p className="text-sm md:text-sm font-sans">
              {section.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectDiscovery;
