import React from "react";
import heroImg from "../../assets/Red_and_White_Fingerprint_Cybersecurity_Logo-removebg-preview.png";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h- bg-fixed bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/662e88bd0acef9692037ebd7_discovery-numbers-bg.webp')",
      }}
    >
      <div className="pt-16 flex flex-col items-center md:flex-row justify-between container mx-auto px-4 z-[5] relative gap-8 md:gap-32">
        <div className="w-full md:w-1/2">
          <h1 className="text-black text-4xl md:text-6xl leading-tight font-mono font-bold mb-5">
            Optimize & Monetize
            <br />
          </h1>
          <p className="text-black text-lg md:text-xl font-sans mb-5">
            Sociallywiredinc is a group of dedicated and innovative social media
            management experts that works with various content creators to help
            them raise the scope and reach of their platforms through curated,
            engaging content and optimized media marketing strategies. We owe
            our success to our ability to use ever-evolving approaches to create
            personalized game plans for each client and their target
            demographic.
          </p>
          <button className="button-54">See Pricing</button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={heroImg} alt="" className="w-[80%] md:w-[30rem] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
