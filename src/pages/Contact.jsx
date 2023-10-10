//---------------------------------------------------------
//import of the context
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangueContext } from "../contexts/LangueContext";

//---------------------------------------------------------
//font awesome with some icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileRetro } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
//---------------------------------------------------------
// //style for the Home page
// import "../styles/pages/_contact.scss";
// import "../styles/pages/mediaQueriesPages/_contactMediaQueries.scss";

//---------------------------------------------------------
//images
import backImageClear from "../assets/Contact/back-image-contact.jpg";
import backImageDark from "../assets/Contact/back-image-contact-dark.jpg";
//---------------------------------------------------------
function Contact() {
    //context for the langue and theme
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    let backImage = backImageClear;
    
    if(theme === "white"){
        backImage = backImageClear;
    }else if (theme === "dark"){
        backImage = backImageDark;
    }

    //french part
    if (langue === "french") {
        return (
            // part for placing the on the virtual screen
            <div className={`contactScreen ${theme}`}>
                {/* header contact */}
                <div className="contactScreen__headerPage"></div>

                {/* image in the back of the screen */}
                <img src={backImage} className="contactScreen__backImage" rel="preload" loading="lazy"></img>

                {/* main part contact */}
                <div className={`contactScreen__main ${theme}`}>
                    <div className={`contactMain ${theme}`}>
                        {/* big title on the page */}
                        <h2
                            className={`contactMain__bigTitle special ${theme}`}
                        >
                            Prêt à donner vie à vos <strong>projets web</strong>{" "}
                            ?<br />
                            N&apos;hésitez pas à me contacter pour en discuter !
                        </h2>

                        {/* localisation */}
                        <p
                            className={`contactMain__localisation special ${theme}`}
                        >
                            Montréal, QC
                        </p>

                        <div className={`contactMain__container ${theme}`}>
                            {/* email part */}
                            <div
                                className={`contactMain__contacts email ${theme}`}
                            >
                                {/* icone */}
                                <div
                                    className={`contactMain__contacts__icone email  ${theme}`}
                                >
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>

                                {/* title */}
                                <h3
                                    className={`contactMain__contacts__title email  ${theme}`}
                                >
                                    Courriel
                                </h3>

                                {/* button */}
                                <a
                                    href="mailto:ginet.devweb@gmail.com?subject=Premier contact."
                                    className={`contactMain__contacts__button email  ${theme}`}
                                >
                                    Contactez moi
                                </a>
                            </div>

                            {/* phone part */}
                            <div
                                className={`contactMain__contacts phone  ${theme}`}
                            >
                                {/* icone */}
                                <div
                                    className={`contactMain__contacts__icone phone  ${theme}`}
                                >
                                    <FontAwesomeIcon icon={faMobileRetro} />
                                </div>

                                {/* title */}
                                <h3
                                    className={`contactMain__contacts__title phone  ${theme}`}
                                >
                                    Telephone
                                </h3>

                                {/* button */}
                                <a
                                    href="tel: +15795002150"
                                    className={`contactMain__contacts__button phone  ${theme}`}
                                >
                                    +1 579 500 2150
                                </a>
                            </div>

                            {/* linkedin part */}
                            <div
                                className={`contactMain__contacts linkedin ${theme}`}
                            >
                                {/* icone */}
                                <div
                                    className={`contactMain__contacts__icone linkedin  ${theme}`}
                                >
                                    in
                                </div>

                                {/* title */}
                                <h3
                                    className={`contactMain__contacts__title linkedin  ${theme}`}
                                >
                                    LinkedIn
                                </h3>

                                {/* button */}
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/etienne-ginet-74376a271"
                                    className={`contactMain__contacts__button linkedin  ${theme}`}
                                >
                                    Mon Linkedin
                                </a>
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
            // part for placing the on the virtual screen
            <div className={`contactScreen ${theme}`}>
                {/* header contact */}
                <div className="contactScreen__headerPage"></div>

                {/* image in the back of the screen */}
                <img src={backImage} className="contactScreen__backImage" rel="preload" loading="lazy"></img>

                {/* main part contact */}
                <div className={`contactScreen__main ${theme}`}>
                    <div className={`contactMain ${theme}`}>
                        {/* big title on the page */}
                        <h2
                            className={`contactMain__bigTitle special ${theme}`}
                        >
                            Ready to bring your <strong>web projects</strong> to
                            life?
                            <br /> Feel free to contact me to discuss it!
                        </h2>

                        {/* localisation */}
                        <p
                            className={`contactMain__localisation special ${theme}`}
                        >
                            Montréal, QC
                        </p>

                        <div className={`contactMain__container ${theme}`}>
                            {/* email part */}
                            <div
                                className={`contactMain__contacts email ${theme}`}
                            >
                                {/* icone */}
                                <div
                                    className={`contactMain__contacts__icone email  ${theme}`}
                                >
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>

                                {/* title */}
                                <h3
                                    className={`contactMain__contacts__title email  ${theme}`}
                                >
                                    E-mail
                                </h3>

                                {/* button */}
                                <a
                                    href="mailto:ginet.devweb@gmail.com?subject=Premier contact."
                                    className={`contactMain__contacts__button email  ${theme}`}
                                >
                                    Contact me
                                </a>
                            </div>

                            {/* phone part */}
                            <div
                                className={`contactMain__contacts phone  ${theme}`}
                            >
                                {/* icone */}
                                <div
                                    className={`contactMain__contacts__icone phone  ${theme}`}
                                >
                                    <FontAwesomeIcon icon={faMobileRetro} />
                                </div>

                                {/* title */}
                                <h3
                                    className={`contactMain__contacts__title phone  ${theme}`}
                                >
                                    Phone
                                </h3>

                                {/* button */}
                                <a
                                    href="tel: +15795002150"
                                    className={`contactMain__contacts__button phone  ${theme}`}
                                >
                                    +1 579 500 2150
                                </a>
                            </div>

                            {/* linkedin part */}
                            <div
                                className={`contactMain__contacts linkedin ${theme}`}
                            >
                                {/* icone */}
                                <div
                                    className={`contactMain__contacts__icone linkedin  ${theme}`}
                                >
                                    in
                                </div>

                                {/* title */}
                                <h3
                                    className={`contactMain__contacts__title linkedin  ${theme}`}
                                >
                                    LinkedIn
                                </h3>

                                {/* button */}
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/etienne-ginet-74376a271"
                                    className={`contactMain__contacts__button linkedin  ${theme}`}
                                >
                                    My Linkedin
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
