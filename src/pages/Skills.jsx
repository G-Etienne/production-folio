//---------------------------------------------------------
//import of the contexts
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangueContext } from "../contexts/LangueContext";

//---------------------------------------------------------
//components
import ItemSkill from "../components/skills/Item";

//---------------------------------------------------------
//data skils
import DataSkills from "../data/skills.json";

//---------------------------------------------------------
//styles
//import "../styles/pages/_skills.scss"
//import "../styles/pages/mediaQueriesPages/_skillsMediaQueries.scss"

//---------------------------------------------------------
function Skills() {
    //context for the langue and theme
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    //french part
    if (langue === "french") {
        return (
            // part for placing the on the virtual screen
            <div className={`skillsScreen ${theme}`}>
                {/* header skills */}
                <div className="skillsScreen__headerPage"></div>

                {/* sun and moon */}
                <div className={`skillsScreen__star ${theme}`}></div>

                {/* main part skills */}
                <div className={`skillsScreen__main ${theme}`}>
                    <div className={`skillsMain ${theme}`}>
                        {/* title of the page */}
                        <h1 className={`skillsMain__titlePage ${theme}`}>
                            Compétences
                        </h1>

                        {/* part where the skills are displayed */}
                        <div className={`skillsMain__skillsContainer ${theme}`}>
                            {DataSkills.map((thelist) => (
                                // skills
                                <ItemSkill
                                    key={thelist.id}
                                    part={thelist.titleEnglish}
                                    title={thelist.titleFrench}
                                    skills={thelist.listeSkillsFrench}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    //english part
    if (langue === "english") {
        return (
            // part for placing the on the virtual screen
            <div className={`skillsScreen ${theme}`}>
                {/* header skills */}
                <div className="skillsScreen__headerPage"></div>

                {/* sun and moon */}
                <div className={`skillsScreen__star ${theme}`}></div>

                {/* main part skills */}
                <div className={`skillsScreen__main ${theme}`}>
                    <div className={`skillsMain ${theme}`}>
                        {/* title of the page */}
                        <h1 className={`skillsMain__titlePage ${theme}`}>
                            Skills
                        </h1>

                        {/* part where the skills are displayed */}
                        <div className={`skillsMain__skillsContainer ${theme}`}>
                            {DataSkills.map((thelist) => (
                                // skills
                                <ItemSkill
                                    key={thelist.id}
                                    part={thelist.titleEnglish}
                                    title={thelist.titleEnglish}
                                    skills={thelist.listeSkillsEnglish}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
