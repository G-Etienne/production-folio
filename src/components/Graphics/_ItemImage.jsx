//---------------------------------------------------------
//import of the contexts
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//-----------------------------------------------------------------
//images logo
import Logo1 from "../../assets/Graphics/LogoForSite.jpeg";
import Logo2 from "../../assets/Graphics/SignatureLogoGinet.jpeg";

//illustration
import illustration1 from "../../assets/Graphics/caracter.jpeg";
import illustration2 from "../../assets/Graphics/hub.jpeg";
import illustration3 from "../../assets/Graphics/RobotIllustration.jpeg";

//image maquette
import Mockups1 from "../../assets/Graphics/maquetteSite.jpeg";

//-----------------------------------------------------------------
function ItemImage({ id, name, description }) {
    //context for the langue and theme
    const { theme } = useContext(ThemeContext);

    //image to display
    let image;

    //to display a big images with an user click
    const [isBigImage, setIsBigImage] = useState(false);
    let classNameBigImage = "smallImage";

    //changin selector for big image display
    if (isBigImage === false) {
        classNameBigImage = "smallImage";
    } else if (isBigImage === true) {
        classNameBigImage = "bigImage";
    }

    //state changing
    const toggleBigImage = () => {
        setIsBigImage((prevIsBigImage) => !prevIsBigImage);
    };

    //choice of image to display with the id information
    if (id === "illustration1") {
        image = illustration1;
    } else if (id === "illustration2") {
        image = illustration2;
    } else if (id === "illustration3") {
        image = illustration3;
    } else if (id === "logo1") {
        image = Logo1;
    } else if (id === "logo2") {
        image = Logo2;
    } else if (id === "mockups1") {
        image = Mockups1;
    }

    //code return
    return (
        <>
            {/* container for border */}
            <div className={`graphicItem ${theme}`}>
                {/* container of informations */}
                <div className={`graphicItem__container ${theme}`}>
                    {/* image display */}
                    <img
                        onClick={toggleBigImage}
                        className={`graphicItem__image ${classNameBigImage} ${theme}`}
                        src={image}
                        alt="image"
                    />

                    {/* text container */}
                    <div
                        className={`graphicItem__textContainer ${classNameBigImage} ${theme}`}
                    >
                        {/* title and description */}
                        <h3 className={`graphicItem__title ${theme}`}>
                            {name}
                        </h3>

                        <p className={`graphicItem__description ${theme}`}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemImage;
