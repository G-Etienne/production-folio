//---------------------------------------------------------
//import of the context and states
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangueContext } from "../contexts/LangueContext";

//---------------------------------------------------------
//font awesome with some icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

//---------------------------------------------------------
// //style
// import "../styles/pages/_goals.scss";
// import "../styles/pages/mediaQueriesPages/_goalsMediaQueries.scss";

//---------------------------------------------------------
//image
import Learning from "../assets/Goals/front-front-store-learning.jpg";
import Team from "../assets/Goals/front-frontstore-team.jpg";
import Evolution from "../assets/Goals/front-frontstore-evolution.jpg";
import BackScreenClear from "../assets/Goals/back-goal.jpg";
import BackScreenDark from "../assets/Goals/back-goal-dark.jpg";
import BackStoreFrontClear from "../assets/Goals/back-storefront-goal.jpg";
import BackStoreFrontDark from "../assets/Goals/back-frontstore-dark.jpg";

//---------------------------------------------------------
function Goals() {
    //state for open the objectives
    const [openOne, setOpenOne] = useState("close");
    const [openTwo, setOpenTwo] = useState("close");
    const [openThree, setOpenThree] = useState("close");

    //langue and theme
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    let backImage = BackScreenClear;
    let backStoreFrontImage = BackStoreFrontClear;

    if (theme === "white") {
        backImage = BackScreenClear;
        backStoreFrontImage = BackStoreFrontClear;
    } else if (theme === "dark") {
        backImage = BackScreenDark;
        backStoreFrontImage = BackStoreFrontDark;
    }

    //french part
    if (langue === "french") {
        return (
            <div>
                {/* page goals */}
                <div className={`goalScreen ${theme}`}>
                    {/* background image */}
                    <img
                        className={`backImageScreen ${theme}`}
                        src={backImage}
                        alt="image of the back of the screen"
                        rel="preload"
                        loading="lazy"
                    />
                    {/* header goals */}
                    <div className="goalScreen__headerPage">
                        <div className={`headerGoal ${theme}`}></div>
                    </div>

                    {/* main part goals */}
                    <div className={`goalScreen__main ${theme}`}>
                        <div className={`goalMain ${theme}`}>
                            {/* title */}
                            <h1 className={`goalMain__goalTitle ${theme}`}>
                                Objectifs
                            </h1>

                            {/* Objectivs */}
                            <div className={`goalMain__goalContainer ${theme}`}>
                                {/* firts block */}
                                <div className={`goalMain__firstGoal ${theme}`}>
                                    {/* block closed */}
                                    {/* visible block */}
                                    <div
                                        onClick={() => setOpenOne("open")}
                                        className={`goalMain__firstGoal__storeFront ${theme} ${openOne}`}
                                    >
                                        {/* background image */}
                                        <img
                                            className="backStoreFront"
                                            loading="lazy"
                                            src={backStoreFrontImage}
                                            alt="back of the storefront"
                                            rel="preload"
                                        />

                                        <img
                                            className={`goalMain__goalContainer__image ${theme}`}
                                            src={Learning}
                                            alt="truc"
                                            rel="preload"
                                            loading="lazy"
                                        />

                                        <h2
                                            className={`goalMain__goalContainer__title ${theme}`}
                                        >
                                            Toujours progresser
                                        </h2>

                                        {/* fake button */}
                                        <div
                                            className={`goalMain__goalContainer__clic ${theme}`}
                                        >
                                            Découvrir l&apos;objectif
                                        </div>
                                    </div>

                                    {/* hide block */}
                                    <div
                                        onClick={() => setOpenOne("close")}
                                        className={`goalMain__firstGoal__textGoal ${theme} ${openOne}`}
                                    >
                                        {/* cross icone */}
                                        <div>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>

                                        <img
                                            src={backImage}
                                            alt="image for the abck of the text goal"
                                            rel="preload"
                                            loading="lazy"
                                        />

                                        <h3>Progression constante</h3>

                                        <p>
                                            En tant que{" "}
                                            <strong>développeur web</strong>, il
                                            est essentiel de maintenir une
                                            veille constante sur les{" "}
                                            <strong>
                                                nouvelles technologies
                                            </strong>{" "}
                                            et méthodes. <br />
                                            <br />
                                            Mon objectif consiste à approfondir
                                            en permanence ma compréhension et
                                            mes compétences pour assurer des
                                            résultats de haute qualité tout en
                                            optimisant l&apos;efficacité. <br />
                                            <br />
                                            C&apos;est ainsi que je progresse
                                            tout en réalisant au mieux les
                                            missions qui me sont confiées.
                                        </p>
                                    </div>
                                </div>

                                {/* second block */}
                                <div
                                    className={`goalMain__secondGoal ${theme}`}
                                >
                                    {/* block closed */}
                                    {/* visible block */}
                                    <div
                                        onClick={() => setOpenTwo("open")}
                                        className={`goalMain__secondGoal__storeFront ${theme} ${openTwo}`}
                                    >
                                        {/* background image */}
                                        <img
                                            className="backStoreFront"
                                            loading="lazy"
                                            src={backStoreFrontImage}
                                            alt="back of the storefront"
                                            rel="preload"
                                        />

                                        <img
                                            className={`goalMain__goalContainer__image ${theme}`}
                                            src={Team}
                                            alt="truc"
                                            rel="preload"
                                            loading="lazy"
                                        />

                                        <h2
                                            className={`goalMain__goalContainer__title ${theme}`}
                                        >
                                            Comprendre l&apos;équipe
                                        </h2>

                                        <div
                                            className={`goalMain__goalContainer__clic ${theme}`}
                                        >
                                            Découvrir l&apos;objectif
                                        </div>
                                    </div>

                                    {/* hide block */}
                                    <div
                                        onClick={() => setOpenTwo("close")}
                                        className={`goalMain__secondGoal__textGoal ${theme} ${openTwo}`}
                                    >
                                        {/* cross icone */}
                                        <div>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>

                                        <img
                                            src={backImage}
                                            loading="lazy"
                                            alt="image for the abck of the text goal"
                                            rel="preload"
                                        />

                                        <h3>Avançons ensemble</h3>

                                        <p>
                                            En tant que
                                            <strong> développeur web</strong>,
                                            je considère le travail
                                            d&apos;équipe comme essentiel.{" "}
                                            <br />
                                            <br />
                                            Imaginer une équipe solide
                                            travaillant de manière harmonieuse
                                            sur des projets est, à mon avis, la
                                            meilleure façon de progresser tout
                                            en appréciant pleinement son
                                            quotidien. <br />
                                            <br />
                                            Mon objectif ? <br />
                                            <br />
                                            M&apos;intégrer parfaitement dans
                                            une équipe et trouver la place
                                            idéale pour une contribution
                                            optimale.
                                        </p>
                                    </div>
                                </div>

                                {/* third block */}
                                <div className={`goalMain__thirdGoal ${theme}`}>
                                    {/* block closed */}
                                    {/* visible block */}
                                    <div
                                        onClick={() => setOpenThree("open")}
                                        className={`goalMain__thirdGoal__storeFront ${theme} ${openThree}`}
                                    >
                                        {/* background image */}
                                        <img
                                            className="backStoreFront"
                                            loading="lazy"
                                            src={backStoreFrontImage}
                                            alt="back of the storefront"
                                            rel="preload"
                                        />

                                        <img
                                            className={`goalMain__goalContainer__image ${theme}`}
                                            src={Evolution}
                                            alt="truc"
                                            rel="preload"
                                            loading="lazy"
                                        />

                                        <h2
                                            className={`goalMain__goalContainer__title ${theme}`}
                                        >
                                            Évoluer en entreprise
                                        </h2>

                                        <div
                                            className={`goalMain__goalContainer__clic ${theme}`}
                                        >
                                            Découvrir l&apos;objectif
                                        </div>
                                    </div>

                                    {/* hide block */}
                                    <div
                                        onClick={() => setOpenThree("close")}
                                        className={`goalMain__thirdGoal__textGoal ${theme} ${openThree}`}
                                    >
                                        {/* cross icone */}
                                        <div>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>

                                        <img
                                            src={backImage}
                                            loading="lazy"
                                            alt="image for the abck of the text goal"
                                            rel="preload"
                                        />

                                        <h3>Avancer dans ma carrière</h3>

                                        <p>
                                            Mon objectif principal est de
                                            nourrir ma curiosité insatiable pour
                                            le monde du <strong>web</strong> et
                                            du <strong>graphisme</strong>.
                                            <br />
                                            <br />
                                            Progresser dans ma carrière me
                                            permettra toujours de découvrir de
                                            nouveaux aspects passionnants de mon
                                            métier. <br />
                                            <br />
                                            Les défis qui se présentent sont les
                                            catalyseurs de ma réussite.
                                        </p>
                                    </div>
                                </div>

                                <div className="fakeBlockBottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    //english part
    if (langue === "english") {
        return (
            <div>
                {/* page goals */}
                <div className={`goalScreen ${theme}`}>
                    {/* background image */}
                    <img
                        className={`backImageScreen ${theme}`}
                        src={backImage}
                        alt="image of the back of the screen"
                        rel="preload"
                        loading="lazy"
                    />
                    {/* header goals */}
                    <div className="goalScreen__headerPage">
                        <div className={`headerGoal ${theme}`}></div>
                    </div>

                    {/* main part goals */}
                    <div className={`goalScreen__main ${theme}`}>
                        {/* main part */}
                        <div className={`goalMain ${theme}`}>
                            {/* title */}
                            <h1 className={`goalMain__goalTitle ${theme}`}>
                                Goals
                            </h1>

                            {/* Objectivs */}
                            <div className={`goalMain__goalContainer ${theme}`}>
                                {/* firts block */}
                                <div className={`goalMain__firstGoal ${theme}`}>
                                    {/* block closed */}
                                    {/* visible block */}
                                    <div
                                        onClick={() => setOpenOne("open")}
                                        className={`goalMain__firstGoal__storeFront ${theme} ${openOne}`}
                                    >
                                        {/* background image */}
                                        <img
                                            className="backStoreFront"
                                            loading="lazy"
                                            src={backStoreFrontImage}
                                            alt="back of the storefront"
                                            rel="preload"
                                        />

                                        <img
                                            className={`goalMain__goalContainer__image ${theme}`}
                                            src={Learning}
                                            alt="truc"
                                            rel="preload"
                                            loading="lazy"
                                        />

                                        <h2
                                            className={`goalMain__goalContainer__title ${theme}`}
                                        >
                                            Always progressing
                                        </h2>

                                        {/* fake button */}
                                        <div
                                            className={`goalMain__goalContainer__clic ${theme}`}
                                        >
                                            Discover the goal
                                        </div>
                                    </div>

                                    {/* hide block */}
                                    <div
                                        onClick={() => setOpenOne("close")}
                                        className={`goalMain__firstGoal__textGoal ${theme} ${openOne}`}
                                    >
                                        {/* cross icone */}
                                        <div>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>

                                        <img
                                            src={backImage}
                                            alt="image for the abck of the text goal"
                                            loading="lazy"
                                            rel="preload"
                                        />

                                        <h3>Constant progression</h3>

                                        <p>
                                            As a <strong>web developer</strong>,
                                            it&apos;s crucial to stay constantly
                                            updated with{" "}
                                            <strong>
                                                emerging technologies
                                            </strong>{" "}
                                            and methodologies.
                                            <br />
                                            <br /> My goal is to continually
                                            deepen my understanding and skills
                                            to ensure high-quality results while
                                            maximizing efficiency.
                                            <br />
                                            <br />
                                            This is how I evolve while excelling
                                            in the tasks entrusted to me.
                                        </p>
                                    </div>
                                </div>

                                {/* second block */}
                                <div
                                    className={`goalMain__secondGoal ${theme}`}
                                >
                                    {/* block closed */}
                                    {/* visible block */}
                                    <div
                                        onClick={() => setOpenTwo("open")}
                                        className={`goalMain__secondGoal__storeFront ${theme} ${openTwo}`}
                                    >
                                        {/* background image */}
                                        <img
                                            className="backStoreFront"
                                            loading="lazy"
                                            src={backStoreFrontImage}
                                            alt="back of the storefront"
                                            rel="preload"
                                        />

                                        <img
                                            className={`goalMain__goalContainer__image ${theme}`}
                                            src={Team}
                                            alt="back"
                                            rel="preload"
                                            loading="lazy"
                                        />

                                        <h2
                                            className={`goalMain__goalContainer__title ${theme}`}
                                        >
                                            Understanding the team
                                        </h2>

                                        <div
                                            className={`goalMain__goalContainer__clic ${theme}`}
                                        >
                                            Discover the goal
                                        </div>
                                    </div>

                                    {/* hide block */}
                                    <div
                                        onClick={() => setOpenTwo("close")}
                                        className={`goalMain__secondGoal__textGoal ${theme} ${openTwo}`}
                                    >
                                        {/* cross icone */}
                                        <div>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>

                                        <img
                                            src={backImage}
                                            loading="lazy"
                                            alt="image for the abck of the text goal"
                                            rel="preload"
                                        />

                                        <h3>Let&apos;s advance together</h3>

                                        <p>
                                            As a <strong>web developer</strong>,
                                            I highly value teamwork. <br />
                                            <br />
                                            Picture a strong team working in
                                            unison on projects. In my view,
                                            it&apos;s the best way to grow while
                                            fully enjoying your daily work.
                                            <br />
                                            <br />
                                            My goal? <br />
                                            <br />
                                            To seamlessly integrate into a team
                                            and find the ideal role for optimal
                                            contribution.
                                        </p>
                                    </div>
                                </div>

                                {/* third block */}
                                <div className={`goalMain__thirdGoal ${theme}`}>
                                    {/* block closed */}
                                    {/* visible block */}
                                    <div
                                        onClick={() => setOpenThree("open")}
                                        className={`goalMain__thirdGoal__storeFront ${theme} ${openThree}`}
                                    >
                                        {/* background image */}
                                        <img
                                            className="backStoreFront"
                                            loading="lazy"
                                            src={backStoreFrontImage}
                                            alt="back of the storefront"
                                            rel="preload"
                                        />

                                        <img
                                            className={`goalMain__goalContainer__image ${theme}`}
                                            src={Evolution}
                                            alt="truc"
                                            rel="preload"
                                            loading="lazy"
                                        />

                                        <h2
                                            className={`goalMain__goalContainer__title ${theme}`}
                                        >
                                            Progress in the company
                                        </h2>

                                        <div
                                            className={`goalMain__goalContainer__clic ${theme}`}
                                        >
                                            Discover the goal
                                        </div>
                                    </div>

                                    {/* hide block */}
                                    <div
                                        onClick={() => setOpenThree("close")}
                                        className={`goalMain__thirdGoal__textGoal ${theme} ${openThree}`}
                                    >
                                        {/* cross icone */}
                                        <div>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>

                                        <img
                                            src={backImage}
                                            loading="lazy"
                                            alt="image for the abck of the text goal"
                                            rel="preload"
                                        />

                                        <h3>Advance in my career</h3>

                                        <p>
                                            My primary goal is to fuel my
                                            insatiable curiosity about the world
                                            of <strong>web</strong> and
                                            <strong> graphics</strong>. <br />
                                            <br />
                                            Advancing in my career will always
                                            enable me to uncover new exciting
                                            facets of my profession! <br />
                                            <br />
                                            The challenges that arise serve as
                                            the engines of my success.
                                        </p>
                                    </div>
                                </div>

                                <div className="fakeBlockBottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Goals;
