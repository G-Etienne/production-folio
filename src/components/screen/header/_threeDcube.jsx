//---------------------------------------------------------
//import for the dark and white mode and langue context and states
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

//---------------------------------------------------
// //style
// import "../../../styles/components/screen/Header/_threeDcube.scss";

//---------------------------------------------------
function Cube() {
    // context for the theme of the site
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className="cubeContainer">
                <div className={`cube`}>
                    {/* faces of the cube */}
                    <div className={`cube__face front ${theme}`}></div>
                    <div className={`cube__face back ${theme}`}></div>
                    <div className={`cube__face right ${theme}`}></div>
                    <div className={`cube__face left ${theme}`}></div>
                    <div className={`cube__face top ${theme}`}></div>
                    <div className={`cube__face bottom ${theme}`}></div>
                </div>
            </div>
        </>
    );
}

export default Cube;
