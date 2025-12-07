import React from "react";
import { NavLink } from "react-router-dom";

// שימו לב: הוסרו הייבוא של useContext ו-ProjectContext כיוון שהטקסט סטטי

const Text = () => {
  
  // מערך הטקסט הסטטי - מוכן להדבקה
  const staticTextArray = [
    { 
        _id: 'static-1', 
        text: "SEQUENCE Studio is your boutique destination for captivating video solutions. We specialize in video production for commercials, animations, user interface experiences, and more. Our team produces top-notch videos for TV, web, and cinema, focusing on delivering visually stunning, engaging content tailored to each client's needs. We offer a comprehensive suite of services, from directing to motion design, sophisticated 2D/3D animation, color corrections, and AI-powered solutions. We handle it all, working closely with our clients at every stage to ensure every project is a masterpiece." 
    },
    { 
        _id: 'static-2', 
        text: "Nestled in the heart of Moshav Ramot Hashavim, our studio blends creativity and technology in a charming orchard setting with ample parking. Join us in bringing your ideas to life – where innovation meets old-world charm. At SEQUENCE Studio, we're not just creating videos, we're crafting unforgettable experiences. Together, let's create something remarkable with the power of AI. We look forward to seeing you soon." 
    }
  ];
  
  // הוסרו ה-useContext וה-useEffect הקודמים שאחראים על שליפת הנתונים מהשרת.

  return (
    <div
      className="d-flex flex-column justify-content-around"
      role="region"
      aria-label="About section"
    >
      {/* רינדור הטקסטים הסטטיים במקום הדינמיים */}
      {staticTextArray.map((item) => ( 
        <div key={item._id}>
          <p className="text-black text-start text-about" tabIndex="0">
            {item.text}
          </p>
        </div>
      ))}

      {/* קישור ליצירת קשר */}
      <div className="align-self-start text-start text-about">
        <NavLink
          to="/contact"
          className="color-blue text-decoration-none hover-underline-animation text-bolder"
          aria-label="Go to contact page to start creating together"
        >
          Let's create together...
        </NavLink>
      </div>
    </div>
  );
};

export default Text;