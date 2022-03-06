import React from "react";
import styles from "../../styles/header.module.css";

const Header = () => {

    return (
        <section id="app-header" className={styles.header}>
            <div className="d-flex flex-row justify-content-around">
                <img alt="app_logo" src="/images/Project Logo.jpg" height="100px" width="100px" />
                <h1 className={styles.title}>App Name</h1>
                <a className={styles.signin} href="http://localhost:3000/login">Sign In</a>
            </div>
        </section>
    )
};

export default Header;