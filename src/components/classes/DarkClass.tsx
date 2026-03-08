import { useEffect } from 'react';

const DarkClass = () => {

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        // Default to dark if no preference saved
        if (savedTheme === 'light') {
            document.body.classList.remove('bg-dark');
        } else {
            document.body.classList.add('bg-dark');
        }

        return () => {
            document.body.classList.remove('bg-dark');
        };
    }, []);

    return (
        <>

        </>
    );
};

export default DarkClass;