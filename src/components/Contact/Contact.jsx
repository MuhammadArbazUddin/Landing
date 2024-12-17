import React from "react";

import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const timelineItems = [
    {
      title: "Our CTO Receives Your Requirements",
      description:
        "When you reach out, our Co-Founder and CTO, Mukesh, who has 18 years of experience in software development and building successful startups, receives your requirements.",
    },
    {
      title: "Initial Consultation",
      description:
        "We schedule a call to discuss your project in detail, understanding your goals and expectations.",
    },
    {
      title: "Proposal and Planning",
      description:
        "After the consultation, we provide a tailored proposal outlining the project scope, timeline, and budget.",
    },
    {
      title: "Project Kickoff",
      description:
        "Once you approve the proposal, we kick off the project with a dedicated team assigned to your needs.",
    },
  ];

  return (
    <section className="px-16 py-12 my-8">
      <div className="text-center py-10 mb-8">
        <h1 className="text-4xl font-mono font-bold">
          Get a Tailored Quote for Your Software Project
        </h1>
        <p className="text-lg font-sans">
          Risk-free, Trusted Software Development Company
        </p>
      </div>
      <div className="flex flex-col gap-32 md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 ">
          <h2 className="text-3xl font-mono font-bold mb-6">
            What Happens When You Book a Call?
          </h2>

          <div>
            {/* Timeline and Service Items */}
            <div className="relative space-y-12 pl-8">
              {/* Timeline Vertical Line */}
              <div className="absolute top-2 left-4 w-[2px] h-full bg-[#FAED00]"></div>

              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start space-x-4"
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-[8px] left-[-21px] w-3 h-3 rounded-full border-4 border-gray-800 bg-gray-800"></div>

                  {/* Service Content */}
                  <div>
                    <h2 className="text-xl font-mono font-bold">
                      {item.title}
                    </h2>
                    <p className="mt-1 font-sans">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 bg-white text-black p-6 flex flex-col rounded-lg border">
          <div className="text-3xl flex justify-center items-center my-4 rounded-full bg-[#FAED00] p-2 w-[70px] h-[70px] mx-auto">
            <FaPaperPlane className="text-black" />
          </div>
          <h3 className="text-2xl font-mono font-bold mb-6 text-center">
            Send us a message
          </h3>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First name*"
                className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FAED00]"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FAED00]"
              />
            </div>
            <input
              type="email"
              placeholder="Email*"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FAED00]"
            />
            <input
              type="tel"
              placeholder="Phone number*"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FAED00]"
            />
            <textarea
              placeholder="Briefly describe your project requirements or objective of the discussion"
              className="w-full p-3 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-[#FAED00]"
            ></textarea>
            <button type="submit" className="button-54">
              Schedule Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
