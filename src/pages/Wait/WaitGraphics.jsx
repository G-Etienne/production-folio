//---------------------------------------------------------
//import of the context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { LangueContext } from "../../contexts/LangueContext";
//---------------------------------------------------------
//import react-router-dom for the links navigation
import { NavLink } from "react-router-dom";

//--------------------------------------------------
//images
import backWait from "../../assets/wait/back-wait.jpg";
import backWaitDark from "../../assets/wait/back-wait-dark.jpg";
import imageWaitCenter from "../../assets/wait/WaitPerso.jpg";

//--------------------------------------------------
// //style
// import "../../styles/pages/wait/_wait.scss";
// import "../../styles/pages/wait/MediaWait/_wait_media_queries.scss";

//--------------------------------------------------
function WaitGraphic() {
    // Context for theme and langue
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    //image back screen
    let image = backWait;

    //changin image according to the theme
    if (theme === "dark") {
        image = backWaitDark;
    } else if (theme === "white") {
        image = backWait;
    }

    //french part
    if (langue === "french") {
        return (
            //background of the page
            <div className={`waitBack ${theme}`}>
                {/* image in the back of this page */}
                <img src={image} alt="image for the back of the wait page" rel="preload" loading="lazy"/>
                {/* container with the page elements */}
                <div className={`waitContainer ${theme}`}>
                    {/* container in the center */}
                    <div className={`waitContainer__content ${theme}`}>
                        {/* title */}
                        <h1>Cette page n&apos;est pas encore disponible.</h1>

                        {/* image of the page */}
                        <img
                            alt="image for illustring this part"
                            src={imageWaitCenter}
                            className={`waitContainer__content__image ${theme}`}
                            rel="preload"
                            loading="lazy"
                        ></img>

                        {/* text under the image */}
                        <p>
                            Cette page web est actuellement en cours de
                            développement et sera disponible très prochainement.
                            <br />
                            Vous désirez en savoir plus sur mes compétences,
                            n&apos;hésitez pas à regarder mon CV.
                        </p>

                        {/* link for the resume page */}
                        <NavLink
                            className={`waitContainer__content__link ${theme}`}
                            to="/resume"
                        >
                            Mon CV
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }

    //english part part
    if (langue === "english") {
        return (
            //background of the page
            <div className={`waitBack ${theme}`}>
                {/* image in the back of this page */}
                <img src={image} alt="image for the back of the wait page" rel="preload" loading="lazy"/>
                {/* container with the page elements */}
                <div className={`waitContainer ${theme}`}>
                    {/* container in the center */}
                    <div className={`waitContainer__content ${theme}`}>
                        {/* title */}
                        <h1>This page is not yet available.</h1>

                        {/* image of the page */}
                        <img
                            src={imageWaitCenter}
                            alt="image for illustring this part"
                            className={`waitContainer__content__image ${theme}`}
                            rel="preload"
                            loading="lazy"
                        ></img>

                        {/* text under the image */}
                        <p>
                            This web page is currently under development and
                            will be available very soon.
                            <br />
                            If you&apos;d like to learn more about my skills,
                            feel free to check out my resume.
                        </p>

                        {/* link for the resume page */}
                        <NavLink
                            className={`waitContainer__content__link ${theme}`}
                            to="/resume"
                        >
                            My Resume
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default WaitGraphic;
