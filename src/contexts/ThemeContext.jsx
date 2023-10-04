//---------------------------------------------------------
//creation of the context for the white and dark mode
import { createContext, useState } from "react";

//---------------------------------------------------------
//creation of the context
const ThemeContext = createContext();

//---------------------------------------------------------
function ThemeProvider({ children }) {
    {
        /* state for changing context */
    }
    const [theme, setTheme] = useState("white");

    {
        /* theme value definition */
    }
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "white" ? "dark" : "white"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider, ThemeContext };
