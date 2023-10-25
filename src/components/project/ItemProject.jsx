//---------------------------------------------------------
//import of the contexts
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//---------------------------------------------------------
//font awesome with some icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

//---------------------------------------------------------
//images

//projet 7 Booki
import ImageBookiLogo from "../../assets/Project/Projet-1/Booki.png";
import ImageBookiIllustration from "../../assets/Project/Projet-1/illustration-booki.png";
import ImageBookiModel from "../../assets/Project/Projet-1/maquette -Booki.png";
import ImageBookiModelMobile from "../../assets/Project/Projet-1/maquette -Booki-mobile.png";
//projet 6 ohMyFood
import ImageOhmyfoodLogo from "../../assets/Project/projet-2/ohmyfoodLogo.png";
import ImageOhmyfoodModel from "../../assets/Project/projet-2/ohmyfoodModel.png";
import ImageOhmyfoodModelMobile from "../../assets/Project/projet-2/ohmyfoodModelMobile.png";

//projet 5 La panthère
import ImageLapanthereLogo from "../../assets/Project/projet-3/logoLaPanthere.png";
import ImageLapanthereModel from "../../assets/Project/projet-3/lapanthereModel.png";
import ImageLapanthereModelMobile from "../../assets/Project/projet-3/lapanthereModelMobile.png";

//projet 4 Kanap
import ImageKanapLogo from "../../assets/Project/projet-4/kanapLogo.png";
import ImageKanapModel from "../../assets/Project/projet-4/kanapModel.png";
import ImageKanapModelMobile from "../../assets/Project/projet-4/kanapModelMobile.png";

//projet 3 HotTakes
import ImageHottakesLogo from "../../assets/Project/projet-5/LogoHotTakes.png";
import ImageHottakesModel from "../../assets/Project/projet-5/modelHotTake.png";

//projet 2 Kasa
import ImageKasaLogo from "../../assets/Project/projet-6/KasaLogo.png";
import ImageKasaModel from "../../assets/Project/projet-6/KasaDesktop.png";
import ImageKasaModelMobile from "../../assets/Project/projet-6/KasaMobile.png";

//projet 1 Portfolio
import ImagePortfolioLogo from "../../assets/Project/projet-7/LogoFolio.png";
import ImagePortfolioModel from "../../assets/Project/projet-7/folioModel.png";
import ImagePortfolioModelMobile from "../../assets/Project/projet-7/folioModelMobile.png";

//---------------------------------------------------------
function ItemProject({
    project,
    name,
    titleImage,
    titleImageTwo,
    titleImageThree,
    firstTitleTextPart,
    titlePresentation,
    textPresentation,
    listTechno,
    objectif,
    context,
    work,
    workDetails,
    conclusion,
    linkSite,
    linkCode,
    secondTitleTextPart,
    thirdTitleTextPart,
    fourTitleTextPart,
    fiveTitleTextPart,
    sixTitleTextPart,
    sevenTitleTextPart,
    linkSiteText,
    linkCodeText,
}) {
    //state and change state const for displays the content of a project
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    //context for the theme
    const { theme } = useContext(ThemeContext);

    //hide button (specifique action)
    let desabled = "";
    if (linkSite === "#") {
        desabled = "disabled";
    }

    //hide element (specifique action)
    let desabledModel = "";
    if (titleImageThree === "#") {
        desabledModel = "desabledModel";
    }

    //images display for one project
    let ImageIllustrationDisplay;
    let logoDisplay;
    let modelDesktop;
    let modelMobile;

    //targer the good images
    if (name === "Booki") {
        logoDisplay = ImageBookiLogo;
        ImageIllustrationDisplay = ImageBookiIllustration;
        modelDesktop = ImageBookiModel;
        modelMobile = ImageBookiModelMobile;
    } else if (name === "OhMyFood") {
        logoDisplay = ImageOhmyfoodLogo;
        ImageIllustrationDisplay = ImageOhmyfoodModel;
        modelDesktop = ImageOhmyfoodModel;
        modelMobile = ImageOhmyfoodModelMobile;
    } else if (name === "La Panthère") {
        logoDisplay = ImageLapanthereLogo;
        ImageIllustrationDisplay = ImageLapanthereModel;
        modelDesktop = ImageLapanthereModel;
        modelMobile = ImageLapanthereModelMobile;
    } else if (name === "Kanap") {
        logoDisplay = ImageKanapLogo;
        ImageIllustrationDisplay = ImageKanapModel;
        modelDesktop = ImageKanapModel;
        modelMobile = ImageKanapModelMobile;
    } else if (name === "Hot Takes API") {
        logoDisplay = ImageHottakesLogo;
        ImageIllustrationDisplay = ImageHottakesModel;
        modelDesktop = ImageHottakesModel;
    } else if (name === "Kasa") {
        logoDisplay = ImageKasaLogo;
        ImageIllustrationDisplay = ImageKasaModel;
        modelDesktop = ImageKasaModel;
        modelMobile = ImageKasaModelMobile;
    } else if (name === "Portfolio") {
        logoDisplay = ImagePortfolioLogo;
        ImageIllustrationDisplay = ImagePortfolioModel;
        modelDesktop = ImagePortfolioModel;
        modelMobile = ImagePortfolioModelMobile;
    }

    return (
        // block project
        <div className={`project${project}  ${theme}`}>
            {/* interactive button to open a project */}
            <div
                onClick={toggleOpen}
                className={`project${project}__buttonOpen  ${theme}`}
            ></div>

            {/* part who appear in first for intruduce a project */}
            <div
                className={`project${project}__presentationContainer  ${
                    isOpen ? "projectOpen" : "projectNotOpen"
                } ${theme}`}
            >
                {/* illustration of the project (interactive) */}
                <img
                    onClick={toggleOpen}
                    src={ImageIllustrationDisplay}
                    alt="c'est une image de la page d'accueil du site."
                />

                {/* bloc logo and text */}
                <div className={`project${project}__presentation ${theme}`}>
                    {/* logo project */}
                    <img
                        src={logoDisplay}
                        alt="c'est le logo du site du projet."
                    />

                    {/* title and introduction of the project */}
                    <div>
                        <h3>{titlePresentation}</h3>

                        <p>{textPresentation}</p>
                    </div>
                </div>
            </div>

            {/* block project text */}
            <div
                className={`project${project}__textPart ${
                    isOpen ? "projectOpen" : "projectNotOpen"
                } ${theme}`}
            >
                {/* button to close the information about a project */}
                <div
                    onClick={toggleOpen}
                    className={`project${project}__buttonClose  ${theme}`}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </div>

                {/* content project */}
                {/* name and model presentation */}
                <div>
                    <h3>{name}</h3>

                    <h5>{titleImage}</h5>

                    <p>{titleImageTwo}</p>

                    <img src={modelDesktop} alt="Maquette desktop du site." />

                    <p className={`${desabledModel}`}>{titleImageThree}</p>

                    <img
                        className={`project${project}__textPart__mobileModel ${desabledModel}`}
                        src={modelMobile}
                        alt="Maquette mobile du site"
                    />
                </div>

                {/* text for descripting the project */}
                <div className={`project${project}__textPart__text ${theme}`}>
                    <h2>{firstTitleTextPart}</h2>

                    <h4>{secondTitleTextPart}</h4>
                    <ul>
                        <li>{listTechno}</li>
                    </ul>

                    <h4>{thirdTitleTextPart}</h4>
                    <p>{objectif}</p>

                    <h4>{fourTitleTextPart}</h4>
                    <p>{context}</p>

                    <h4>{fiveTitleTextPart}</h4>
                    <p>{work}</p>

                    <h4>{sixTitleTextPart}</h4>
                    <p>{workDetails}</p>

                    <h4>{sevenTitleTextPart}</h4>
                    <p>{conclusion}</p>

                    {/* utils link for redirecting toward the code or the project website */}
                    <div className={`project${project}__textPart__links`}>
                        <a
                            className={`project${project}__textPart__link ${desabled} ${theme}`}
                            href={linkSite}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {linkSiteText}
                        </a>

                        <a
                            className={`project${project}__textPart__link ${theme}`}
                            href={linkCode}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {linkCodeText}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemProject;
