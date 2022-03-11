import React from "react";
import { Card } from "react-bootstrap";

const Article = ({ data }) => {
    console.log(data);

    return (
        <Card>
            <Card.Body className="d-flex flex-column justify-content-around">
                <p>{"Title: " + data.title}</p>
                <p>{"Authors: " + data.authors}</p>
                <p>{"Language" + data.langauge}</p>
                <p>{"Issued: " + data.issued}</p>
                <p>{"Subjects: " + data.subjects}</p>
                <p>{"Bookshelves: " + data.bookshelves}</p>
                <p>{"LoCC" + data.locc}</p>
                <a href={data.url} target="_blank">Find {data.title} on Gutenberg Project</a>
                <a href={data.as_html} target="_blank">Read {data.title} as html</a>
            </Card.Body>
        </Card>
    );
};

export default Article;