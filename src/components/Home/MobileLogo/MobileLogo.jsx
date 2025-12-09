import React from 'react';
// נשתמש רק ב-logo2 כיוון שזה מובייל בלבד
import logo2 from '../../../images/logo2.png'; 
// אין צורך ב-logo
// אין צורך ב-useResize או ב-useTransform/useScroll

// **חובה להחליף את ערכי הדמה האלה במימדים האמיתיים של קובץ logo2.png**
const MOBILE_LOGO_WIDTH = 500; 
const MOBILE_LOGO_HEIGHT = 209; 

const MobileLogo = () => {
    // אין צורך בבדיקת רוחב
    
    return (
        <div 
            // ניתן לקצר את הסגנונות הקשיחים ישירות ל-CSS
            className='mobile-logo-container d-flex justify-content-center align-items-center'
            role="banner"
            aria-label="Sequence brand logo"
        >
            <img 
                src={logo2} 
                alt="Sequence mobile logo" 
                className="responsive-logo-mobile"
                // קריטי לתיקון CLS: הגדרת המימדים המקוריים
                width={MOBILE_LOGO_WIDTH}
                height={MOBILE_LOGO_HEIGHT}
                loading="eager" // טעינה מיידית ללוגו קריטי
            />
        </div>
    );
};

export default MobileLogo;