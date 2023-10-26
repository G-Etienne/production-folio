//---------------------------------------------------------
//import of the contexts
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangueContext } from "../contexts/LangueContext";

//---------------------------------------------------------
//item component
import ItemImage from "../components/Graphics/_ItemImage";

//---------------------------------------------------------
//Datas french
import DataLogo from "../data/DataGraphics/dataLogo.json";
import DataIllustration from "../data/DataGraphics/dataIllustation.json";
import DataMockups from "../data/DataGraphics/dataMockups.json";

//---------------------------------------------------------
//Datas english
import EnglishDataLogo from "../data/DataGraphics/englishDataLogos.json";
import EnglishDataIllustration from "../data/DataGraphics/englishDataIllustration.json";
import EnglishDataMockups from "../data/DataGraphics/englishDataMockups.json";

//---------------------------------------------------------
//styles
//import "../styles/pages/_skills.scss"
//import "../styles/pages/mediaQueriesPages/_skillsMediaQueries.scss"

//---------------------------------------------------------
function Graphics() {
    //context for the langue and theme
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    //sections and langue to display the good datas
    const [listToDisplay, setListToDisplay] = useState("logo");
    let dataToDisplay = DataLogo;

    if (listToDisplay === "logo" && langue === "french") {
        dataToDisplay = DataLogo;
    } else if (listToDisplay === "illustration" && langue === "french") {
        dataToDisplay = DataIllustration;
    } else if (listToDisplay === "mockups" && langue === "french") {
        dataToDisplay = DataMockups;
    }

    //english data display
    if (listToDisplay === "logo" && langue === "english") {
        dataToDisplay = EnglishDataLogo;
    } else if (listToDisplay === "illustration" && langue === "english") {
        dataToDisplay = EnglishDataIllustration;
    } else if (listToDisplay === "mockups" && langue === "english") {
        dataToDisplay = EnglishDataMockups;
    }

    //display language menu and title page
    //french
    let FrenchTitlePage = "Graphisme";
    let FrenchFirstButtonMenu = "Logos";
    let FrenchSecondButtonMenu = "Illustrations";
    let FrenchThirdButtonMenu = "Maquettes";

    //english
    let englishTitlePage = "Graphic Design";
    let englishFirstButtonMenu = "Logos";
    let englishSecondButtonMenu = "Illustrations";
    let englishThirdButtonMenu = "Mockups";

    //variables to display dynamicly the text menu and title
    //text
    let titlePage = FrenchTitlePage;
    let firstButtonMenu = FrenchFirstButtonMenu;
    let secondButtonMenu = FrenchSecondButtonMenu;
    let thirdButtonMenu = FrenchThirdButtonMenu;

    //condition for define the text title and button
    if (langue === "french") {
        titlePage = FrenchTitlePage;
        firstButtonMenu = FrenchFirstButtonMenu;
        secondButtonMenu = FrenchSecondButtonMenu;
        thirdButtonMenu = FrenchThirdButtonMenu;
    } else if (langue === "english") {
        titlePage = englishTitlePage;
        firstButtonMenu = englishFirstButtonMenu;
        secondButtonMenu = englishSecondButtonMenu;
        thirdButtonMenu = englishThirdButtonMenu;
    }

    //code returned
    return (
        // part for placing the on the virtual screen
        <div className={`graphicsScreen ${theme}`}>
            {/* header graphics */}
            <div className="graphicsScreen__headerPage"></div>
            {/* main part graphics */}
            <div className={`graphicsScreen__main ${theme}`}>
                {/* main content part */}
                <div className={`graphicsMain ${theme}`}>
                    {/* title of the page */}
                    <h1 className={`graphicsMain__titlePage ${theme}`}>
                        {titlePage}
                    </h1>

                    {/* menu in the graphics page */}
                    <div className={`graphicsMain__menu ${theme}`}>
                        {/* the third menu button */}
                        <div
                            className={`graphicsMain__menu__space ${theme}`}
                            onClick={() => setListToDisplay("logo")}
                        >
                            <p>{firstButtonMenu}</p>
                        </div>

                        <div
                            className={`graphicsMain__menu__space ${theme}`}
                            onClick={() => setListToDisplay("illustration")}
                        >
                            <p>{secondButtonMenu}</p>
                        </div>

                        <div
                            className={`graphicsMain__menu__space ${theme}`}
                            onClick={() => setListToDisplay("mockups")}
                        >
                            <p>{thirdButtonMenu}</p>
                        </div>
                    </div>

                    {/* part for display the item */}
                    <div className={`graphicsMain__projectsContainer ${theme}`}>
                        {/* returning one item for each element in the database */}
                        {dataToDisplay.map((element) => {
                            return (
                                <ItemImage
                                    key={element.id}
                                    id={element.id}
                                    name={element.name}
                                    description={element.description}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Graphics;
