import { forwardRef} from 'react';

const Video = forwardRef((props, ref) => {
  const video = 'https://ik.imagekit.io/dvirseq10/Showreel%202025_Low%20quality._02mp4.mp4?updatedAt=1742495430399';

  return (
    <div
      className="video-container"
      id="reel"
      role="region"
      aria-label="Showreel video section"
    >
      <video
        ref={ref}
        className="video"
        src={video}
        controls={false}
        muted
        autoPlay
        loop
        playsInline
        tabIndex={-1}
        aria-label="SEQUENCE studio 2025 showreel video"
      >
        {/* מקור וידאו לגיבוי */}
        <source src={video} type="video/mp4" />

        {/* כתוביות (אם יהיו בעתיד) */}
        {/* לדוגמה:
        <track
          kind="captions"
          src="/captions/showreel.vtt"
          srcLang="en"
          label="English captions"
          default
        />
        */}
      </video>
    </div>
  );
});

export default Video;
