//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//---------------------------------------------------------
// //style
// import "../../styles/components/deskFooter/_key.scss";
// import "../../styles/components/deskFooter/desk-media/_keyMediaQueries.scss";

//---------------------------------------------------------
function Key({ keyLetter }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`key ${theme + "Key"}`}>
            <p className={`key__letter ${theme + "Letter"}`}>{keyLetter}</p>
        </div>
    );
}

export default Key;
