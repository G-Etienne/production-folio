//---------------------------------------------------------
//import of the context
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangueContext } from "../contexts/LangueContext";

//---------------------------------------------------------
//font awesome with some icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

//-----------------------------------------------------------------
//files
import ResumeFile from "../assets/Files/CV_Etienne_Ginet.pdf";
import RecommendationFile from "../assets/Files/recommendation_Formation.png";

//---------------------------------------------------------
//image
import resumeImage from "../assets/Resume/resume.png";
import recommendationImage from "../assets/Resume/recommendation_letter.png";
//Resume Big Screen
import ResumePartOne from "../assets/Resume/BigScreen/Resume_Part_One.png";
import ResumePartTwo from "../assets/Resume/BigScreen/Resume_Part_Two.png";
import RecommendationPart from "../assets/Resume/BigScreen/recommendation_letter.png";
//---------------------------------------------------------
// //style for the Home page
// import "../styles/pages/_resume.scss";
// import "../styles/pages/mediaQueriesPages/_resumeMediaQueries.scss";

//---------------------------------------------------------
//images
import backImageClear from "../assets/Resume/back-resume.jpg";
import backImageDark from "../assets/Resume/back-resume-dark.jpg";
//---------------------------------------------------------
function Resume() {
    //context for the langue and theme
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    //state for full screens
    const [fullScreenResume, setFullScreenResume] = useState("little");
    const [fullScreenRecommendation, setfullScreenRecommendation] =
        useState("little");

    //image in the back
    let backImage = backImageClear;

    if (theme === "white") {
        backImage = backImageClear;
    } else if (theme === "dark") {
        backImage = backImageDark;
    }

    //french part
    if (langue === "french") {
        // not fullscreen part
        if (
            fullScreenResume === "little" &&
            fullScreenRecommendation === "little"
        ) {
            return (
                <>
                    {/* part for placing the on the virtual screen */}
                    <div className={`resumeScreen ${theme}`}>
                        {/* image for the back of the screen */}
                        <img
                            className={`backImageScreen ${theme}`}
                            src={backImage}
                            alt="image for the back of the screen"
                            rel="preload"
                            loading="lazy"
                        />
                        {/* header resume */}
                        <div className="resumeScreen__headerPage"></div>

                        {/* main part resume */}
                        <div className={`resumeScreen__main ${theme}`}>
                            <div className={`resumeMain ${theme}`}>
                                {/* Classic resume part */}
                                <div
                                    id="resume"
                                    className={`resumeMain__resumeContainer ${theme}`}
                                >
                                    {/* illustration of the classic resume */}
                                    <div
                                        className={`resumeMain__resumeContainer__illustration ${theme}`}
                                    >
                                        <img
                                            onClick={() =>
                                                setFullScreenResume("big")
                                            }
                                            src={resumeImage}
                                            alt="illustration for the resume"
                                            rel="preload"
                                            loading="lazy"
                                        ></img>
                                    </div>

                                    {/* text part for classic resume */}
                                    <div
                                        className={`resumeMain__resumeContainer__textContainer ${theme}`}
                                    >
                                        {/* text */}
                                        <h2>Mon CV</h2>

                                        <p>
                                            Découvrez mon cv sous sa forme
                                            classique.
                                            <br /> <br /> Allez directement à
                                            l&apos;essentiel sans perdre de
                                            temps!
                                        </p>

                                        {/* links part */}
                                        <div>
                                            <a
                                                onClick={() =>
                                                    setFullScreenResume("big")
                                                }
                                            >
                                                Mon CV
                                            </a>

                                            <a
                                                href={ResumeFile}
                                                download="resume_Etienne_Ginet"
                                            >
                                                Télécharger le document
                                            </a>

                                            <a href="#recommendation">
                                                Découvrir mes recommendations
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* recommendation part */}
                                <div
                                    id="recommendation"
                                    className={`resumeMain__recommendationContainer ${theme}`}
                                >
                                    {/* illustration of the recommendation part */}
                                    <div
                                        className={`resumeMain__recommendationContainer__illustration ${theme}`}
                                    >
                                        <img
                                            onClick={() =>
                                                setfullScreenRecommendation(
                                                    "big",
                                                )
                                            }
                                            src={recommendationImage}
                                            alt="illustration for the resume"
                                            rel="preload"
                                            loading="lazy"
                                        ></img>
                                    </div>

                                    {/* text part of the recommendation part */}
                                    <div
                                        className={`resumeMain__recommendationContainer__textContainer ${theme}`}
                                    >
                                        {/* text */}
                                        <h2>Mes recommendations</h2>

                                        <p>
                                            Découvrez la lettre de
                                            recommendation de mon ancien mentor.
                                            <br /> <br /> Une confirmation de
                                            mon aptitude à être une personne
                                            persévérante et à assimiler
                                            rapidement de nouvelles
                                            connaissances.
                                        </p>

                                        {/* links part */}
                                        <div>
                                            <a
                                                onClick={() =>
                                                    setfullScreenRecommendation(
                                                        "big",
                                                    )
                                                }
                                            >
                                                La lettre
                                            </a>

                                            <a
                                                href={RecommendationFile}
                                                download="recommendation_Etienne_Ginet"
                                            >
                                                Télécharger le document
                                            </a>

                                            <a href="#resume">
                                                Découvrir mon CV
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }

        //full screen resume
        if (fullScreenResume === "big") {
            return (
                <>
                    <div
                        onClick={() => setFullScreenResume("little")}
                        className={`bigScreenContainer ${theme}`}
                    >
                        {/* cross button */}
                        <div className={`bigScreenContainer__cross ${theme}`}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>

                        {/* images of the resume part */}
                        <img
                            src={ResumePartOne}
                            alt="first page of my resume"
                            rel="preload"
                            loading="lazy"
                        />
                        <img
                            src={ResumePartTwo}
                            alt="second page of my resume"
                            rel="preload"
                            loading="lazy"
                        />
                    </div>
                </>
            );
        }

        //full screen recommendation
        if (fullScreenRecommendation === "big") {
            return (
                <>
                    <div
                        onClick={() => setfullScreenRecommendation("little")}
                        className={`bigScreenContainer ${theme}`}
                    >
                        {/* cross button */}
                        <div className={`bigScreenContainer__cross ${theme}`}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>

                        {/* image of the recommendation part */}
                        <img
                            src={RecommendationPart}
                            alt="recommendation letter"
                            rel="preload"
                        />
                    </div>
                </>
            );
        }
    }

    //english part
    if (langue === "english") {
        // not fullscreen part
        if (
            fullScreenResume === "little" &&
            fullScreenRecommendation === "little"
        ) {
            return (
                // part for placing the on the virtual screen
                <div className={`resumeScreen ${theme}`}>
                    {/* image for the back of the screen */}
                    <img
                        src={backImage}
                        className={`backImageScreen ${theme}`}
                        alt="image for the back of the screen"
                        rel="preload"
                        loading="lazy"
                    />

                    {/* header resume */}
                    <div className="resumeScreen__headerPage"></div>

                    {/* main part resume */}
                    <div className={`resumeScreen__main ${theme}`}>
                        <div className={`resumeMain ${theme}`}>
                            {/* Classic resume part */}
                            <div
                                id="resume"
                                className={`resumeMain__resumeContainer ${theme}`}
                            >
                                {/* illustration of the classic resume */}
                                <div
                                    className={`resumeMain__resumeContainer__illustration ${theme}`}
                                >
                                    <img
                                        onClick={() =>
                                            setFullScreenResume("big")
                                        }
                                        src={resumeImage}
                                        alt="illustration for the resume"
                                        rel="preload"
                                        loading="lazy"
                                    ></img>
                                </div>

                                {/* text part for classic resume */}
                                <div
                                    className={`resumeMain__resumeContainer__textContainer ${theme}`}
                                >
                                    {/* text */}
                                    <h2>My Resume</h2>

                                    <p>
                                        Discover my resume in its classic form.
                                        <br />
                                        <br /> Go straight to the essentials
                                        without wasting time !
                                    </p>

                                    {/* links part */}
                                    <div>
                                        <a
                                            onClick={() =>
                                                setFullScreenResume("big")
                                            }
                                        >
                                            My Resume
                                        </a>

                                        <a
                                            href={ResumeFile}
                                            download="resume_Etienne_Ginet"
                                        >
                                            Download
                                        </a>

                                        <a href="#recommendation">
                                            Discover my recommendations
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* recommendation part */}
                            <div
                                id="recommendation"
                                className={`resumeMain__recommendationContainer ${theme}`}
                            >
                                {/* illustration of the recommendation part */}
                                <div
                                    className={`resumeMain__recommendationContainer__illustration ${theme}`}
                                >
                                    <img
                                        onClick={() =>
                                            setfullScreenRecommendation("big")
                                        }
                                        src={recommendationImage}
                                        alt="illustration for the resume"
                                        rel="preload"
                                        loading="lazy"
                                    ></img>
                                </div>

                                {/* text part of the recommendation part */}
                                <div
                                    className={`resumeMain__recommendationContainer__textContainer ${theme}`}
                                >
                                    {/* text */}
                                    <h2>My recommendations</h2>

                                    <p>
                                        Discover the letter of recommendation
                                        from my former mentor. <br />
                                        <br /> A confirmation of my ability to
                                        be a determined person and quickly
                                        absorb new knowledge.
                                    </p>

                                    {/* links part */}
                                    <div>
                                        <a
                                            onClick={() =>
                                                setfullScreenRecommendation(
                                                    "big",
                                                )
                                            }
                                        >
                                            The Letter
                                        </a>

                                        <a
                                            href={RecommendationFile}
                                            download="recommendation_Etienne_Ginet"
                                        >
                                            Download
                                        </a>

                                        <a href="#resume">Discover my Resume</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        //full screen resume
        if (fullScreenResume === "big") {
            return (
                <>
                    <div
                        onClick={() => setFullScreenResume("little")}
                        className={`bigScreenContainer ${theme}`}
                    >
                        {/* cross button */}
                        <div className={`bigScreenContainer__cross ${theme}`}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>

                        <p className={`message ${theme}`}>
                            For now, only the French version is available.
                        </p>

                        {/* images of the resume part */}
                        <img
                            src={ResumePartOne}
                            alt="first page of my resume"
                            rel="preload"
                            loading="lazy"
                        />
                        <img
                            src={ResumePartTwo}
                            alt="second page of my resume"
                            rel="preload"
                            loading="lazy"
                        />
                    </div>
                </>
            );
        }

        //full screen recommendation
        if (fullScreenRecommendation === "big") {
            return (
                <>
                    <div
                        onClick={() => setfullScreenRecommendation("little")}
                        className={`bigScreenContainer ${theme}`}
                    >
                        {/* cross button */}
                        <div className={`bigScreenContainer__cross ${theme}`}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>

                        <p className={`message ${theme}`}>
                            For now, only the French version is available.
                        </p>

                        {/* image of the recommendation part */}
                        <img
                            src={RecommendationPart}
                            alt="recommendation letter"
                            rel="preload"
                            loading="lazy"
                        />
                    </div>
                </>
            );
        }
    }
}

export default Resume;
