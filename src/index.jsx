import React from "react"
import { createRoot } from "react-dom/client";
import App from "./App.jsx";


//react style code:
const root = createRoot(document.getElementById("root")) //creates container for use
root.render(<App />) //react component now