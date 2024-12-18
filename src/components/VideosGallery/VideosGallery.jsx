import React, { useRef, useState } from "react";
import "./VideoGallery.css";
// import video1 from "../../assets/videos/feroze.mp4";
// import video2 from "../../assets/videos/andra.mp4";
// import video3 from "../../assets/videos/bohemia.mp4";
// import video4 from "../../assets/videos/farhan.mp4";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Start of Selection
const videoData = [
  {
    id: 1,
    title: "Social Media Marketing",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://via.placeholder.com/300x200.png?text=Intro+to+React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto provident corrupti.lorem5ad lsakjda sajbdsaj dsahdas j sakjdanskd jkasd",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://via.placeholder.com/300x200.png?text=JavaScript+Basics",
    description:
      "Lorem ipsum A sit amet consectetur adipisicing elit. Ab architecto provident corrupti.lorem5ad lsakjda sajbdsaj dsahdas j sakjdanskd jkasd",
  },
  // {
  //   id: 3,
  //   title: "Social Media Marketing",
  //   url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
  //   thumbnail: "https://via.placeholder.com/300x200.png?text=CSS+Flexbox+Guide",
  // },
  // {
  //   id: 4,
  //   title: "Social Media Marketing",
  //   url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  //   thumbnail:
  //     "https://via.placeholder.com/300x200.png?text=Understanding+the+DOM",
  // },
];

const VideoGallery = () => {
  return (
    <>
      <h1 className="video-h1 font-mono font-bold" id="our-work">
        Trusted by 250+ Online Brands
      </h1>
      <div className="video-gallery">
        {videoData.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </div>
    </>
  );
};

const VideoItem = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Start as true for autoplay

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-item">
      <div className="video-container">
        <video
          className="video"
          ref={videoRef}
          autoPlay
          muted // Muted to allow autoplay in most browsers
          loop // Optional: makes the video loop
        >
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Play button */}
        <button
          className="play-button"
          onClick={handlePlayPause}
          style={{ display: isPlaying ? "none" : "block" }}
        >
          <i className="fas fa-play"></i> {/* Font Awesome play icon */}
        </button>
        {/* Pause button */}
        <button
          className="pause-button"
          onClick={handlePlayPause}
          style={{ display: isPlaying ? "block" : "none" }}
        >
          <i className="fas fa-pause"></i> {/* Font Awesome pause icon */}
        </button>
      </div>
      <div className="text-center p-4">
        <h2 className="video-h2 font-bold font-mono">{video.title}</h2>
        <p className="pb-2 font-sans text-gray-800">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoGallery;
