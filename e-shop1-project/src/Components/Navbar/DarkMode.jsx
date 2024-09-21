import React from 'react'
import lightmode from '../../../public/images/lightmode.png'
import darkmode from '../../../public/images/darkmode.png'

const DarkMode = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const element = document.documentElement;

  React.useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem("theme", theme);
    
    // Add/remove theme class based on current theme
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]); // Effect will run whenever the theme changes
  return (
    <div className='relative'>
      <img 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={lightmode} 
        alt="Light Mode"
        className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`}
      />
      <img 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={darkmode} 
        alt="Dark Mode"
        className={`w-12 cursor-pointer rounded-full ${theme === "dark" ? "opacity-100" : "opacity-0"} transition-all duration-300`}
      />
    </div>
  );
}

export default DarkMode;
