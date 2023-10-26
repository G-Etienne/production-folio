//---------------------------------------------------------
//imports of react router dom
import { Routes, Route, BrowserRouter } from "react-router-dom";

//---------------------------------------------------------
//Routes components
import About from "../pages/About";
import Main from "../components/MainPage";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Trainings from "../pages/Trainings";
import Goals from "../pages/Goals";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Skills from "../pages/Skills";
import Project from "../pages/Project";
import Graphics from "../pages/Graphics";
//---------------------------------------------------------
//context importation
import { ThemeProvider } from "../contexts/ThemeContext";
import { LangueProvider } from "../contexts/LangueContext";

//---------------------------------------------------------
//style
// import "../styles/bases/_bases.scss";

//---------------------------------------------------------
function Roads() {
    return (
        <BrowserRouter basename="/production-folio/">
            <ThemeProvider>
                <LangueProvider>
                    {/* application */}
                    <Main />

                    <Routes>
                        <Route path="/*" element={<Error />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/goals" element={<Goals />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Project />} />
                        <Route path="/trainings" element={<Trainings />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/graphics" element={<Graphics />} />
                    </Routes>
                </LangueProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default Roads;
