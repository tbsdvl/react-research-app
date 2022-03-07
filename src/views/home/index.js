import React from 'react';
import styles from "../../styles/home.module.css";
import Header from "../../components/Header";
import SignUpForm from "../../components/SignUpForm";

const Home = () => {
    // Need to check if user is authenticated
    // If authenticated, send a header with the link to the profile and a link to logout,
    // and the search page component in place of the login/signup form 

    return (
        <div className={styles.login}>
            <Header />
                <div className="d-flex flex-column justify-content-end m-3 bg-light">
                    <h1 className={styles.signup_title}>{'Sign up & access 389,000,000+ articles'}</h1>
                    <SignUpForm />
                </div>
        </div>
    );
};

export default Home;