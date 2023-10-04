//----------------------------------------------------
import React from "react";
import ReactDOM from "react-dom/client";
import Roads from "./routes/Routes";

//----------------------------------------------------
//styles
import "./CSS/style.css";


//----------------------------------------------------
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Roads />
    </React.StrictMode>,
);
