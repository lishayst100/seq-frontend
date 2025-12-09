import React, { useEffect ,createContext,useState} from 'react'
import { BASE_URL } from '../utils/utils';


const ProjectContext = createContext(null);

const ProjectContextProvider = ({children}) => {
    // 1. שינוי: מתחילים את isLoading ב-true כדי לסמן שהטעינה החלה
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    const [images, setImages] = useState([]);
    const [text, setText] = useState([]);
    const [showreel, setShowreel] = useState([]);
    
    const getProjects = () => {
        setIsLoading(true);
        fetch(`${BASE_URL}/projects/getProjects`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setProjects(data);
        }) 
        .catch( err => {
            console.error("Error fetching projects:", err);
            setProjects([]); // במקרה כשל, מוודאים שהמערך נשאר ריק
        })
        .finally(() => {
            // מעדכן את isLoading ל-false תמיד, אחרי סיום הפעולה
            setIsLoading(false); 
        });
    }

    // הפעלת טעינת הפרויקטים באופן אוטומטי
    useEffect(() => {
        getProjects();
        // הערה: ניתן להוסיף כאן קריאות אוטומטיות ל-getCarousel/getText/getShowreel אם צריך
    }, []); // רץ רק פעם אחת בטעינת ה-Provider

    // פונקציית הפילטור: יש לעדכן את setIsLoading ב-finally גם כאן
    const projectsFilter = (filter) => {
        setIsLoading(true);
        fetch(`${BASE_URL}/projects/findProjectByGenre/${filter}`)
        .then(res => res.json())
        .then(data => {
            setProjects(data);
        }) 
        .catch( err => console.error("Error filtering projects:", err) )
        .finally(() => {
            setIsLoading(false);
        });
    }

    // יש לוודא שגם פונקציות אלה מעדכנות את isLoading ב-finally
    const getCarousel = () => {
        setIsLoading(true); // עשוי להיות רלוונטי אם קוראים לפונקציה זו לבד
        fetch(`${BASE_URL}/carousel/`)
        .then(res => res.json())
        .then(result => {
            setImages(result[0].url);
        })
        .finally(() => {
            // יש להקפיד לטפל ב-isLoading כאן אם יש יותר מ-isLoading אחד,
            // או לוודא ש-isLoading מתייחס רק לטעינת הפרויקטים הראשיים
            setIsLoading(false); 
        });
    }
    const getText = () => {
        fetch(`${BASE_URL}/text/`)
        .then(res => res.json())
        .then(result => {
            setText(result);
        })
    }
    const getShowreel = () => {
        fetch(`${BASE_URL}/showreel/getShowreel`)
        .then(res => res.json())
        .then(result => {
            setShowreel(result);
        })
    }
    
    return (
        <ProjectContext.Provider 
            value={{
                projects, 
                getProjects, 
                projectsFilter, 
                isLoading, 
                images, 
                getCarousel, 
                text, 
                getText, 
                showreel, 
                getShowreel
            }}
        >
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider

export { ProjectContext}