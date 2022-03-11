import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { handleSearchAPIRequest } from "./handlers";
import API from "../../util/API.js";

const SearchButton = ({ query, setResults }) => {

    return (
        <Button
            type="submit"
            onClick={async () => await handleSearchAPIRequest(query, setResults)}
        >
            Search
        </Button>
    );
};

export default SearchButton;