//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//---------------------------------------------------------
// //style
// import "../../styles/components/deskFooter/_mouse.scss";
// import "../../styles/components/deskFooter/desk-media/_mouseMediaQueries.scss";

//---------------------------------------------------------
function Mouse() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {/* computer mouse */}
            <div className="mousepad">
                <div className={`mouse ${theme + "Mouse"}`}>
                    {/* touches of the mouse */}
                    <div className="mouseTouchOne"></div>

                    <div className="mouseTouchTwo"></div>
                </div>
            </div>
        </>
    );
}

export default Mouse;
