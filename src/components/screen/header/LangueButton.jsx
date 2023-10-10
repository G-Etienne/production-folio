//---------------------------------------------------------
//import for the context theme
import { useContext } from "react";
import { LangueContext } from "../../../contexts/LangueContext";
//---------------------------------------------------------
// //style
// import "../../../styles/components/screen/Header/_langueButton.scss";
// import "../../../styles/components/screen/Header/headerMedia/_langueButtonMediaQueries.scss";

//---------------------------------------------------------
//images of the flags
import frenchFlag from "../../../assets/Langue/france.png";
import englishFlag from "../../../assets/Langue/english.png";
//---------------------------------------------------------
function LangueButton() {
    const { langue, toggleLangue } = useContext(LangueContext);

    //changin flags
    let firstFlag = { frenchFlag };
    let secondFlag = { englishFlag };

    //image change
    if (langue === "french") {
        firstFlag = frenchFlag;
        secondFlag = englishFlag;
    } else if (langue === "english") {
        firstFlag = englishFlag;
        secondFlag = frenchFlag;
    }

    return (
        <>
            {/* interaction for the choice of language */}
            <div className="langueButton" onClick={toggleLangue}>
                {/* flags */}
                <img
                    loading="lazy"
                    src={firstFlag}
                    alt="french flag image illustraion"
                    className={`frenchFlag ${langue + "Button"}`}
                ></img>

                <img
                    loading="lazy"
                    src={secondFlag}
                    alt="english flag image illustraion"
                    className={`englishFlag ${langue + "Button"}`}
                ></img>
            </div>
        </>
    );
}

export default LangueButton;
