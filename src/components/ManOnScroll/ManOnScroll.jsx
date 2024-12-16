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
          className="absolute top-[20rem] w-[1200px]  z-[-1]"
        />
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-left">
          EASY AS <span className="text-yellow-500">1–2–3</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Step 1 */}
          <div className="relative bg-[#FAED00] p-8  border border-black  shadow hover:shadow-none hover:cursor-pointer transition-all duration-300">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">1</h3>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Schedule a call
            </h4>
            <p className="text-gray-700 mb-4">
              Complete the form and pick the best time. Ask us for an{" "}
              <span className="font-bold">NDA</span> if required, and we are
              happy to provide one.
            </p>
            <CgArrowLongRight className="inline-block absolute bottom-2 right-8 w-8 h-8 text-gray-900" />
          </div>

          {/* Step 2 */}
          <div className="p-8">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">2</h3>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Share project details
            </h4>
            <p className="text-gray-700">
              Tell us about your business challenges and the results you want to
              achieve so we can start thinking about the solution.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-8">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">3</h3>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Review a proposal and sign a contract
            </h4>
            <p className="text-gray-700">
              Once you are happy with the proposal, sign a contract, and we'll
              get the ball rolling.
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="relative overflow-hidden mt-[-20px]">
          <div
            className="flex"
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
            <div className="w-[50rem] h-64 ml-[5rem] bg-white relative z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManOnScroll;
