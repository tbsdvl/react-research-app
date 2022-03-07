import React from 'react';
import styles from "../../styles/home.module.css";
import Header from "../../components/Header";
import Form from "../../components/Form";

const Home = () => {
    // Need to check if user is authenticated
    // If authenticated, send a header with the link to the profile,
    // and the search page component in place of the login/signup form 

    return (
        <div className={styles.login} >
            <Header />
            <Form />
        </div>
    );
};

export default Home;