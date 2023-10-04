//---------------------------------------------------------
//creation of the context for the white and dark mode
import { createContext, useState } from "react";

//---------------------------------------------------------
//creation of the context
const LangueContext = createContext();

//---------------------------------------------------------
function LangueProvider({ children }) {
    {
        /* state for changing context */
    }
    const [langue, setLangue] = useState("french");

    {
        /* theme value definition */
    }
    const toggleLangue = () => {
        setLangue((prevLangue) =>
            prevLangue === "french" ? "english" : "french",
        );
    };

    return (
        <LangueContext.Provider value={{ langue, toggleLangue }}>
            {children}
        </LangueContext.Provider>
    );
}

export { LangueProvider, LangueContext };
