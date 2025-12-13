// src/components/Video.jsx

import React, { forwardRef } from 'react';

const Video = forwardRef((props, ref) => {
 // נתיבים מאופטמים:
 // WebM: משתמש ב-AV1 Codec (יעיל במיוחד) וב-1.2 Mbps
 const webmVideoSrc =
  "https://ik.imagekit.io/whwhqeu9s/videos/showreel_2025.webm?tr:vc=av1,q-55,br-1200k";
 
 // MP4: משתמש ב-H.265 (HEVC) Codec (יעיל מאוד) וב-1.5 Mbps
 const fallbackMp4Src =
  "https://ik.imagekit.io/whwhqeu9s/videos/showreel_2025.mp4?tr:vc=h265,q-55,br-1500k";

 // תמונת פוסטר (Poster Image) קריטית ל-LCP:
 // ודאו שזו תמונה קטנה (פחות מ-50KB) ודחוסה ב-WebP
 const posterImageSrc = 
  "https://ik.imagekit.io/whwhqeu9s/images/showreel_poster.webp?tr:w-800,f-webp,q-50";


 return (
  <div
   // ✅ שינוי קלאס ל-Wrapper: זה הקלאס ששומר על יחס הגובה-רוחב
   className="video-aspect-ratio-wrapper"
   id="reel"
   role="region"
   aria-label="Showreel video section"
  >
   <video
    ref={ref}
    // ✅ שינוי קלאס לווידאו: זה הקלאס שממלא את ה-Wrapper
    className="video-responsive" 
    controls={false}
    muted
    autoPlay
    loop
    playsInline
    tabIndex={-1}
    aria-label="SEQUENCE studio 2025 showreel video"
    // 💡 שיפור: מוודא שהדפדפן מוריד רק מטא-דאטה מראש
    preload="metadata" 
   >
    {/* 1. עדיפות לפורמט היעיל ביותר (WebM / AV1) */}
    <source src={webmVideoSrc} type="video/webm" />
    
    {/* 2. חלופה אמינה ל-Safari (MP4 / H.265) */}
    <source src={fallbackMp4Src} type="video/mp4" />
    
    {/* טקסט חלופי */}
    <p>Your browser does not support the video tag.</p>
   </video>
  </div>
 );
});

export default Video;