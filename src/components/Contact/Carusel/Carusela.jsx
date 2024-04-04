import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useResize } from "../../../hooks/useResize";
import { ProjectContext } from "../../../context/ProjectContext";
import { convertBaseImg, convertSrcImg } from "../../../utils/utils";

const Carusela = () => {
  const resize = useResize();
  const { images } = useContext(ProjectContext);

  return (
    <div className="carousel" >
      <Carousel fade>
        {images.map((img) => {
            const base_img = convertBaseImg(img)
            const src_img = convertSrcImg(img)
            return (
              <Carousel.Item key={img}>
            <img
               src={`${base_img}tr:f-auto/${src_img}`}
              alt={img}
              style={{
                height: resize > 800 ? 700 : 300,
                width: "100%",
                objectFit: "cover",
              }}
            />
            

            
          </Carousel.Item>
            )
        }
          
        )}
      </Carousel>
    </div>
  );
};

export default Carusela;
