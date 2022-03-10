import React, { useState } from "react";
import { Form, FormGroup, FormLabel } from "react-bootstrap";
import { handleSearchQuery } from "./handlers";
import CreateArchiveButton from "../CreateArchiveButton";

const SearchBar = ({ results, setResults }) => {
    const [query, setQuery] = useState("");

    return (
        <section id="search">
            <Form>
                <FormGroup className="mb-3" controlId="formBasicSearchBar">
                    <FormLabel>Search Bar</FormLabel>
                    <Form.Control
                        type="text"
                        placeholder="Search for articles..."
                        onChange={async (e) => handleSearchQuery(e, query, setQuery)}
                    />
                    <Form.Text>
                        Search Google Scholar
                    </Form.Text>
                </FormGroup>
            </Form>
            <CreateArchiveButton query={query} setResults={setResults} />
        </section>
    );
};

export default SearchBar;