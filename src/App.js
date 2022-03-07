import React from "react";
import styles from "./styles/app.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";

const App = () => {

    return (
        <BrowserRouter>
            <div id="app" className={styles.app}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;