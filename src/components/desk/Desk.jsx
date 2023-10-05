//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//------------------------------------------------------
//style
// import "../../styles/components/deskFooter/_desk.scss";
// //media queries
// import "../../styles/components/deskFooter/desk-media/_deskMediaQueries.scss";

//------------------------------------------------------
//Desk components
//Light on the desk
import Light from "./Light";
import Keyboard from "./Keyboard";
import Mouse from "./Mouse";
import LinksDesk from "./LinksDesk";
import Copyright from "./Copyright";

//-----------------------------------------------------
function Desk() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {/* light on the desk */}
            <Light />

            {/* desk top */}
            <div className={`desk ${theme + "Desk"}`}>                
                <Keyboard />
                <Mouse />
            </div>

            {/* thickness of the desk top */}
            <div className={`desk__front ${theme + "DeskFront"}`}></div>

            {/* elements under the desk top */}
            <div className={`desk__underTop ${theme + "UnderTop"}`}>
                <LinksDesk />

                <div className={`desk__drawer ${theme + "Drawer"}`}>
                    <div className="desk__drawer__grip"></div>

                    {/* copyright */}
                    <Copyright />
                </div>
            </div>
        </>
    );
}

export default Desk;
