// VideosGrid.jsx
import React from "react";

const VideosGrid = ({ selectedProject }) => {
  return (
    <section
      className="videos-grid container"
      aria-label={`וידאוים נוספים מתוך הפרויקט ${selectedProject.title}`}
    >
      {selectedProject.supplementaryVideos?.map((v, i) => (
        <video
          key={v}
          src={v}
          controls
          controlsList="nodownload"
          className="media-item rounded-3"
          aria-label={`וידאו ${i + 1} מתוך ${selectedProject.supplementaryVideos.length}`}
        />
      ))}
    </section>
  );
};

export default VideosGrid;
