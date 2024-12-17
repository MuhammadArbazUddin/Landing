import React from "react";
import heroImg from "../../assets/Red_and_White_Fingerprint_Cybersecurity_Logo-removebg-preview.png";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/662e88bd0acef9692037ebd7_discovery-numbers-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Adjust height as needed
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        zIndex: "-1",
      }}
    >
      <div className="pt-16 flex flex-col items-center md:flex-row justify-between container mx-auto px-4 z-[5] relative gap-32">
        <div className="w-full md:w-1/2 ">
          <h1 className="text-black text-6xl leading-[60px] font-mono font-bold mb-5">
            Optimize & Monetize
            <br />
          </h1>
          <p className="text-black text-xl font-sans mb-5">
            Sociallywiredinc is a group of dedicated and innovative social media
            management experts that works with various content creators to help
            them raise the scope and reach of their platforms through curated,
            engaging content and optimized media marketing strategies. We owe
            our success to our ability to use ever-evolving approaches to create
            personalized game plans for each client and their target
            demographic.
          </p>
          <button className="button-54 ">See Pricing</button>
        </div>
        <div className="md:w-1/2 flex justify-center up-down">
          <img
            // src="https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/662d4f578b81c09beb6f53c1_discovery-introduction-p-500.webp"
            src={heroImg}
            alt=""
            className="w-[30rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
