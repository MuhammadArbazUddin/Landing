import React, { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Importing the React icon

const ScrollToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopBtn = document.getElementById("scrollToTopBtn");
      if (window.scrollY > 100) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="scrollToTopBtn"
      onClick={scrollToTop}
      className="fixed right-5 z-[99999] bottom-5 hidden bg-[#FAED00] text-white border border-gray-300 rounded-lg p-2 cursor-pointer"
    >
      <FaArrowUp /> {/* Adding the React icon */}
    </button>
  );
};

export default ScrollToTop;
