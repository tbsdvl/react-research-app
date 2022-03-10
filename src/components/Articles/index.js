import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Article from "../Article";
import styles from "../../styles/home.module.css";

const Articles = ({ results, setResults }) => {

    return (
        <div id="articles">
            <h1 className={styles.signup_title}>Articles</h1>
            <ListGroup>
                {
                    results.map(article => {

                        return (
                            <ListGroupItem key={results.indexOf(article)}>
                                <Article data={article} />
                            </ListGroupItem>
                        );
                    })
                }
            </ListGroup>
        </div>
    );
};

export default Articles;