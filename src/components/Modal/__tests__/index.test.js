import React from "react";
import Modal from "..";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const mockToggleFunction = jest.fn();

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

afterEach(cleanup);

describe('Modal component', () => {
    it('renders', ()=> {
        // baseline
        render(<Modal 
            currentPhoto={currentPhoto}
            onClose={mockToggleFunction}
        />);
    });
    // snapshot
    it('matches snapshot', () => {
        const { asFragment } = render(<Modal 
            currentPhoto={currentPhoto}
            onClose={mockToggleFunction}
        />);
    expect(asFragment()).toMatchSnapshot();
    });
})

describe('click event', () => {
    it('calls onClose handler', () => {
        // arrange: render modal
        const { getByText } = render(<Modal
            currentPhoto={currentPhoto}
            onClose={mockToggleFunction}
            />);
        // act: simulate click event
        fireEvent.click(getByText('Close this modal'));
        // assert: expected matcher
        expect(mockToggleFunction).toHaveBeenCalledTimes(1);
    });
})