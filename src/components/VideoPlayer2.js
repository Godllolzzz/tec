import React from "react";
import "./VideoPlayer.css";

const VideoPlayer2 = ({ videoId }) => {
  return (
    <div className="video-container">
      <div className="video-inner-container">
        <iframe
          title="YouTube Video"
          src={`https://drive.google.com/file/d/1KZjscAq2Le9HH5UKR-wNUipOOEgnzQ-K/preview`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer2;
