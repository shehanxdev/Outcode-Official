import { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [isLight, setIsLight] = useState(() => {
        return localStorage.getItem('theme') === 'light';
    });

    // Sync body class and persist
    useEffect(() => {
        if (isLight) {
            document.body.classList.remove('bg-dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('bg-dark');
            localStorage.setItem('theme', 'dark');
        }
    }, [isLight]);

    const handleDarkClick = () => {
        setIsLight(false);
    };

    const handleLightClick = () => {
        setIsLight(true);
    };

    return (
        <>
            <div className="radio-btn" onClick={handleDarkClick}>
                <div className={`radio-inner ${!isLight ? 'active' : ''}`}></div>
            </div>

            <div className="radio-btn-light" onClick={handleLightClick}>
                <div className={`radio-inner-light ${isLight ? 'active' : ''}`}></div>
            </div>
        </>
    );
};

export default ThemeToggle;
