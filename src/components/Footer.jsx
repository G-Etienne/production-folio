//------------------------------------------------------
// //style
// import "../styles/layout/_footer.scss";
// import "../styles/layout/media_queries/_footerMediaQueries.scss";

//------------------------------------------------------
//components in the footer
import Desk from "./desk/Desk";
//------------------------------------------------------
function Footer() {
    return (
        <>
            <footer className="footer">
                <Desk />
            </footer>
        </>
    );
}

export default Footer;
