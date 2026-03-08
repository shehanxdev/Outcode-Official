import { useEffect } from 'react';

const DarkClassV5 = () => {

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.remove('bg-dark');
        } else {
            document.body.classList.add("bg-dark");
        }
        document.body.classList.add("fixed-cursor");

        return () => {
            document.body.classList.remove("bg-dark", "fixed-cursor");
        };
    }, []);

    return (
        <>
        </>
    );
};

export default DarkClassV5;