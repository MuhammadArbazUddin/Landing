import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StatsLogosSlider = () => {
  const stats = [
    { text: "We Deliver The Best", icon: "👑" },
    { text: "We Have An Expert Team", icon: "💰" },
    { text: "10+ Years In The Bussiness", icon: "⭐" },
    { text: "100% Satisfied Clients", icon: "🧑‍💻" },
  ];

  const statsLogo = [
    { text: "Socially Wired" },
    { text: "Socially Wired" },
    { text: "Socially Wired" },
    { text: "Socially Wired" },
    { text: "Socially Wired" },
  ];

  const sliderSettings = {
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="relative   w-full overflow-hidden">
      {/* Stats Slider */}
      <div className="relative w-[110vw] left-1/2 -translate-x-1/2">
        <div className="bg-yellow-400 py-4 rotate-[-2deg] mt-10 overflow-hidden">
          <Slider {...sliderSettings}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-8 whitespace-nowrap"
              >
                <span className="text-xl">{stat.icon}</span>
                <p className="text-black font-bold">{stat.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Logos Slider */}
      <div className="relative w-[110vw] left-1/2 -translate-x-1/2 mt-3">
        <div className="bg-black py-4 rotate-[2deg] mb-10 overflow-hidden">
          <Slider {...sliderSettings}>
            {statsLogo.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-8 whitespace-nowrap"
              >
                <p className="text-white font-bold text-2xl py-2">
                  {stat.text}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default StatsLogosSlider;
