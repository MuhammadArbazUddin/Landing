import React, { useEffect, useState } from "react";

const CardVerticleSlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollEnded, setScrollEnded] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = document.getElementById("card-slider");
      if (element) {
        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        if (scrollY >= offsetTop && scrollY <= offsetTop + rect.height) {
          setScrollPosition(scrollY - offsetTop);
          setScrollEnded(false);
        }
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrollEnded(true);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div
          id="card-slider"
          className="max-w-5xl mx-auto relative"
          style={{ height: "200vh" }}
        >
          <div
            className="bg-black p-10 rounded-3xl h-[350px] mb-[-35px] border-2 border-black transition-all duration-500 origin-bottom"
            style={{
              position: "sticky",
              top: "15%",
              zIndex: 1,
              transition: "top 0.5s ease-out",
            }}
          >
            <h2 className="text-4xl font-extrabold mb-6 text-white">
              Go Slack-First
            </h2>
            <p className="text-white text-lg leading-relaxed mb-8 max-w-xl">
              Think of the Slack App Directory as the Play Store for Android or
              App Store for iOS. It is a trusted hub where thousands of
              businesses and teams seek apps and automations to boost their
              effectiveness via Slack.
            </p>
          </div>

          <div
            className="bg-white p-10 rounded-3xl h-[350px] mb-[-35px] border-2 border-black transition-all duration-500 origin-bottom"
            style={{
              position: "sticky",
              top: "30%",
              zIndex: 2,
              transition: "top 0.5s ease-out",
            }}
          >
            <h2 className="text-4xl font-extrabold mb-6 text-black">
              Seize Your Chance to Join This Company:
            </h2>
            <div className="grid grid-cols-3 gap-8 mt-8 max-w-xl">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2500+</div>
                <p className="text-sm leading-relaxed">
                  apps (and growing) in the Slack App Directory
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1 mln+</div>
                <p className="text-sm leading-relaxed">
                  developers building Slack apps and integrations
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">52</div>
                <p className="text-black text-sm leading-relaxed">
                  Slack apps used by the avg. enterprise customer
                </p>
              </div>
            </div>
          </div>

          <div
            className="bg-[#C0C7D1] p-10 rounded-3xl h-[350px] mb-[-35px] border-2 border-black transition-all duration-500 origin-bottom"
            style={{
              position: "sticky",
              top: "45%",
              zIndex: 3,
              transition: "top 0.5s ease-out",
            }}
          >
            <h2 className="text-4xl font-extrabold mb-6">
              Grow your Business from a Slack App
            </h2>
            <p className="text-lg leading-relaxed mb-8 max-w-xl">
              Leverage the potential of Slack App Directory - launch your pilot
              SaaS project as the Slack-native solution! Showcase your product
              to a multimillion audience, gain early adopters, generate first
              revenue, and create a solid basis for further business growth.
            </p>
          </div>

          <div
            className="bg-[#FAED00] p-10 rounded-3xl h-[350px] mb-[-35px] border-2 border-black transition-all duration-500 origin-bottom"
            style={{
              position: "sticky",
              top: "55%",
              zIndex: 4,
              transition: "top 0.5s ease-out",
            }}
          >
            <h2 className="text-4xl font-extrabold mb-6">
              Streamline Your Processes with a Slack Bot
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-xl">
              Transform tedious and time-consuming tasks, such as employee
              onboarding, feedback collection, or online support, into automated
              workflows with a custom Slack bot tailored to your specific
              business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVerticleSlider;
