import React from "react";

const VideosGrid = ({ selectedProject }) => {
  return (
    <div className="videos-grid container">
      {selectedProject.supplementaryVideos?.map((v) => (
        <video
          src={v}
          key={v}
          controls
          controlsList="nodownload"
          className="media-item rounded-3"
        />
      ))}
    </div>
  );
};

export default VideosGrid;
