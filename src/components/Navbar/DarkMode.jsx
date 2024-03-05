import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; //access to html element
  console.log(element);
  // set theme to localstorage and html element
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("light");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });
  return (
    <div className="relative ">
      <img
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
        src={LightButton}
        alt="light-button "
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300 ease-in-out `}
      />
      <img
        onClick={() => {
          if (theme === "dark") {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
        src={DarkButton}
        alt="dark-button"
        className={`w-12 cursor-pointer`}
      />
    </div>
  );
};

export default DarkMode;
