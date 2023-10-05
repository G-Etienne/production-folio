//---------------------------------------------------------
//import of the context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//---------------------------------------------------------
// //style
// import "../../styles/components/deskFooter/_light.scss";
// import "../../styles/components/deskFooter/desk-media/_lightMediaQueries.scss";

//---------------------------------------------------------
function Light() {
    //context for the theme
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className="light">
                {/* top of the light and light */}
                <div className={`light__head__top ${theme + "HeadTop"}`}></div>
                <div className={`light__head ${theme + "Head"}`}></div>
                <div className={`light__on__top ${theme + "Head"}`}></div>
                <div className={`light__on ${theme + "Head"}`}></div>
                <div className={`light__on__bottom ${theme + "Head"}`}></div>

                {/* arm of the light */}
                <div className={`light__arm ${theme + "Arm"}`}></div>
                <div
                    className={`light__arm__Shadow ${theme + "ArmShadow"}`}
                ></div>

                {/* base of the light */}
                <div className={`light__baseTop ${theme + "BaseTop"}`}></div>

                
            </div>
        </>
    );
}

export default Light;
