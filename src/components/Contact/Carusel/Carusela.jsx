import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useResize } from "../../../hooks/useResize";
import { ProjectContext } from "../../../context/ProjectContext";

const Carusela = () => {
  const resize = useResize();
  const { images } = useContext(ProjectContext);

  return (
    <div className="carousel" >
      <Carousel fade>
        {images.map((slider) => (
          <Carousel.Item key={slider}>
            <img
              src={slider}
              alt="..."
              style={{
                height: resize > 800 ? 700 : 200,
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
