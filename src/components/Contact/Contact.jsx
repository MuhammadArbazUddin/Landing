import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#0B0F1A] text-white px-6 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl">
          Get a Tailored Quote for Your Software Project
        </h1>
        <p className="text-lg">
          Risk-free, Trusted Software Development Company
        </p>
      </div>
      <div className=" flex flex-col md:flex-row ">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-semibold mb-6">
            What Happens When You Book a Call?
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Our CTO Receives Your Requirements
              </h3>
              <p className="text-gray-300">
                When you reach out, our Co-Founder and CTO, Mukesh, who has 18
                years of experience in software development and building
                successful startups, receives your requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Discuss Your Needs</h3>
              <p className="text-gray-300">
                You'll get a call back from Mukesh and team, who will learn
                about your business and discuss your needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Get A Tailored Proposal
              </h3>
              <p className="text-gray-300">
                We'll send you a custom proposal that meets your needs, budget,
                and timeline.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 bg-white text-black p-6 rounded-lg shadow-lg">
          <div className="text-3xl flex justify-center my-4 rounded-full bg-red-800 p-2 w-[50px] h-[50px]">
            <FaPaperPlane />
          </div>
          <h3 className="text-2xl font-bold mb-6 text-center">
            Send us a message
          </h3>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First name*"
                className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email*"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone number*"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Briefly describe your project requirements or objective of the discussion"
              className="w-full p-3 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className=" bg-[#FF7A00] text-white px-2 py-3 rounded-md font-bold hover:bg-[#e86a00] transition"
            >
              Schedule Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
