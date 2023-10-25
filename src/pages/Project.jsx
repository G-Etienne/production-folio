//---------------------------------------------------------
//import of the contexts
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangueContext } from "../contexts/LangueContext";

//---------------------------------------------------------
//data
import DataProjectFrench from "../data/projectsFrench.json";
import DataProjectEnglish from "../data/projectsEnglish.json";

//---------------------------------------------------------
//components
import ItemProject from "../components/project/ItemProject";

//---------------------------------------------------------
//styles
//import "../styles/pages/_skills.scss"
//import "../styles/pages/mediaQueriesPages/_skillsMediaQueries.scss"

//---------------------------------------------------------
function Project() {
    //context for the langue and theme
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    //count for add a dynamique className in a project
    let projectNumber = 0;
    let projectToAdd = 0;

    //data for the project to display (language)
    let DataProject = DataProjectFrench;

    //display the french or english datas
    if (langue === "french") {
        DataProject = DataProjectFrench;
    } else if (langue === "english") {
        DataProject = DataProjectEnglish;
    }

    return (
        // part for placing the on the virtual screen
        <div className={`projectScreen ${theme}`}>
            {/* header skills */}
            <div className="projectScreen__headerPage"></div>

            {/* sun and moon */}
            <div className={`projectScreen__star ${theme}`}></div>

            {/* main part project */}
            <div className={`projectScreen__main ${theme}`}>
                <div className={`projectMain ${theme}`}>
                    {/* title of the page */}
                    <h1 className={`projectMain__titlePage ${theme}`}>
                        {DataProject[0].titlePage}
                    </h1>

                    {/* project container */}
                    <div className={`projectMain__projectContainer ${theme}`}>
                        {DataProject.map((element) => {
                            projectNumber += 1;
                            projectToAdd = JSON.stringify(projectNumber);

                            return (
                                // each project with their information
                                <ItemProject
                                    project={projectToAdd}
                                    key={element.id}
                                    name={element.name}
                                    titleImage={element.titleImage}
                                    titleImageTwo={element.titleImageTwo}
                                    titleImageThree={element.titleImageThree}
                                    titlePresentation={
                                        element.titlePresentation
                                    }
                                    textPresentation={element.textPresentation}
                                    firstTitleTextPart={
                                        element.firstTitleTextPart
                                    }
                                    secondTitleTextPart={
                                        element.secondTitleTextPart
                                    }
                                    thirdTitleTextPart={
                                        element.thirdTitleTextPart
                                    }
                                    fourTitleTextPart={
                                        element.fourTitleTextPart
                                    }
                                    fiveTitleTextPart={
                                        element.fiveTitleTextPart
                                    }
                                    sixTitleTextPart={element.sixTitleTextPart}
                                    sevenTitleTextPart={
                                        element.sevenTitleTextPart
                                    }
                                    listTechno={element.listTechno}
                                    objectif={element.objectif}
                                    context={element.context}
                                    work={element.work}
                                    workDetails={element.workDetails}
                                    conclusion={element.conclusion}
                                    linkSite={element.linkSite}
                                    linkCode={element.linkCode}
                                    linkSiteText={element.linkSiteText}
                                    linkCodeText={element.linkCodeText}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
