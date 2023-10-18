//---------------------------------------------------------
//import of the context
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//---------------------------------------------------------
//images
const FrontEnd = "./assets/Skills/front-end-illustration.jpg";
const BackEnd = "./assets/Skills/back-end-illustration.jpg";
const Creative = "./assets/Skills/creativ-illustration.jpg";
const Management = "./assets/Skills/management.jpg";
const Other = "./assets/Skills/other.jpg";
const Complementary = "./assets/Skills/complementary.jpg";

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
