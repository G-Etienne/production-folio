//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

//---------------------------------------------------------
//import of the components
import Screen from "./screen/Screen";

//---------------------------------------------------------
// //style
// import "../styles/bases/_bases.scss";

//---------------------------------------------------------
function Main() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`mainBack ${theme + "main"}`}>
            {/* virtual screen in the site */}
            <Screen></Screen>
        </div>
    );
}

export default Main;
