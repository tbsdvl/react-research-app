/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App.js";

it('renders the App comoponent', () => {
    render(<App />);
        expect(screen.findByText("app")).not.toBe(null);
});