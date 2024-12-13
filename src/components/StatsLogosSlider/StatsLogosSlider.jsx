import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StatsLogosSlider = () => {
  const stats = [
    { text: "25 products delivered", icon: "👑" },
    { text: "$177M raised by clients", icon: "💰" },
    { text: "10+ years in the market", icon: "⭐" },
    { text: "50+ experts onboard", icon: "🧑‍💻" },
    { text: "50+ experts onboard", icon: "🧑‍💻" },
  ];

  const logos = [
    "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/63755a29ff893a88217aa9d0_thoughtspot-white.webp",
    "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/63755a29ff893a88217aa9d0_thoughtspot-white.webp",
    "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/63755a29ff893a88217aa9d0_thoughtspot-white.webp",
    "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/63755a29ff893a88217aa9d0_thoughtspot-white.webp",
    "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/63755a29ff893a88217aa9d0_thoughtspot-white.webp",
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
            {logos.map((logo, index) => (
              <div key={index} className="px-8">
                <img
                  src={logo}
                  alt="Client logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default StatsLogosSlider;
