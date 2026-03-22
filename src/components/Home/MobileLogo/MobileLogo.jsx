import React from 'react';
import logoSmall from '../../../images/logo2.png'; // SEQ
import logoFull from '../../../images/logo.png';  // SEQUENCE

const MobileLogo = () => {
    return (
        <div 
            className='mobile-logo-container d-flex justify-content-center align-items-center'
            role="banner"
        >
            <picture>
                {/* יורד רק אם המכשיר במצב Landscape ורחב מספיק */}
                <source 
                    media="(min-width: 600px) and (orientation: landscape)" 
                    srcSet={logoFull} 
                />
                {/* ברירת מחדל למובייל - האלמנט שיקבע את ה-LCP */}
                <img 
                    src={logoSmall} 
                    alt="Sequence mobile logo" 
                    className="logo-small"
                    width="500" 
                    height="209"
                    // אופטימיזציה קריטית ל-LCP
                    fetchpriority="high" 
                    loading="eager" 
                    decoding="sync"
                />
            </picture>
        </div>
    );
};

export default MobileLogo;