//---------------------------------------------------------
//import of the context
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangueContext } from "../contexts/LangueContext";

//---------------------------------------------------------
//import react-router-dom for the links navigation
import { NavLink } from "react-router-dom";

//-----------------------------------------------------------------
//components
import Cube from "../components/screen/header/_threeDcube";

//-----------------------------------------------------------------
// //style
// import "../styles/pages/_home.scss";
// import "../styles/pages/mediaQueriesPages/_mediaQueriesHome.scss";

//-----------------------------------------------------------------
//image
import resumeLogo from "../assets/Home/resume-logo.jpg";
import persoHome from "../assets/Home/persoHome.png";

//-----------------------------------------------------------------
function Home() {
    // langue and theme
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    //french part
    if (langue === "french") {
        return (
            // homeScreen is the block who allow to place the page on the virtual screen
            <div className="homeScreen">
                <div className="homeScreen__headerPage">
                    {/* hearder part of the home page */}
                    <div className={`headerHome ${theme}`}></div>
                </div>

                <div className={`homeScreen__main ${theme}`}>
                    {/* main part of the home page */}
                    <div className={`homeMain ${theme}`}>
                        <div className={`homeMain__resumeContainer ${theme}`}>
                            {/* part for askinc to clock on the menu */}
                            <div
                                className={`homeMain__resumeContainer__interactifResume ${theme}`}
                            >
                                <div
                                    className={`homeMain__resumeContainer__interactifResume__menu ${theme}`}
                                >
                                    <Cube />
                                </div>

                                <div
                                    className={`homeMain__resumeContainer__interactifResume__text ${theme}`}
                                >
                                    <h4>Bienvenue sur mon cyberespace !</h4>

                                    <p>Explorez-le en cliquant sur le menu !</p>
                                </div>
                            </div>

                            {/* part for the clasic menu */}
                            <div
                                className={`homeMain__resumeContainer__classicResume ${theme}`}
                            >
                                <div
                                    className={`homeMain__resumeContainer__classicResume__image ${theme}`}
                                >
                                    <img
                                        src={resumeLogo}
                                        alt="image who ilustrate the classic cv element."
                                        rel="preload"
                                        loading="lazy"
                                    />
                                </div>

                                <div
                                    className={`homeMain__resumeContainer__classicResume__text ${theme}`}
                                >
                                    <h4>Vous êtes plutôt CV classique ?</h4>

                                    <NavLink
                                        className={`homeMain__resumeContainer__classicResume__text__link ${theme}`}
                                        to={"/resume"}
                                    >
                                        <p
                                            className={`homeMain__resumeContainer__classicResume__text__link__paragraphe ${theme}`}
                                        >
                                            Mon CV en un clic!
                                        </p>
                                    </NavLink>
                                </div>
                            </div>

                            <div
                                className={`homeMain__divMobileAnimShow ${theme}`}
                            ></div>
                        </div>

                        {/* message for introducting etienne */}
                        <div
                            className={`homeMain__presentationContainer ${theme}`}
                        >
                            {/* image part */}
                            <div
                                className={`homeMain__presentationContainer__image ${theme}`}
                            >
                                <img
                                    src={persoHome}
                                    alt="image du perso de la page d'accueil."
                                    rel="preload"
                                    loading="lazy"
                                />
                            </div>

                            {/* text part */}
                            <div
                                className={`homeMain__presentationContainer__text ${theme}`}
                            >
                                <h4>
                                    Bonjour, je suis Étienne, un développeur web
                                    passionné.
                                </h4>

                                <p>
                                    Bienvenue sur mon portfolio où vous
                                    découvrirez mes compétences et projets.{" "}
                                    <br />
                                    <br />
                                    Explorez mon univers digital où chaque ligne
                                    de code façonne le web de demain. <br />
                                    <br />
                                    Rejoinez-moi dans ce voyage interactif au
                                    croisement de la programmation et du design.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    //english part
    if (langue === "english") {
        return (
            // homeScreen is the block who allow to place the page on the virtual screen
            <div className="homeScreen">
                <div className="homeScreen__headerPage">
                    {/* hearder part of the home page */}
                    <div className={`headerHome ${theme}`}></div>
                </div>

                <div className={`homeScreen__main ${theme}`}>
                    {/* main part of the home page */}
                    <div className={`homeMain ${theme}`}>
                        <div className={`homeMain__resumeContainer ${theme}`}>
                            {/* part for askinc to clock on the menu */}
                            <div
                                className={`homeMain__resumeContainer__interactifResume ${theme}`}
                            >
                                <div
                                    className={`homeMain__resumeContainer__interactifResume__menu ${theme}`}
                                >
                                    <Cube />
                                </div>

                                <div
                                    className={`homeMain__resumeContainer__interactifResume__text ${theme}`}
                                >
                                    <h4>Welcome to my cyberspace !</h4>

                                    <p>Explore it by clicking on the menu !</p>
                                </div>
                            </div>

                            {/* part for the clasic menu */}
                            <div
                                className={`homeMain__resumeContainer__classicResume ${theme}`}
                            >
                                <div
                                    className={`homeMain__resumeContainer__classicResume__image ${theme}`}
                                >
                                    <img
                                        src={resumeLogo}
                                        alt="image who ilustrate the classic cv element."
                                        rel="preload"
                                        loading="lazy"
                                    />
                                </div>

                                <div
                                    className={`homeMain__resumeContainer__classicResume__text ${theme}`}
                                >
                                    <h4>Do you prefer a classic resume ?</h4>

                                    <NavLink
                                        className={`homeMain__resumeContainer__classicResume__text__link ${theme}`}
                                        to={"/resume"}
                                    >
                                        <p
                                            className={`homeMain__resumeContainer__classicResume__text__link__paragraphe ${theme}`}
                                        >
                                            My resume !
                                        </p>
                                    </NavLink>
                                </div>
                            </div>

                            <div
                                className={`homeMain__divMobileAnimShow ${theme}`}
                            ></div>
                        </div>

                        {/* message for introducting etienne */}
                        <div
                            className={`homeMain__presentationContainer ${theme}`}
                        >
                            {/* image part */}
                            <div
                                className={`homeMain__presentationContainer__image ${theme}`}
                            >
                                <img
                                    src={persoHome}
                                    alt="image du perso de la page d'accueil."
                                    rel="preload"
                                    loading="lazy"
                                />
                            </div>

                            {/* text part */}
                            <div
                                className={`homeMain__presentationContainer__text ${theme}`}
                            >
                                <h4>
                                    Hi, I am Étienne, a passionate web
                                    developer.
                                </h4>

                                <p>
                                    Welcome to my portfolio where you will
                                    discover my skills and projects. <br />
                                    <br /> Explore my digital universe where
                                    each line of code shapes the web of
                                    tomorrow. <br /> <br /> Join me on this
                                    interactive journey at the crossroads of
                                    programming and design.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
