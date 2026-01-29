import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import AuthForm from './AuthForm';

describe('AuthForm - Line by line Component', () => {

    // Line 2–3: Component renders + useState(false)
    test('initial state isLogin =false (Signup view)', () => {
        render(<AuthForm />);
        // isLogin = false → Signup form visible
        expect(screen.getByText('Signup Form')).toBeInTheDocument();
    });


    //  Line 5–7: Static containers exist
    test('renders container structure', () => {
        render(<AuthForm />);
        expect(document.querySelector('.container')).toBeInTheDocument();
        expect(document.querySelector('.form-container')).toBeInTheDocument();
        expect(document.querySelector('.form-toggle')).toBeInTheDocument();
    });

    // Line 8–12: Login button exists & label
    test('Login button renders correctly', () => {
        render(<AuthForm />)
        const loginButton = screen.getByText('Login');
        expect(loginButton).toBeInTheDocument()
    });

    //  Line 9: Login button NOT active when isLogin=false
    test('login button does not have active initially', () => {
        render(<AuthForm />);
        expect(screen.getByText('Login')).not.toHaveClass('active');
    })

    //  Line 10: Clicking Login sets isLogin=true
    test('clicking Login button sets isLogin to true', () => {
        render(<AuthForm />);
        fireEvent.click(screen.getByText('Login'));
        expect(screen.getByText('Login Form')).toBeInTheDocument();
    })
    // Line 9: Login button active when isLogin=true
    test('Login button gets active class when selected', () => {
        render(<AuthForm />);
        const loginButton = screen.getByText('Login');
        fireEvent.click(loginButton);
        expect(loginButton).toHaveClass('active');
    })
    // 🔹 Line 13–17: Signup button exists
    test('Signup button renders correctly', () => {
        render(<AuthForm />);
        expect(screen.getByText('Login')).toBeInTheDocument();
    });


    // 🔹 Line 15: Clicking Signup sets isLogin=false
    test('clicking Signup button switches back to Signup form', () => {
        render(<AuthForm />);
        fireEvent.click(screen.getByText('Login'));
        fireEvent.click(screen.getByText('Signup'));

        expect(screen.getByText('Signup Form')).toBeInTheDocument();
    });


    // 🔹 Line 19: Conditional rendering – Login branch
    test('renders Login form when isLogin=true', () => {
        render(<AuthForm />);
        fireEvent.click(screen.getByText('Login'));
        expect(screen.getByText('Login Form')).toBeInTheDocument();
    });


    // 🔹 Line 21–25: Login form fields
    test('Login form contains all required elements', () => {
        render(<AuthForm />);
        fireEvent.click(screen.getByText('Login'));
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.getByText('Forgot Password')).toBeInTheDocument();
        expect(screen.getByText('Signup')).toBeInTheDocument();
    });

    // 🔹 Line 28–30: "Signup now" link toggles state
    test('clicking Signup now switches to Signup form', () => {
        render(<AuthForm />);
        fireEvent.click(screen.getByText('Login'));
        fireEvent.click(screen.getByText('Signup now'));
        expect(screen.getByText('Signup Form')).toBeInTheDocument();
    });

    // 🔹 Line 34–39: Signup form fields faild
    test('Signup form contains all required elements', () => {
        render(<AuthForm />);

        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Confirm Password')
        ).toBeInTheDocument();
        expect(screen.getByText('Login')).toBeInTheDocument();
    });

})
