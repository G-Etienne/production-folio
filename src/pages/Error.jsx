//---------------------------------------------------------
//import react
import { NavLink } from "react-router-dom";
//---------------------------------------------------------
//import of the context
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangueContext } from "../contexts/LangueContext";

//-------------------------------------------------------
// //style
// import "../styles/pages/_error.scss";
// import "../styles/pages/mediaQueriesPages/_errorMediaQueries.scss";

//-------------------------------------------------------
//image
import perso from "../assets/Home/persoHome.png";
//-------------------------------------------------------
function Error() {
    //langue and theme variables
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    //french part
    if (langue === "french") {
        return (
            <div>
                <div className="errorScreen">
                    {/* header error */}
                    <div className="errorScreen__headerPage"></div>

                    {/* main part error */}
                    <div className={`errorScreen__main ${theme}`}>
                        {/* bloc in the center of the error page */}
                        <div className={`errorMain ${theme}`}>
                            <img
                                src={perso}
                                alt="image du perso pour illustration de la page."
                                rel="preload"
                                loading="lazy"
                            />

                            <h1>ERREUR 404</h1>

                            <p className={`errorMain__text ${theme}`}>
                                Comme une île mystérieuse dans l&apos;océan
                                numérique, cette page reste introuvable.
                            </p>

                            {/* link to the home page */}
                            <NavLink
                                className={`errorMain__link ${theme}`}
                                to="/"
                            >
                                Retour à l&apos;accueil
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    //french part
    if (langue === "english") {
        return (
            <div>
                <div className="errorScreen">
                    {/* header about */}
                    <div className="errorScreen__headerPage"></div>

                    {/* main part about */}
                    <div className={`errorScreen__main ${theme}`}>
                        {/* bloc in the center of the error page */}
                        <div className={`errorMain ${theme}`}>
                            <img
                                src={perso}
                                alt="image du perso pour illustration de la page."
                                rel="preload"
                                loading="lazy"
                            />

                            <h1>ERROR 404</h1>

                            <p className={`errorMain__text ${theme}`}>
                                Like a mysterious island in the digital ocean,
                                this page remains unfound.
                            </p>

                            {/* link to the home page */}
                            <NavLink
                                className={`errorMain__link ${theme}`}
                                to="/"
                            >
                                Back to Homepage
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error;
