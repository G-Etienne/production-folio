//---------------------------------------------------------
//import for the dark and white mode and langue context and states
import { useContext, useState } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { LangueContext } from "../../../contexts/LangueContext";

//---------------------------------------------------------
//font awesome with some icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

//---------------------------------------------------------
//import react-router-dom for the links navigation
import { NavLink } from "react-router-dom";

//---------------------------------------------------------
//component
import Cube from "./_threeDcube";

//---------------------------------------------------------
// //styles
// import "../../../styles/components/screen/Header/_menu.scss";
// import "../../../styles/components/screen/Header/headerMedia/_menuMediaQueries.scss";

//---------------------------------------------------------
function Menu() {
    {
        /* state to open the menu, theme and langue context */
    }
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    {
        /* code when the site is in french */
    }
    if (langue === "french") {
        {
            /* when the menu is close */
        }
        if (menuOpen === false) {
            return (
                <>
                    {/* menu button */}
                    <div
                        onClick={() => setMenuOpen(true)}
                        className={`menu__container ${theme}`}
                    >
                        {/* cube inside the menu */}
                        <Cube />

                        {/* logo in the menu */}
                        <div className={`menu__logo ${theme}`}>
                            <div
                                className={`menu__logo__topRod ${theme}`}
                            ></div>

                            <div
                                className={`menu__logo__bottomRod ${theme}`}
                            ></div>
                        </div>
                    </div>
                </>
            );
        }

        {
            /*when the menu is open */
        }
        if (menuOpen === true) {
            return (
                <>
                    {/* menu button */}
                    <div
                        onClick={() => setMenuOpen(false)}
                        className={`menu__container__open ${theme}`}
                    >
                        {/* cube inside the menu */}
                        <Cube />

                        {/* logo in the menu button */}
                        <div className={`menu__logo__open ${theme}`}>
                            <div
                                className={`menu__logo__open__topRod ${theme}`}
                            ></div>

                            <div
                                className={`menu__logo__open__bottomRod ${theme}`}
                            ></div>
                        </div>

                        {/* links of the menu */}
                        <div className={`menu__container__links ${theme}`}>
                            <div className="menu__container__link">
                                <NavLink
                                    className={`menu__container__linkAll ${theme}`}
                                    to="/projects"
                                >
                                    <div
                                        className={`menu__container__link__block ${theme}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faDiagramProject}
                                        />
                                    </div>

                                    <p
                                        className={`menu__container__link__text ${theme}`}
                                    >
                                        Projets
                                    </p>
                                </NavLink>
                            </div>

                            <div className="menu__container__link">
                                <NavLink
                                    className={`menu__container__linkAll ${theme}`}
                                    to="/resume"
                                >
                                    <div
                                        className={`menu__container__link__block ${theme}`}
                                    >
                                        <FontAwesomeIcon icon={faFile} />
                                    </div>

                                    <p
                                        className={`menu__container__link__text ${theme}`}
                                    >
                                        Mon CV
                                    </p>
                                </NavLink>
                            </div>

                            <div className="menu__container__link">
                                <NavLink
                                    className={`menu__container__linkAll ${theme}`}
                                    to="/goals"
                                >
                                    <div
                                        className={`menu__container__link__block ${theme}`}
                                    >
                                        <FontAwesomeIcon icon={faBullseye} />
                                    </div>

                                    <p
                                        className={`menu__container__link__text ${theme}`}
                                    >
                                        Objectifs
                                    </p>
                                </NavLink>
                            </div>

                            <div className="menu__container__link">
                                <NavLink
                                    className={`menu__container__linkAll ${theme}`}
                                    to="/about"
                                >
                                    <div
                                        className={`menu__container__link__block ${theme}`}
                                    >
                                        <FontAwesomeIcon icon={faHouse} />
                                    </div>

                                    <p
                                        className={`menu__container__link__text ${theme}`}
                                    >
                                        A propos
                                    </p>
                                </NavLink>
                            </div>

                            <div className="menu__container__link">
                                <NavLink
                                    className={`menu__container__linkAll ${theme}`}
                                    to="/skills"
                                >
                                    <div
                                        className={`menu__container__link__block ${theme}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faScrewdriverWrench}
                                        />
                                    </div>

                                    <p
                                        className={`menu__container__link__text ${theme}`}
                                    >
                                        Compétences
                                    </p>
                                </NavLink>
                            </div>

                            <div className="menu__container__link">
                                <NavLink
                                    className={`menu__container__linkAll ${theme}`}
                                    to="/graphics"
                                >
                                    <div
                                        className={`menu__container__link__block ${theme}`}
                                    >
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </div>

                                    <p
                                        className={`menu__container__link__text ${theme}`}
                                    >
                                        Graphisme
                                    </p>
                                </NavLink>
                            </div>

                            <div className="menu__container__link">
                                <NavLink
                                    className={`menu__container__linkAll ${theme}`}
                                    to="/trainings"
                                >
                                    <div
                                        className={`menu__container__link__block ${theme}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faUserGraduate}
                                        />
                                    </div>

                                    <p
                                        className={`menu__container__link__text ${theme}`}
                                    >
                                        Formations
                                    </p>
                                </NavLink>
                            </div>

                            <div className="menu__container__link">
                                <NavLink
                                    className={`menu__container__linkAll ${theme}`}
                                    to="/contact"
                                >
                                    <div
                                        className={`menu__container__link__block ${theme}`}
                                    >
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>

                                    <p
                                        className={`menu__container__link__text ${theme}`}
                                    >
                                        Contacts
                                    </p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }

    //---------------------------------------------------------------
    {
        /* code when the site is in english */
    }
    if (langue === "english") {
        {
            /* when the menu is close */
        }
        if (menuOpen === false) {
            return (
                <>
                    {/* menu button */}
                    <div
                        onClick={() => setMenuOpen(true)}
                        className={`menu__container ${theme}`}
                    >
                        {/* cube in the menu button */}
                        <Cube />

                        {/* logo in the menu button */}
                        <div className={`menu__logo ${theme}`}>
                            <div
                                className={`menu__logo__topRod ${theme}`}
                            ></div>

                            <div
                                className={`menu__logo__bottomRod ${theme}`}
                            ></div>
                        </div>
                    </div>
                </>
            );
        }

        {
            /*when the menu is open */
        }
        if (menuOpen === true) {
            return (
                <>
                    {/* menu button */}
                    <div
                        onClick={() => setMenuOpen(false)}
                        className={`menu__container__open ${theme}`}
                    >
                        {/* cube in the menu button */}
                        <Cube />

                        {/* logo in the menu button */}
                        <div className={`menu__logo__open ${theme}`}>
                            <div
                                className={`menu__logo__open__topRod ${theme}`}
                            ></div>
                            <div
                                className={`menu__logo__open__bottomRod ${theme}`}
                            ></div>
                        </div>

                        {/* links of the menu */}
                        <div className={`menu__container__links ${theme}`}>
                            <div className="menu__container__link">
                                <NavLink
                                    className={`menu__container__linkAll ${theme}`}
                                    to="/projects"
                                >
                                    <div
                                        className={`menu__container__link__block ${theme}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faDiagramProject}
                                        />
                                    </div>

                                    <p
                                        className={`menu__container__link__text ${theme}`}
                                    >
                                        Projects
                                    </p>
                                </NavLink>
                            </div>

                            <div className="menu__container__link">
                                <NavLink
                                    className={`menu__container__linkAll ${theme}`}
                                    to="/resume"
                                >
                                    <div
                                        className={`menu__container__link__block ${theme}`}
                                    >
                                        <FontAwesomeIcon icon={faFile} />
                                    </div>

                                    <p
                                        className={`menu__container__link__text ${theme}`}
                                    >
                                        Resume
                                    </p>
                                </NavLink>
                            </div>

                            <div className="menu__container__link">
                                <NavLink
                                    className={`menu__container__linkAll ${theme}`}
                                    to="/goals"
                                >
                                    <div
                                        className={`menu__container__link__block ${theme}`}
                                    >
                                        <FontAwesomeIcon icon={faBullseye} />
                                    </div>

                                    <p
                                        className={`menu__container__link__text ${theme}`}
                                    >
                                        Goals
                                    </p>
                                </NavLink>
                            </div>

                            <div className="menu__container__link">
                                <NavLink
                                    className={`menu__container__linkAll ${theme}`}
                                    to="/about"
                                >
                                    <div
                                        className={`menu__container__link__block ${theme}`}
                                    >
                                        <FontAwesomeIcon icon={faHouse} />
                                    </div>

                                    <p
                                        className={`menu__container__link__text ${theme}`}
                                    >
                                        About
                                    </p>
                                </NavLink>
                            </div>

                            <div className="menu__container__link">
                                <NavLink
                                    className={`menu__container__linkAll ${theme}`}
                                    to="/skills"
                                >
                                    <div
                                        className={`menu__container__link__block ${theme}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faScrewdriverWrench}
                                        />
                                    </div>

                                    <p
                                        className={`menu__container__link__text ${theme}`}
                                    >
                                        Skills
                                    </p>
                                </NavLink>
                            </div>

                            <div className="menu__container__link">
                                <NavLink
                                    className={`menu__container__linkAll ${theme}`}
                                    to="/graphics"
                                >
                                    <div
                                        className={`menu__container__link__block ${theme}`}
                                    >
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </div>

                                    <p
                                        className={`menu__container__link__text ${theme}`}
                                    >
                                        Graphics
                                    </p>
                                </NavLink>
                            </div>

                            <div className="menu__container__link">
                                <NavLink
                                    className={`menu__container__linkAll ${theme}`}
                                    to="/trainings"
                                >
                                    <div
                                        className={`menu__container__link__block ${theme}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faUserGraduate}
                                        />
                                    </div>

                                    <p
                                        className={`menu__container__link__text ${theme}`}
                                    >
                                        Trainings
                                    </p>
                                </NavLink>
                            </div>

                            <div className="menu__container__link">
                                <NavLink
                                    className={`menu__container__linkAll ${theme}`}
                                    to="/contact"
                                >
                                    <div
                                        className={`menu__container__link__block ${theme}`}
                                    >
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>

                                    <p
                                        className={`menu__container__link__text ${theme}`}
                                    >
                                        Contacts
                                    </p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
}

export default Menu;
