import React from "react";
import Nav from "..";
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

// handle props for Nav
const categories = [
    {
        name: 'portraits',
        description: 'Portraits of people in my life'
    }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav
         categories={categories}
         setCurrentCategory={mockSetCurrentCategory}
         currentCategory={mockCurrentCategory}
        />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
         categories={categories}
         setCurrentCategory={mockSetCurrentCategory}
         currentCategory={mockCurrentCategory}
        />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visible', () => {
    it('inserts emoji in the h2', () => {
        // arrange
        const { getByLabelText } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
           />);

        // assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

describe('links are visible', () => {
    it('inserts text into links', () => {
        // arrange
        const { getByTestId } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
           />);
        // assert
        expect(getByTestId('link')).toHaveTextContent('Oh snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})
afterEach(cleanup);