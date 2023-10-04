//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

//---------------------------------------------------------
//import of the components
import Screen from "./screen/Screen";
import Footer from "./Footer";

//---------------------------------------------------------
// //style
 import "../styles/css/style.css";
//---------------------------------------------------------
function Main() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`mainBack ${theme + "main"}`}>
            {/* virtual screen in the site */}
            <Screen></Screen>
            <Footer></Footer>
        </div>
    );
}

export default Main;
