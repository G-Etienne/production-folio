//---------------------------------------------------------
//import of the context
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangueContext } from "../contexts/LangueContext";

//---------------------------------------------------------
//components
//---------------------------------------------------------
// //style for the Home page
// import "../styles/pages/_about.scss";
// import "../styles/pages/mediaQueriesPages/_mediaQueriesAbout.scss";

//---------------------------------------------------------
//image
import aboutImageClear from "../assets/About/about-image.jpg";
import aboutImageDark from "../assets/About/about-dark-image.jpg";
//---------------------------------------------------------
function Home() {
    //context for the langue and theme
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    //change image according to the theme
    let aboutImage = aboutImageClear;

    if (theme === "white") {
        aboutImage = aboutImageClear;
    } else if (theme === "dark") {
        aboutImage = aboutImageDark;
    }

    //french part
    if (langue === "french") {
        return (
            // part for placing the on the virtual screen
            <div className={`aboutScreen ${theme}`}>
                {/* header about */}
                <div className="aboutScreen__headerPage">
                    <div className={`headerAbout ${theme}`}></div>
                </div>

                {/* main part about */}
                <div className={`aboutScreen__main ${theme}`}>
                    <div className={`aboutMain ${theme}`}>
                        {/* part on the top of the about page (links, big title, picture) */}
                        <div className={`aboutMain__containerTop ${theme}`}>
                            <div
                                className={`aboutMain__containerTop__menu ${theme}`}
                            >
                                <a href="#WhoIAm">Qui suis-je ?</a>

                                <a href="#Web">
                                    <strong>Le Web</strong>
                                </a>

                                <a href="#Bottom">
                                    Avant <strong>le Web</strong>
                                </a>
                            </div>

                            <h3
                                className={`aboutMain__containerTop__title ${theme}`}
                            >
                                TOUT <br />
                                SUR <br />
                                MOI...
                            </h3>

                            <img
                                src={aboutImage}
                                alt="image for illustrate the about page"
                                className={`aboutMain__containerTop__image ${theme}`}
                                rel="preload"
                                loading="lazy"
                            ></img>
                        </div>

                        {/* part about etienne */}
                        <div
                            id="WhoIAm"
                            className={`aboutMain__containerWhoIAm ${theme}`}
                        >
                            <h2
                                className={`aboutMain__containerWhoIAm__title ${theme}`}
                            >
                                Qui <br />
                                suis-je ?
                            </h2>

                            <div
                                className={`aboutMain__containerWhoIAm__textPart ${theme}`}
                            >
                                <p
                                    className={`aboutMain__containerWhoIAm__textPart__text ${theme}`}
                                >
                                    Je suis passionné et totalement investi dans
                                    mes projets. Mon désir constant
                                    d&apos;apprendre et de relever des défis me
                                    pousse à fournir toujours plus
                                    d&apos;efforts. Je crois fermement en la
                                    valeur de chaque idée et en la rapidité de
                                    l&apos;évolution grâce à la collaboration.
                                    La bienveillance est pour moi essentielle
                                    pour créer un environnement plaisant et
                                    enrichissant. En somme, je suis un homme
                                    empathique qui valorise le bien-être de
                                    chacun, pour que chaque jour soit agréable.
                                </p>
                            </div>
                        </div>

                        {/* part about the web */}
                        <div
                            id="Web"
                            className={`aboutMain__containerWeb ${theme}`}
                        >
                            <h2
                                className={`aboutMain__containerWeb__title ${theme}`}
                            >
                                Pour moi, <br />
                                le web ...
                            </h2>

                            <div
                                className={`aboutMain__containerWeb__textPart ${theme}`}
                            >
                                <p
                                    className={`aboutMain__containerWeb__textPart__text ${theme}`}
                                >
                                    Le <strong>développement web</strong> a été
                                    une révélation pour moi. En tant que créatif
                                    depuis ma jeunesse, j&apos;ai retrouvé dans
                                    ce domaine ma passion pour le{" "}
                                    <strong>design</strong> et{" "}
                                    <strong>l&apos;expérience visuelle</strong>.
                                    Cette profession me permet également de
                                    combiner ma passion pour la logique. Ainsi,
                                    je peux créer des{" "}
                                    <strong>éléments visuels</strong> en
                                    utilisant des logiques simples et efficaces
                                    sur <strong>le web</strong>. Mon objectif
                                    est de transformer du code en œuvres
                                    d&apos;art accessibles au monde entier.
                                </p>
                            </div>
                        </div>

                        {/* part about wath etienne do befor the web */}
                        <div
                            id="Bottom"
                            className={`aboutMain__containerBottom ${theme}`}
                        >
                            <h2
                                className={`aboutMain__containerBottom__title ${theme}`}
                            >
                                Ma vie <br />
                                avant le Web
                            </h2>

                            <div
                                className={`aboutMain__containerBottom__textPart ${theme}`}
                            >
                                <p
                                    className={`aboutMain__containerBottom__textPart__text ${theme}`}
                                >
                                    Je n&apos;ai pas toujours été{" "}
                                    <strong>développeur</strong>. J&apos;ai
                                    travaillé comme charpentier pendant dix ans.
                                    Cette expérience a renforcé mon leadership,
                                    mon sens de l&apos;organisation, des
                                    responsabilités et de la rigueur,
                                    compétences qui sont toujours essentielles
                                    pour maintenir la qualité de mon travail
                                    actuel et de mes projets.
                                </p>
                            </div>
                        </div>

                        {/* fake footer for good style */}
                        <div className={`aboutFakeFooter ${theme}`}></div>
                    </div>
                </div>
            </div>
        );
    }

    //english part
    if (langue === "english") {
        return (
            // part for placing the on the virtual screen
            <div className={`aboutScreen ${theme} `}>
                {/* header about */}
                <div className="aboutScreen__headerPage">
                    <div className={`headerAbout ${theme}`}></div>
                </div>

                {/* main part about */}
                <div className={`aboutScreen__main ${theme}`}>
                    <div className={`aboutMain ${theme}`}>
                        {/* part on the top of the about page (links, big title, picture) */}
                        <div className={`aboutMain__containerTop ${theme}`}>
                            <div
                                className={`aboutMain__containerTop__menu ${theme}`}
                            >
                                <a href="#WhoIAm">Who am I ...</a>

                                <a href="#Web">The Web ...</a>

                                <a href="#Bottom">Before the Web ...</a>
                            </div>

                            <h3
                                className={`aboutMain__containerTop__title ${theme}`}
                            >
                                ALL <br />
                                ABOUT <br />
                                ME...
                            </h3>

                            <img
                                src={aboutImage}
                                alt="image for illustrate the about page"
                                className={`aboutMain__containerTop__image ${theme}`}
                                rel="preload"
                                loading="lazy"
                            ></img>
                        </div>

                        {/* part about etienne */}
                        <div
                            id="WhoIAm"
                            className={`aboutMain__containerWhoIAm ${theme}`}
                        >
                            <h2
                                className={`aboutMain__containerWhoIAm__title ${theme}`}
                            >
                                Who <br />
                                am I ?
                            </h2>

                            <div
                                className={`aboutMain__containerWhoIAm__textPart ${theme}`}
                            >
                                <p
                                    className={`aboutMain__containerWhoIAm__textPart__text ${theme}`}
                                >
                                    I am passionate and fully committed to my
                                    projects. My constant desire to learn and
                                    take on challenges drives me to put in even
                                    more effort. I firmly believe in the value
                                    of every idea and in the speed of progress
                                    through collaboration. Kindness is essential
                                    to me in creating a pleasant and enriching
                                    environment. In summary, I am an empathetic
                                    person who values the well-being of
                                    everyone, so that each day is enjoyable.
                                </p>
                            </div>
                        </div>

                        {/* part about the web */}
                        <div
                            id="Web"
                            className={`aboutMain__containerWeb ${theme}`}
                        >
                            <h2
                                className={`aboutMain__containerWeb__title ${theme}`}
                            >
                                For me, <br />
                                the web ...
                            </h2>

                            <div
                                className={`aboutMain__containerWeb__textPart ${theme}`}
                            >
                                <p
                                    className={`aboutMain__containerWeb__textPart__text ${theme}`}
                                >
                                    <strong>Web development</strong> has been a
                                    revelation for me. As a creative person
                                    since my youth, I rediscovered my passion
                                    for <strong>design</strong> and{" "}
                                    <strong>visual experience</strong> in this
                                    field. This profession also allows me to
                                    merge my enthusiasm for logic. Consequently,
                                    I can create{" "}
                                    <strong>visual elements</strong> using
                                    simple and effective logic on{" "}
                                    <strong>the web</strong>. My goal is to
                                    transform code into artworks accessible to
                                    the entire world.
                                </p>
                            </div>
                        </div>

                        {/* part about wath etienne do befor the web */}
                        <div
                            id="Bottom"
                            className={`aboutMain__containerBottom ${theme}`}
                        >
                            <h2
                                className={`aboutMain__containerBottom__title ${theme}`}
                            >
                                My life <br />
                                before the Web
                            </h2>

                            <div
                                className={`aboutMain__containerBottom__textPart ${theme}`}
                            >
                                <p
                                    className={`aboutMain__containerBottom__textPart__text ${theme}`}
                                >
                                    I haven&apos;t always been a{" "}
                                    <strong>developer</strong>. I worked as a
                                    carpenter for ten years. This experience
                                    strengthened my leadership, organizational
                                    skills, sense of responsibility, and
                                    attention to detail, skills that are still
                                    essential in maintaining the quality of my
                                    current work and projects.
                                </p>
                            </div>
                        </div>

                        {/* fake footer for good style */}
                        <div className={`aboutFakeFooter ${theme}`}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
