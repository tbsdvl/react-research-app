import React from "react";
import { ListGroup, ListGroupItem, } from "react-bootstrap";
import styles from "../../styles/home.module.css";


const Archives = ({ archives, setArchives }) => {

    return (
        <div id="archives-list">
            {/* Map archives from db to list */}
            <h1 className={styles.signup_title}>Archives</h1>
            <ListGroup>
                {/* 
                    archives.map(archive => {
                        return (
                            <ListGroupItem key={archives.indexOf(archive)} archive={archive}>
                            <Archive data={archive} />
                        </ListGroupItem>
                        );
                    );
                }
                */}
            </ListGroup>
        </div>
    )
};

export default Archives;