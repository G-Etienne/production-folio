//------------------------------------------------------
import { useLocation } from "react-router-dom";
//------------------------------------------------------
// //style
// import "../styles/layout/_footer.scss";
// import "../styles/layout/media_queries/_footerMediaQueries.scss";

//------------------------------------------------------
//components in the footer
import Desk from "./desk/Desk";
//------------------------------------------------------
function Footer() {
    const location = useLocation();
    const page = location.pathname.slice(
        location.pathname.lastIndexOf("/") + 1,
    );

    return (
        <>
            <footer className={`footer ${page}`}>
                <Desk />
            </footer>
        </>
    );
}

export default Footer;
