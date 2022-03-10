import React, { useState } from "react";
import { Form, FormGroup, FormLabel } from "react-bootstrap";
import { handleSearchQuery } from "./handlers";
import SearchButton from "../SearchButton";

const SearchBar = ({ results, setResults }) => {
    const [query, setQuery] = useState("");

    return (
        <section id="search">
            <Form>
                <FormGroup className="mb-3" controlId="formBasicSearchBar">
                    <FormLabel>Search Google Scholar</FormLabel>
                    <Form.Control
                        type="text"
                        placeholder="Search for articles..."
                        onChange={async (e) => handleSearchQuery(e, query, setQuery)}
                    />
                </FormGroup>
            </Form>
            <Search query={query} setResults={setResults} />
        </section>
    );
};

export default SearchBar;