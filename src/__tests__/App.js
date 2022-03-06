/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.js";

it('renders the App comoponent', () => {
    render(<App />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});