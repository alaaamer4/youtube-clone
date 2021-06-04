import React from "react";

const VideoDetails = ({ video }) => {
  const videoId = video.id.videoId;
  return (
    <div className="video-details">
      <iframe
        className="video__player"
        title="youtube video"
        src={`https://www.youtube.com/embed/${videoId}`}
      />

      <div className="video-details__description">
        <h4 className="video-details__title">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
