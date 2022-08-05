import React from "react";
import Contact from "..";
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm/>);
    })

    // snapshot
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm/>);
        // assert
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('text visibility', () => {
    it('Contact text matches', () => {
        const { getByTestId } = render(<ContactForm/>);

        expect(getByTestId('contact')).toHaveTextContent('Contact me');
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    })
})
afterEach(cleanup);