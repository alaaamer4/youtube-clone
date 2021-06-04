import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ vedios, onVedioSelect }) => {
  return (
    <div>
      {vedios.map((vedio, i) => (
        <VideoItem vedio={vedio} key={i} onVedioSelect={onVedioSelect} />
      ))}
    </div>
  );
};

export default VideoList;
