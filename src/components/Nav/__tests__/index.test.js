import React from "react";
import Nav from "..";
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav/>);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav/>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visible', () => {
    it('inserts emoji in the h2', () => {
        // arrange
        const { getByLabelText } = render(<Nav/>);

        // assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

describe('links are visible', () => {
    it('inserts text into links', () => {
        // arrange
        const { getByTestId } = render(<Nav/>);
        // assert
        expect(getByTestId('link')).toHaveTextContent(' Oh snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})
afterEach(cleanup);