import React from "react";

const VideoItem = ({ vedio, onVedioSelect }) => {
  const onVedioClick = () => {
    onVedioSelect(vedio);
  };
  return (
    <div className="vedio" onClick={onVedioClick}>
      <img
        className="vedio__img"
        src={vedio.snippet.thumbnails.medium.url}
        alt={vedio.snippet.title}
      />
      <div className="vedio__title">{vedio.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
