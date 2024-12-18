import React from "react";

const VideosGallery = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row flex-1 items-center gap-10 max-w-[75rem] mx-auto">
        {/* Video Box */}
        <div
          className="relative bg-gray-300 rounded-lg overflow-hidden shadow-lg"
          style={{ width: "400px", height: "520px" }} // Changed height to 520px
        >
          <div className="relative">
            {/* Custom video */}
            <video className="w-full h-full">
              <source src="path/to/your/custom-video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white p-4 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-gray-700"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
          {/* Title and Paragraph */}
          <div className="bg-yellow-400 text-center py-4 absolute bottom-0 w-full cursor-pointer hover:bg-yellow-300">
            <h2 className="text-black font-bold text-lg">Video Title 1</h2>
            <p className="text-black">This is a description for video 1.</p>
          </div>
        </div>
        {/* Video Box */}
        <div
          className="relative bg-gray-300 rounded-lg overflow-hidden shadow-lg"
          style={{ width: "400px", height: "520px" }} // Changed height to 520px
        >
          <div className="relative">
            {/* Custom video */}
            <video className="w-full h-full ">
              <source src="path/to/your/custom-video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white p-4 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-gray-700"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
          {/* Title and Paragraph */}
          <div className="bg-yellow-400 text-center absolute bottom-0 w-full py-4 cursor-pointer hover:bg-yellow-300">
            <h2 className="text-black font-bold text-lg">Video Title 2</h2>
            <p className="text-black">This is a description for video 2.</p>
          </div>
        </div>
        {/* Video Box */}
        <div
          className="relative bg-gray-300 rounded-lg overflow-hidden shadow-lg"
          style={{ width: "400px", height: "520px" }} // Changed height to 520px
        >
          <div className="relative">
            {/* Custom video */}
            <video className="w-full h-full">
              <source src="path/to/your/custom-video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white p-4 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-gray-700 "
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
          {/* Title and Paragraph */}
          <div className="bg-yellow-400 text-center py-4 cursor-pointer absolute bottom-0 w-full hover:bg-yellow-300">
            <h2 className="text-black font-bold text-lg">Video Title 3</h2>
            <p className="text-black">This is a description for video 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosGallery;
// import React, { useRef, useEffect } from "react";

// const VideosGallery = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     const start = 4.31;
//     const end = 9.48;

//     if (!video) return;

//     const handleTimeUpdate = () => {
//       if (video.currentTime >= end) {
//         video.currentTime = start; // Reset to the start time
//       }
//     };

//     video.addEventListener("timeupdate", handleTimeUpdate);

//     return () => {
//       video.removeEventListener("timeupdate", handleTimeUpdate);
//     };
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold text-center mb-4">Videos Gallery</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="relative bg-gray-300 rounded-lg overflow-hidden shadow-lg">
//           <video
//             ref={videoRef}
//             // src="https://lewhunt.github.io/assets/fitness/squats-720p.mp4"
//             autoPlay
//             controls
//             muted
//             className="w-full h-full"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <button className="bg-white p-4 rounded-full shadow-lg">
//               <svg
//                 // xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 className="w-10 h-10 text-gray-700"
//               >
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </button>
//           </div>
//           <div className="bg-yellow-400 text-center py-4 cursor-pointer hover:bg-yellow-300">
//             <h2 className="text-black font-bold text-lg">Video Title 1</h2>
//             <p className="text-black">This is a description for video 1.</p>
//           </div>
//         </div>
//         <div className="relative bg-gray-300 rounded-lg overflow-hidden shadow-lg">
//           <video
//             // src="https://lewhunt.github.io/assets/fitness/squats-720p.mp4"
//             autoPlay
//             controls
//             muted
//             className="w-full h-full"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <button className="bg-white p-4 rounded-full shadow-lg">
//               <svg
//                 // xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 className="w-10 h-10 text-gray-700"
//               >
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </button>
//           </div>
//           <div className="bg-yellow-400 text-center py-4 cursor-pointer hover:bg-yellow-300">
//             <h2 className="text-black font-bold text-lg">Video Title 2</h2>
//             <p className="text-black">This is a description for video 2.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideosGallery;
