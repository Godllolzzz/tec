import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ videoId }) => {
  return (
    <div className="video-container">
      <div className="video-inner-container">
        <iframe
          title="YouTube Video"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
