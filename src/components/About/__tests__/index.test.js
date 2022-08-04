import React from "react";
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import About from "..";

describe('About component', () => {
    // - first test | render <About/>. it/test are interchangeable.
    it('renders', () => {
        render(<About/>);
    });

    // - second test | snapshot
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About/>);
        expect(asFragment()).toMatchSnapshot();
    });
})

// prevents memory leaks
afterEach(cleanup);