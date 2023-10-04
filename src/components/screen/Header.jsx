//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//---------------------------------------------------------
//components
import ThemeButton from "./header/ThemButton";
import LangueButton from "./header/LangueButton";
import Menu from "./header/Menu";

//---------------------------------------------------------
// //styles
// import "../../styles/layout/_header.scss";
// import "../../styles/layout/media_queries/_headerMediaQueries.scss";

//---------------------------------------------------------
//import react-router-dom for the links navigation
import { NavLink } from "react-router-dom";

//---------------------------------------------------------
function Header() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <header className="header">
                {/* menu of the site */}
                <Menu />

                <NavLink className="header__title__link" to={"/"}>
                    <h1 className={`header__title ${theme}`}>
                        <strong>Etienne Ginet</strong>
                    </h1>
                </NavLink>

                {/* interaction theme dark and white */}
                <div className="header__themeLangue">
                    <ThemeButton />
                    <LangueButton />
                </div>
            </header>
        </>
    );
}

export default Header;
