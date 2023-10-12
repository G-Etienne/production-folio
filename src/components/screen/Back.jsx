//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useLocation } from "react-router-dom";

//--------------------------------------------------
// //style
// import "../../styles/components/screen/_back.scss";

//--------------------------------------------------
//animation element
import AnimBack from "./AnimBack";

//--------------------------------------------------
//image of the back
import backScreenClear from "../../assets/BackScreen/back-clear.png";
import backScreendark from "../../assets/BackScreen/back-dark.png";

//--------------------------------------------------
function Back() {
    {
        /* themes */
    }
    const { theme } = useContext(ThemeContext);

    //page
    const location = useLocation();
    const page = location.pathname.slice(
        location.pathname.lastIndexOf("/") + 1,
    );

    //current theme
    let backScreen = backScreenClear;

    //changin the back
    if (theme === "white") {
        backScreen = backScreenClear;
    } else if (theme === "dark") {
        backScreen = backScreendark;
    }

    return (
        <div className={`${page} ${theme}`}>
            {/* image of the front of the screen */}
            <img
                src={backScreen}
                alt="imagne for the back of the screen"
                className={`backScreenImageHome ${theme}`}
                rel="preload"
                loading="lazy"
            ></img>

            {/* animation */}
            <AnimBack />
        </div>
    );
}

export default Back;
