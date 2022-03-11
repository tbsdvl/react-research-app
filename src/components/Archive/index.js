import React from "react";
import { Card, } from "react-bootstrap";
import SaveToArchiveButton from "../SaveToArchiveButton";

const Archive = ({ data }) => {

    return (
        <Card>
            <p>{data.archiveName}</p>
        </Card>
    );
};

export default Archive;