import React from 'react';
import logoSmall from '../../../images/logo2.png'; // הלוגו המקוצר (SEQ)
import logoFull from '../../../images/logo.png';  // הלוגו המלא (SEQUENCE)

const MobileLogo = () => {
    return (
        <div 
            className='mobile-logo-container d-flex justify-content-center align-items-center'
            role="banner"
        >
            {/* לוגו SEQ - יוצג כברירת מחדל לאורך (Portrait) */}
            <img 
                src={logoSmall} 
                alt="Sequence mobile logo" 
                className="logo-small"
                width="500" 
                height="209"
                loading="eager"
            />
            {/* לוגו SEQUENCE - יוצג רק כשהמסך לרוחב (Landscape) */}
            <img 
                src={logoFull} 
                alt="Sequence full logo" 
                className="logo-full"
                loading="eager"
            />
        </div>
    );
};

export default MobileLogo;