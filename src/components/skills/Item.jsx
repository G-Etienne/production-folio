//---------------------------------------------------------
//import of the context
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//---------------------------------------------------------
//images
import FrontEnd from "../../assets/Skill/front-end-illustration.jpg";
import BackEnd from "../../assets/Skill/back-end-illustration.jpg";
import Creative from "../../assets/Skill/creativ-illustration.jpg";
import Management from "../../assets/Skill/management.jpg";
import Other from "../../assets/Skill/other.jpg";
import Complementary from "../../assets/Skill/complementary.jpg";

//---------------------------------------------------------
function ItemSkill({ title, part, skills }) {
    //images to display
    let image;
    if (part === "Frontend") {
        image = FrontEnd;
    } else if (part === "Backend") {
        image = BackEnd;
    } else if (part === "Creativity") {
        image = Creative;
    } else if (part === "Management") {
        image = Management;
    } else if (part === "Complementary") {
        image = Complementary;
    } else if (part === "Other") {
        image = Other;
    }

    //context for the langue and theme
    const { theme } = useContext(ThemeContext);

    //display skills text
    const [isOpen, setIsOpen] = useState(false);

    if (isOpen === false) {
        return (
            // image and title
            <div onClick={() => setIsOpen(true)}>
                <img
                    rel="preload"
                    loading="lazy"
                    src={image}
                    alt="illustration for the front-end part"
                />
                <h2>{title}</h2>
            </div>
        );
    }

    if (isOpen === true) {
        return (
            // liste of the skills and title
            <div onClick={() => setIsOpen(false)}>
                <div className={`skillsMain__skillsContainer__List ${theme}`}>
                    {skills.map((skill) => {
                        return <p>{skill}</p>;
                    })}
                </div>
                <h2>{title}</h2>
            </div>
        );
    }
}

export default ItemSkill;
