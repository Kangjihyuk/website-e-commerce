import React from 'react'
import lightButton from "../assets/lightmode.png"
import nightMode from "../assets/nightmode.png";
    
const DarkMode = () => {
    const [theme, setTheme] = React.useState(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )
    
    const elements = document.documentElement;
    console.log(elements)

    React.useEffect(() => {
        if (theme === "dark") {
            elements.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            elements.classList.remove("dark")
            localStorage.setItem("theme", "light")
        } 
    },[theme])

  return (
    <div className="relative">
      <img
        className={`w-14 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1) transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
        src={lightButton}
        alt="lightmode"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <img
        src={nightMode}
        alt="nightMode"
        className="w-14 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1) transition-all duration-300"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
}

export default DarkMode