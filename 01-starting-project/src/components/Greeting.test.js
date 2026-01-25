import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting"

describe('Greeting Component', () => {
    test('renders Hello World as text', () => {
        render(<Greeting />);
        const helloworld = screen.getByText('Hello World');
        expect(helloworld).toBeInTheDocument();
    });
    test('renders It is good to see you if the button was not clicked', () => {
        render(<Greeting />);
        const outputElement = screen.getByText('good to see you', { exact: false });
        expect(outputElement).toBeInTheDocument()
    });

    test('renders Changed to see you if the button was clicked', () => {
        render(<Greeting />);
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement);

        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    })

    test("does not renders  good to see you if the button was clicked", () => {
        //Arrange
        render(<Greeting />);
        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement);

        //Assert
        const outputElement = screen.queryByText('good to see you',{exact:false});
        expect(outputElement).toBeNull();
    })
})
