import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { handleSearchAPIRequest } from "./handlers";


const CreateArchiveButton = ({ query, setResults }) => {

    return (
        <Button
            type="submit"
            onClick={async () => await handleSearchAPIRequest(query, setResults)}
        >
            Search
        </Button>
    );
};

export default CreateArchiveButton;