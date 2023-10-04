//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//---------------------------------------------------------
//import logos
import githubBlack from "../../assets/Footer/github.png";
import linkedinBlack from "../../assets/Footer/linkedin-logo.png";
import githubLight from "../../assets/Footer/gitlight.png";
import linkedinLight from "../../assets/Footer/linklight.png";

//---------------------------------------------------------
// //styles
// import "../../styles/components/deskFooter/_linksDesk.scss";
// import "../../styles/components/deskFooter/desk-media/_linkDeskMediaQueries.scss";

function LinksDesk() {
    {
        /* dark and white theme */
    }
    const { theme } = useContext(ThemeContext);

    if (theme === "white") {
        return (
            <div className={`linksDesk ${theme + "Links"}`}>
                {/* github */}
                <a
                    className={`oneLink ${theme + "Link"}`}
                    href="https://github.com/G-Etienne?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={githubBlack} alt="logo github" />

                    <p>Github</p>
                </a>

                {/* Linkedin */}
                <a
                    className={`oneLink ${theme + "Link"}`}
                    href="https://linkedin.com/in/etienne-ginet-74376a271"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p>LinkedIn</p>

                    <img src={linkedinBlack} alt="logo Linkedin" />
                </a>
            </div>
        );
    } else if (theme === "dark") {
        return (
            <div className={`linksDesk ${theme + "Links"}`}>
                {/* github */}
                <a
                    className={`oneLink ${theme + "Link"}`}
                    href="https://github.com/G-Etienne?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div>
                        <img src={githubLight} alt="logo github" />
                    </div>

                    <p>Github</p>
                </a>

                {/* Linkedin */}
                <a
                    className={`oneLink ${theme + "Link"}`}
                    href="https://linkedin.com/in/etienne-ginet-74376a271"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p>LinkedIn</p>

                    <div>
                        <img src={linkedinLight} alt="logo Linkedin" />
                    </div>
                </a>
            </div>
        );
    }
}

export default LinksDesk;
