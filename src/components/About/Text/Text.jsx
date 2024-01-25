import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Text = () => {

 

  return (
    <div className="d-flex flex-column justify-content-around">
      
      <div className="overflow-hidden">
        <p className="text-black text-start text-about">
        SEQUENCE Studio is your boutique destination for captivating video solutions. We specialize in video production for commercials, animations, user interface experiences, and more. Our team of top-notch professionals crafts tailored videos for TV, web, and cinema. From directing to motion design, 2D/3D animation, and color corrections, we handle it all, working closely with our clients at every stage. Nestled in the heart of Moshav Ramot Hashavim, our studio blends creativity and technology in a charming orchard setting with ample parking. Join us in bringing your ideas to life – where innovation meets old-world charm. We look forward to seeing you soon!
        </p>
      </div>

      <p className="text-black text-start text-about ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus unde eum
        officiis aliquam saepe blanditiis eos vel reprehenderit, dolor
        inventore. Vero, ratione? Reiciendis laborum quia minus quisquam
        praesentium id optio. Reiciendis odio deserunt asperiores quibusdam
        animi pariatur similique quod. Fugiat corporis quam, magnam numquam
        iusto itaque qui dicta possimus porro. Aliquam dolore doloribus illo
        nisi ducimus est temporibus illum quasi. Magni dicta eveniet
        necessitatibus adipisci ratione? Iste, praesentium? Facilis nobis, id
        non necessitatibus natus qui culpa quibusdam molestiae eos adipisci
        aliquam error fuga? Minus voluptates exercitationem molestias iusto
        fugiat maxime?
      </p>

      <div className={"align-self-start  text-start text-about"}>
        <NavLink
          to="/contact"
          className={
            "color-blue text-decoration-none hover-underline-animation text-bolder"
          }
        >
          Let's create together...
        </NavLink>
      </div>
    </div>
  );
};

export default Text;
