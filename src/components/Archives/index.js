import React from "react";
import { ListGroup, ListGroupItem, } from "react-bootstrap";

const ArchivesList = ({ archives, setArchives }) => {

    return (
        <div id="archives-list">
            {/* Map archives from db to list */}
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

export default ArchivesList;