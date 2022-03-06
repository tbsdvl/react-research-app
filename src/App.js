import React from "react";
import styles from "./styles/app.module.css";
import Header from "./components/Header";


const App = () => {

    return (
        <div id="app" className={styles.app}>
            <Header />
        </div>
    );
};

export default App;