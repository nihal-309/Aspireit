import React, { useState, useEffect } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const Mode_btn = () => {
    // Initialize darkMode from localStorage
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem("darkMode");
        return savedMode === "true" ? true : false;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("darkMode", "true");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("darkMode", "false");
        }
    }, [darkMode]);

    return (
        <div
            className="modeSwitch"
            onClick={() => setDarkMode(!darkMode)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    setDarkMode(!darkMode);
                }
            }}
        >
            {darkMode ? (
                <BsFillMoonStarsFill style={{ color: "white" }} className='md:h-[20px] md:w-[25px] sm: w-[20px] sm: h-[25px] sm: ml-[10px] md:ml-[0px]' />
            ) : (
                <BsFillSunFill style={{ color: "black" }} className='md:h-[25px] md:w-[25px] sm: w-[20px] sm: h-[25px] sm: ml-[10px] md:ml-[0px]' />
            )}
        </div>
    );
};

export default Mode_btn;
