
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { convertBaseImg, convertSrcImg } from "../../utils/utils";

// הוספנו originalWidth ו-originalHeight ל-props
const SimilarProject = ({ title, img, _id, item, originalWidth, originalHeight }) => {
    const nav = useNavigate();
    const base_img = convertBaseImg(img);
    const src_img = convertSrcImg(img);
    
    // Fallback למקרה שאין מימדים (למקרה הזה CLS יופיע)
    const aspectRatioWidth = originalWidth || 16;
    const aspectRatioHeight = originalHeight || 9;

    return (
        <motion.article
            className={item}
            onClick={() => nav(`/project/${_id}`)}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            layout
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
                    srcSet={`${base_img}tr:w-400,f-auto/${src_img} 400w, ${base_img}tr:w-800,f-auto/${src_img} 800w, ${base_img}tr:w-1200,f-auto/${src_img} 1200w`}
                    // 1. הגדרת גדלים חכמה למניעת הורדת תמונות ענקיות במובייל
                    sizes="(max-width: 600px) 90vw, (max-width: 1200px) 45vw, 30vw" 
                    alt={`תמונה של הפרויקט ${title}`}
                    className="image-project"
                    width={aspectRatioWidth} 
                    height={aspectRatioHeight} 
                    // 2. טעינה עצלנית - קריטי להורדת כמות הבקשות הראשונית
                    loading="lazy" 
                    // 3. עדיפות טעינה נמוכה (כי אלו פרויקטים דומים בתחתית הדף)
                    fetchpriority="low" 
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
};

export default SimilarProject;