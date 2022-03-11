import React, { useState, useEffect } from 'react';
import styles from "../../styles/home.module.css";
import Header from "../../components/Header";
import SearchBar from '../../components/SearchBar';
import Articles from '../../components/Articles';
import Archives from '../../components/Archives';
import API from "../../util/API";

const Home = () => {
    const [results, setResults] = useState([]);
    const [archives, setArchives] = useState([]);
    const [count, setCount] = useState(10);

    useEffect(async () => {
        if (archives.length === 0) {
            const fromDBArchives = await API.getArchives();
            console.log(fromDBArchives);
            setArchives(fromDBArchives.data);
            return;
        } 
        // else {
            // const fromDBArchives = await API.getArchives();
            // setArchives(fromDBArchives.data);
            // return;
        // }

    }, [archives, results, count]);

    console.log(results, archives);


    if (archives.length === 0) {
        return (<div className={styles.login}>
            <Header />
            <div className="d-flex flex-column justify-content-end m-3 bg-light">
                <h1 className={styles.signup_title}>{'Search 3000+ books'}</h1>
                <SearchBar results={results} setResults={setResults} count={count} setCount={setCount} />
                <section className="d-flex flex-row justify-content-around" id="article-archives">
                    <p>Waiting for archives</p>
                </section>
            </div>
        </div>
        )
    } else {
        return (
            <div className={styles.login}>
                <Header />
                <div className="d-flex flex-column justify-content-end m-3 bg-light">
                    <h1 className={styles.signup_title}>{'Search 3000+ books'}</h1>
                    <SearchBar results={results} setResults={setResults} count={count} setCount={setCount} />
                    <section className="d-flex flex-row justify-content-around" id="article-archives">
                        <Articles results={results} setResults={setResults} count={count} setCount={setCount} archives={archives} />
                        <Archives archives={archives} setArchives={setArchives} />
                    </section>
                </div>
            </div>
        );
    }
};

export default Home;