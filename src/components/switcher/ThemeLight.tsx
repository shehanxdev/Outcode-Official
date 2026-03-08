import { useState, useEffect } from 'react';

const ThemeLight = () => {
    const [isLight, setIsLight] = useState(() => {
        return localStorage.getItem('theme') === 'light';
    });

    useEffect(() => {
        if (isLight) {
            document.body.classList.remove('bg-dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('bg-dark');
            localStorage.setItem('theme', 'dark');
        }
    }, [isLight]);

    const handleToggle = () => {
        setIsLight(prev => !prev);
    };

    return (
        <>
            <div className="radio-btn-light" onClick={handleToggle}>
                <div className={`radio-inner-light ${isLight ? 'active' : ''}`}></div>
            </div>
        </>
    );
};

export default ThemeLight;
