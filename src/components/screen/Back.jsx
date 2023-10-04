//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

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

    //current theme
    let backScreen = backScreenClear;

    //changin the back
    if (theme === "white") {
        backScreen = backScreenClear;
    } else if (theme === "dark") {
        backScreen = backScreendark;
    }

    return (
        <>
            {/* image of the back of the animation */}
            <img
                src={backScreen}
                alt="imagne for the back of the screen"
                className={`backScreenImage ${theme}`}
            ></img>

            {/* animation */}
            <AnimBack />
        </>
    );
}

export default Back;
