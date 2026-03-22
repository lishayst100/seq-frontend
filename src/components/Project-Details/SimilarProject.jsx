import React, { memo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { convertBaseImg, convertSrcImg } from "../../utils/utils";

const SimilarProject = memo(({ title, img, _id, item, originalWidth, originalHeight }) => {
    const nav = useNavigate();
    const base_img = convertBaseImg(img);
    const src_img = convertSrcImg(img);
    
    const aspectRatioWidth = originalWidth || 16;
    const aspectRatioHeight = originalHeight || 9;

    return (
        <motion.article
            className={item}
            onClick={() => nav(`/project/${_id}`)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} // אנימציה רק כשנכנס למסך לשיפור TBT
            viewport={{ once: true }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter') nav(`/project/${_id}`);
            }}
            aria-label={`מעבר לפרויקט דומה בשם: ${title}`}
        >
            <div className="image-container">
                <img
                    src={`${base_img}tr:w-800,f-auto/${src_img}`}
                    srcSet={`${base_img}tr:w-400,f-auto/${src_img} 400w, ${base_img}tr:w-800,f-auto/${src_img} 800w`}
                    // בחירה חכמה של גודל הקובץ לפי רוחב המסך
                    sizes="(max-width: 600px) 400px, 800px" 
                    alt={`תמונה של הפרויקט ${title}`}
                    className="image-project"
                    width={aspectRatioWidth} 
                    height={aspectRatioHeight} 
                    loading="lazy" // דחיית טעינה לפרויקטים דומים
                    decoding="async"
                    onError={({ currentTarget }) => {
                        currentTarget.src = `${base_img}tr:w-800,f-png/${src_img}`;
                        currentTarget.onerror = null;
                    }}
                />
                <div className="color-overlay" aria-hidden="true" />
                <div className="project-title">{title}</div>
            </div>
        </motion.article>
    );
});

export default SimilarProject;