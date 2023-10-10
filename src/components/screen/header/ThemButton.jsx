//---------------------------------------------------------
//import for the context theme
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
//---------w------------------------------------------------
// //style
// import "../../../styles/components/screen/Header/_themeButton.scss";
// import "../../../styles/components/screen/Header/headerMedia/_themebuttonMediaQueries.scss";

//---------------------------------------------------------
//images of the themes
import whiteTheme from "../../../assets/Theme/moon.png";
import darkTheme from "../../../assets/Theme/sun.png";

//---------------------------------------------------------
function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    //changin theme
    let firstTheme = { whiteTheme };
    let secondTheme = { darkTheme };

    if (theme === "white") {
        firstTheme = whiteTheme;
        secondTheme = darkTheme;
    } else if (theme === "dark") {
        firstTheme = darkTheme;
        secondTheme = whiteTheme;
    }

    return (
        <>
            {/* interaction theme dark and white */}
            <div className="themeButton" onClick={toggleTheme}>
                <img
                    src={firstTheme}
                    loading="lazy"
                    alt="french flag image illustraion"
                    className={`moon ${theme + "Button"}`}
                ></img>
                <img
                    src={secondTheme}
                    loading="lazy"
                    alt="french flag image illustraion"
                    className={`sun ${theme + "Button"}`}
                ></img>
            </div>
        </>
    );
}

export default ThemeButton;
