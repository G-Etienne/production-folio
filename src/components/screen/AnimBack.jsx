//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//--------------------------------------------------
// //style
// import "../../styles/components/screen/_back.scss";
// import "../../styles/components/screen/mediaQueriesScreen/_backMediaQueries.scss";

//--------------------------------------------------
//image of the back of the animation
import backAnimWhite from "../../assets/BackScreen/back-anim-clear.jpg";
import backAnimDark from "../../assets/BackScreen/back-anim-dark.jpg";

//--------------------------------------------------
function AnimBack() {
    {
        /* theme */
    }
    const { theme } = useContext(ThemeContext);

    //curent back of the animation
    let backScreen = backAnimWhite;

    //changin the back of the animation
    if (theme === "white") {
        backScreen = backAnimWhite;
    } else if (theme === "dark") {
        backScreen = backAnimDark;
    }

    return (
        <>
            {/* bloc with the image behind the animation */}
            <div className={`backAnim ${theme}`}>
                {/* container of the animation */}
                {/* image behind the animation */}
                <img
                    className="backImage"
                    loading="lazy"
                    src={backScreen}
                    alt="image for the back of the animation"
                    rel="preload"
                />

                {/* animation */}
                <div className="backAnim__container">
                    {/* first part of the animation (dots and rods) */}
                    <div className={`dot__one ${theme}`}>
                        <div className={`dot__ancor__one ${theme}`}>
                            <div className={`rod__one ${theme}`}>
                                <div className={`dot__two ${theme}`}>
                                    <div className={`rod__two ${theme}`}>
                                        <div
                                            className={`specialRod__one ${theme}`}
                                        ></div>

                                        <div className={`dot__three ${theme}`}>
                                            <div
                                                className={`rod__three ${theme}`}
                                            >
                                                <div
                                                    className={`specialRod__two ${theme}`}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`dot__ancor__two ${theme}`}>
                            <div className={`rod__one ${theme}`}>
                                <div className={`dot__two ${theme}`}>
                                    <div className={`rod__two ${theme}`}>
                                        <div
                                            className={`specialRod__three ${theme}`}
                                        ></div>
                                        <div className={`dot__three ${theme}`}>
                                            <div
                                                className={`rod__three ${theme}`}
                                            >
                                                <div
                                                    className={`specialRod__four ${theme}`}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`dot__ancor__three ${theme}`}>
                            <div className={`rod__one ${theme}`}>
                                <div className={`dot__two ${theme}`}>
                                    <div className={`rod__two ${theme}`}>
                                        <div
                                            className={`specialRod__five ${theme}`}
                                        ></div>

                                        <div className={`dot__three ${theme}`}>
                                            <div
                                                className={`rod__three ${theme}`}
                                            >
                                                <div
                                                    className={`specialRod__six ${theme}`}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`rod__one ${theme}`}>
                            <div className={`dot__two ${theme}`}>
                                <div className={`rod__two ${theme}`}>
                                    <div
                                        className={`specialRod__seven ${theme}`}
                                    ></div>
                                    <div className={`dot__three ${theme}`}>
                                        <div className={`rod__three ${theme}`}>
                                            <div
                                                className={`specialRod__eight ${theme}`}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* second part of the animation (dots and rods) */}
                    <div className={`dot__one__bis ${theme}`}>
                        <div className={`dot__ancor__one ${theme}`}>
                            <div className={`rod__one ${theme}`}>
                                <div className={`dot__two ${theme}`}>
                                    <div className={`rod__two ${theme}`}>
                                        <div
                                            className={`specialRod__one ${theme}`}
                                        ></div>
                                        <div className={`dot__three ${theme}`}>
                                            <div
                                                className={`rod__three ${theme}`}
                                            >
                                                <div
                                                    className={`specialRod__two ${theme}`}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`dot__ancor__two ${theme}`}>
                            <div className={`rod__one ${theme}`}>
                                <div className={`dot__two ${theme}`}>
                                    <div className={`rod__two ${theme}`}>
                                        <div
                                            className={`specialRod__three ${theme}`}
                                        ></div>
                                        <div className={`dot__three ${theme}`}>
                                            <div
                                                className={`rod__three ${theme}`}
                                            >
                                                <div
                                                    className={`specialRod__four ${theme}`}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`dot__ancor__three ${theme}`}>
                            <div className={`rod__one ${theme}`}>
                                <div className={`dot__two ${theme}`}>
                                    <div className={`rod__two ${theme}`}>
                                        <div
                                            className={`specialRod__five ${theme}`}
                                        ></div>

                                        <div className={`dot__three ${theme}`}>
                                            <div
                                                className={`rod__three ${theme}`}
                                            >
                                                <div
                                                    className={`specialRod__six ${theme}`}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`rod__one ${theme}`}>
                            <div className={`dot__two ${theme}`}>
                                <div className={`rod__two ${theme}`}>
                                    <div
                                        className={`specialRod__seven ${theme}`}
                                    ></div>
                                    <div className={`dot__three ${theme}`}>
                                        <div className={`rod__three ${theme}`}>
                                            <div
                                                className={`specialRod__eight ${theme}`}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AnimBack;
