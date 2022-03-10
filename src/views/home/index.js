import React, { useState, useEffect } from 'react';
import styles from "../../styles/home.module.css";
import Header from "../../components/Header";
import SearchBar from '../../components/SearchBar';
import Articles from '../../components/Articles';

const Home = () => {
    const [results, setResults] = useState([]);

    useEffect(async () => {
        if(results.length === 0) {
            return;
        };
    }, [results]);
    
    console.log(results);

    return (
        <div className={styles.login}>
            <Header />
            <div className="d-flex flex-column justify-content-end m-3 bg-light">
                <h1 className={styles.signup_title}>{'Sign up & access 389,000,000+ articles'}</h1>
                <SearchBar results={results} setResults={setResults} />
                <Articles results={results} setResults={setResults} />
            </div>
        </div>
    );
};

export default Home;