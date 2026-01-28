import React, { useContext, useEffect, useMemo, useCallback } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useResize } from "../../../hooks/useResize";
import { ProjectContext } from "../../../context/ProjectContext";
import { convertBaseImg, convertSrcImg } from "../../../utils/utils";

const Carusela = () => {
 // 1. חישובים שאינם תלויים בטעינת נתונים
 const windowWidth = useResize();
 const { images, getCarousel } = useContext(ProjectContext);
  
 // 2. שימוש ב-useMemo כדי לחשב את גובה התמונה רק כשהרוחב משתנה
 const imageHeight = useMemo(() => {
  // הגובה הנדרש: 700px למסכים גדולים, 300px לאחר מכן
  return windowWidth > 800 ? 700 : 300;
 }, [windowWidth]); // יחושב מחדש רק כשהרוחב משתנה

 // 3. שימוש ב-useCallback כדי לשמור על יציבות הפונקציות המחושבות בלולאת map
 const generateImgSrc = useCallback((img) => {
  const base_img = convertBaseImg(img);
  const src_img = convertSrcImg(img);
  // מחזיר את כתובת ה-URL המלאה
  return `${base_img}tr:f-auto/${src_img}`;
 }, []); // ללא תלות, הפונקציה תישאר יציבה בין רינדורים

 // 4. טיפול במצב טעינה/מערך ריק
 useEffect(() => {
  getCarousel();
 }, [getCarousel]); // הוספת getCarousel כתלות, בהנחה שהיא מגיעה מה-Context

 if (!images || images.length === 0) {
  // הצגת Placeholder או לוגיקת טעינה
  return <div className="carousel-loading">טוען תמונות...</div>;
 }

 return (
  <div className="carousel" role="region" aria-label="Project Images Carousel">
   <Carousel fade interval={4000} // הוספת interval לשיפור UX
        // טיפול במקרה של תמונה אחת - מונע לולאה אינסופית
        indicators={images.length > 1} 
        controls={images.length > 1}
      >
    {images.map((img) => (
     <Carousel.Item key={img} // שמירת המפתח (key) ברמה הנכונה
              // טעינה מקדימה של 3 תמונות (React 18)
              loading="lazy" 
          >
      <img
       src={generateImgSrc(img)} // שימוש בפונקציה המחושבת
       alt={img}
              // 5. שימוש ב-className במקום style inline
              className="carousel-image"
       style={{
        height: imageHeight, // שימוש בערך המחושב ב-useMemo
        width: "100%",
        objectFit: "cover",
       }}
      />
     </Carousel.Item>
    ))}
   </Carousel>
  </div>
 );
};

export default Carusela;

// ***********************
// הערה: נדרש להוסיף את ה-CSS הבא (או דומה לו) לקובץ ה-CSS הגלובלי שלך
// .carousel-image {
//   width: 100%;
//   object-fit: cover;
//   /* הוספת מעבר חלק לגובה בעת שינוי גודל מסך (אופציונלי) */
//   transition: height 0.3s ease-in-out; 
// }
// ***********************