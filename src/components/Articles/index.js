import React from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Article from "../Article";
import styles from "../../styles/home.module.css";

const Articles = ({ results, setResults, count, setCount }) => {

    return (
        <div id="books">
            <h1 className={styles.signup_title}>Articles</h1>
            <ListGroup className="d-flex flex-column justify-content-around">
                {
                    results.map(article => {

                        if (results.indexOf(article) <= count) {
                            return (
                                <ListGroupItem className="bg-light w-50" key={results.indexOf(article)}>
                                    <Article data={article} />
                                </ListGroupItem>
                            );
                        } else {
                            return;
                        };
                    })
                }
            </ListGroup>
            {
                results.length <= 10 ?
                    null
                    :
                    <Button
                        type="submit"
                        onClick={() => {
                            setCount(count + 10);
                        }
                        }
                    >
                        Load next 10 books
                    </Button>
            }
        </div>
    );
};

export default Articles;