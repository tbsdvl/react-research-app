import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Article from "../Article";

const Articles = ({ results, setResults }) => {

    return (

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
    );
};

export default Articles;