//---------------------------------------------------------
//import of the context
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangueContext } from "../contexts/LangueContext";

//---------------------------------------------------------
// //style
// import "../styles/pages/_trainings.scss";
// import "../styles/pages/mediaQueriesPages/_trainingsMediaQueries.scss";

//---------------------------------------------------------
//image
import laptop from "../assets/Trainings/web-trainings-laptop.jpg";
import laptopIllustration from "../assets/Trainings/web-trainings-illustration-laptop.jpg";
import carpenterIllustration from "../assets/Trainings/carpenter-trainings-illustration.jpg";
import backImageClear from "../assets/Trainings/back-clear-trainings.jpg";
import backImageDark from "../assets/Trainings/back-dark-trainings.jpg";
//---------------------------------------------------------
function Trainings() {
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    let backImage = backImageClear;

    if (theme === "white") {
        backImage = backImageClear;
    } else if (theme === "dark") {
        backImage = backImageDark;
    }

    //french part
    if (langue === "french") {
        return (
            <div>
                {/* page trainings */}
                <div className={`trainingsScreen ${theme}`}>
                    {/* image for the back of the screen */}
                    <img
                        className={`backImageScreen ${theme}`}
                        src={backImage}
                        alt="image for the back of the screen"
                        rel="preload"
                        loading="lazy"
                    />

                    {/* header trainings */}
                    <div className="trainingsScreen__headerPage"></div>

                    {/* main part trainings */}
                    <div className={`trainingsScreen__main ${theme}`}>
                        {/* bloc in the center of the trainings page */}
                        <div className={`trainingsMain ${theme}`}>
                            {/* web trainings */}
                            <div className={`trainingsMain__web ${theme}`}>
                                {/* image part */}
                                <img
                                    className={`trainingsMain__web__imageOne ${theme}`}
                                    src={laptop}
                                    alt="laptop web trainings"
                                    rel="preload"
                                    loading="lazy"
                                />
                                <img
                                    className={`trainingsMain__web__imageTwo ${theme}`}
                                    src={laptopIllustration}
                                    alt="illustration web trainings"
                                    rel="preload"
                                    loading="lazy"
                                />

                                {/* decorativ bublle */}
                                <div
                                    className={`trainingsMain__web__decorativOne ${theme}`}
                                ></div>

                                {/* text part */}
                                <div
                                    className={`trainingsMain__web__textContainer ${theme}`}
                                >
                                    {/* square like a border */}
                                    <div
                                        className={`trainingsMain__web__decorativSquare ${theme}`}
                                    ></div>

                                    <h2>Développeur Intégrateur Web</h2>

                                    <h4>
                                        Formation diplômante / Enseignement
                                        collégial
                                    </h4>

                                    <p
                                        className={`trainingsMain__web__textContainer__center ${theme}`}
                                    >
                                        Centre de formation : OpenClassRooms{" "}
                                        <br />
                                        Formation à distance : France, 2022 /
                                        2023
                                    </p>

                                    <p>
                                        Une formation complète qui regroupe tous
                                        les éléments essentiels pour tout bon{" "}
                                        <strong>développeur web</strong>. Elle
                                        couvre <strong>HTML</strong>,{" "}
                                        <strong>CSS</strong>,{" "}
                                        <strong>SASS</strong>,{" "}
                                        <strong>ReactJS</strong>,{" "}
                                        <strong>SEO</strong> et{" "}
                                        <strong>accessibilité</strong>, la
                                        création d&apos;
                                        <strong>API REST</strong>, la mise en
                                        place de{" "}
                                        <strong>bases de données</strong> avec{" "}
                                        <strong>MongoDB</strong>, le{" "}
                                        <strong>responsive design</strong> et
                                        toutes les bonnes pratiques qui y sont
                                        associées. Pendant une période de plus
                                        de 8 mois, grâce à cette formation et à
                                        un travail intensif, j&apos;ai pu
                                        développer de nombreuses compétences
                                        indispensables à mon domaine
                                        professionnel.
                                    </p>

                                    {/* decorativ bubulles */}
                                    <div
                                        className={`trainingsMain__web__decorativTwo ${theme}`}
                                    ></div>
                                    <div
                                        className={`trainingsMain__web__decorativThree ${theme}`}
                                    ></div>
                                    <div
                                        className={`trainingsMain__web__decorativFour ${theme}`}
                                    ></div>
                                </div>
                            </div>

                            {/* carpenter part */}
                            <div
                                className={`trainingsMain__carpenter ${theme}`}
                            >
                                {/* text and image part */}
                                <div
                                    className={`trainingsMain__carpenter__textContainer ${theme}`}
                                >
                                    {/* square like a border */}
                                    <div
                                        className={`trainingsMain__carpenter__decorativSquare ${theme}`}
                                    ></div>

                                    {/* text */}
                                    <h2>Charpentier / Ébéniste</h2>

                                    <h4>Formation : Charpentier et Ébéniste</h4>
                                    <p
                                        className={`trainingsMain__carpenter__textContainer__center ${theme}`}
                                    >
                                        Expérience de 10ans avant ma
                                        reconvertion.
                                    </p>
                                    <p>
                                        Une formation qui m&apos;a enseigné que
                                        plus l&apos;effort est important, plus
                                        le résultat l&apos;est aussi.
                                    </p>
                                </div>

                                <div
                                    className={`trainingsMain__carpenter__image ${theme}`}
                                >
                                    {/* illustration */}
                                    <img
                                        src={carpenterIllustration}
                                        alt="image for illustring the carpenter part."
                                        rel="preload"
                                        loading="lazy"
                                    />
                                </div>
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
            <div>
                {/* page trainings */}
                <div className={`trainingsScreen ${theme}`}>
                    {/* image for the back of the screen */}
                    <img
                        className={`backImageScreen ${theme}`}
                        src={backImage}
                        alt="image for the back of the screen"
                        rel="preload"
                        loading="lazy"
                    />

                    {/* header trainings */}
                    <div className="trainingsScreen__headerPage"></div>

                    {/* main part trainings */}
                    <div className={`trainingsScreen__main ${theme}`}>
                        {/* bloc in the center of the trainings page */}
                        <div className={`trainingsMain ${theme}`}>
                            {/* web trainings */}
                            <div className={`trainingsMain__web ${theme}`}>
                                {/* image part */}
                                <img
                                    className={`trainingsMain__web__imageOne ${theme}`}
                                    src={laptop}
                                    alt="laptop web trainings"
                                    rel="preload"
                                    loading="lazy"
                                />
                                <img
                                    className={`trainingsMain__web__imageTwo ${theme}`}
                                    src={laptopIllustration}
                                    alt="illustration web trainings"
                                    rel="preload"
                                    loading="lazy"
                                />

                                {/* decorativ bublle */}
                                <div
                                    className={`trainingsMain__web__decorativOne ${theme}`}
                                ></div>

                                {/* text part */}
                                <div
                                    className={`trainingsMain__web__textContainer ${theme}`}
                                >
                                    {/* square like a border */}
                                    <div
                                        className={`trainingsMain__web__decorativSquare ${theme}`}
                                    ></div>

                                    <h2>Web Developer and Integrator</h2>

                                    <h4>Diploma Program / College Education</h4>

                                    <p
                                        className={`trainingsMain__web__textContainer__center ${theme}`}
                                    >
                                        Training Center: OpenClassrooms
                                        <br />
                                        Remote Training : France, 2022 / 2023
                                    </p>

                                    <p>
                                        A comprehensive training program that
                                        encompasses all the essential elements
                                        for any good{" "}
                                        <strong>web developer</strong>. It
                                        covers <strong>HTML</strong>,{" "}
                                        <strong>CSS</strong>,{" "}
                                        <strong>SASS</strong>,{" "}
                                        <strong>ReactJS</strong>,{" "}
                                        <strong>SEO</strong>, and{" "}
                                        <strong>accessibility</strong>, the
                                        creation of{" "}
                                        <strong>RESTful APIs</strong>, the
                                        establishment of{" "}
                                        <strong>databases</strong> with{" "}
                                        <strong>MongoDB</strong>,{" "}
                                        <strong>responsive design</strong>, and
                                        all associated best practices. Over a
                                        period of more than 8 months, thanks to
                                        this training and intensive work, I was
                                        able to develop numerous essential
                                        skills in my professional field.
                                    </p>

                                    {/* decorativ bubulles */}
                                    <div
                                        className={`trainingsMain__web__decorativTwo ${theme}`}
                                    ></div>
                                    <div
                                        className={`trainingsMain__web__decorativThree ${theme}`}
                                    ></div>
                                    <div
                                        className={`trainingsMain__web__decorativFour ${theme}`}
                                    ></div>
                                </div>
                            </div>

                            {/* carpenter part */}
                            <div
                                className={`trainingsMain__carpenter ${theme}`}
                            >
                                {/* text and image part */}
                                <div
                                    className={`trainingsMain__carpenter__textContainer ${theme}`}
                                >
                                    {/* suare like a border */}
                                    <div
                                        className={`trainingsMain__carpenter__decorativSquare ${theme}`}
                                    ></div>

                                    {/* text */}
                                    <h2>Carpenter / Cabinetmaker</h2>

                                    <h4>
                                        Training: Carpenter and Cabinetmaker
                                    </h4>
                                    <p
                                        className={`trainingsMain__carpenter__textContainer__experience ${theme}`}
                                    >
                                        10 years of experience prior to my
                                        career transition.
                                    </p>
                                    <p>
                                        A training that taught me that the
                                        greater the effort, the greater the
                                        result
                                    </p>
                                </div>
                                <div
                                    className={`trainingsMain__carpenter__image ${theme}`}
                                >
                                    {/* illustration */}
                                    <img
                                        src={carpenterIllustration}
                                        alt="image for illustring the carpenter part."
                                        rel="preload"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trainings;
