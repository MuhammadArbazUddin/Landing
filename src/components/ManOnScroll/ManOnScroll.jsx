import React, { useEffect, useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import png from "../../assets/Untitled_design__52_-removebg-preview.png";
const ManOnScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 bg-white ">
      <div className="container mx-auto px-4 z-[5] relative ">
        <img
          src={png}
          alt=""
          className="hidden md:block absolute top-[22rem] w-[1200px]  z-[-1]"
        />
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-left">
          Special <span className="text-[#FAED00]">Offers</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Step 1 */}
          <div className="relative bg-[#FAED00] p-8  border border-black  shadow hover:shadow-none hover:cursor-pointer transition-all duration-300">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">1</h3>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Earn With Content
            </h4>
            <p className="text-gray-700 mb-4">
              Sign up as an influencer to connect with top brands, grow your
              audience, and monetize your content through partnerships!
            </p>
            <CgArrowLongRight className="inline-block absolute bottom-2 right-8 w-8 h-8 text-gray-900" />
          </div>

          {/* Step 2 */}
          <div className="p-8">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">2</h3>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Switch Rev Share
            </h4>
            <p className="text-gray-700">
              Switch to our agency for exclusive influencer partnerships,
              tailored campaigns, and dedicated support to maximize your brand
              collaborations!
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-8">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">3</h3>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Funds Seeding
            </h4>
            <p className="text-gray-700">
              Become a fund publisher to support innovative projects, connect
              with investors, and drive impactful change in your industry!
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="relative overflow-hidden mt-[-20px] ">
          <div
            className="hidden md:flex"
            style={{
              transform: `translateX(${scrollPosition * 0.5}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <img
              src="https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/6438f7ae184cd4c59d3607b1_ramp-your-team-runner.webp"
              alt="Man Illustration"
              className="w-32 md:w-48 ml-[10rem]"
            />
            <div className="w-[50rem] h-64  ml-[5rem] bg-white relative z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManOnScroll;
