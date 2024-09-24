import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/matchers';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

// Mocking axios and useNavigate
jest.mock('axios');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('Login Component', () => {
    const navigate = jest.fn();

    beforeEach(() => {
        useNavigate.mockReturnValue(navigate);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders the login form with username and password inputs', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        // Check if username and password fields are in the document
        expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    });

    test('should allow entering a username and password', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        const usernameInput = screen.getByLabelText(/Username/i);
        const passwordInput = screen.getByLabelText(/Password/i);

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

        expect(usernameInput.value).toBe('testuser');
        expect(passwordInput.value).toBe('testpassword');
    });

    test('should navigate to dashboard on successful login', async () => {
        axios.post.mockResolvedValueOnce({ status: 200, data: { token: 'fake_token' } });

        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'testpassword' } });

        fireEvent.click(screen.getByRole('button', { name: /Sign in to your account/i }));

        await waitFor(() => expect(axios.post).toHaveBeenCalledWith('http://localhost:8000/login', { username: 'testuser', password: 'testpassword' }));
        expect(navigate).toHaveBeenCalledWith('/dashboard');
    });

    test('should display error message on invalid login', async () => {
        axios.post.mockRejectedValueOnce({ response: { status: 401 } });

        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'wrongpassword' } });

        fireEvent.click(screen.getByRole('button', { name: /Sign in to your account/i }));

        await waitFor(() => expect(screen.getByText(/Invalid credentials. Please try again./i)).toBeInTheDocument());
    });

    test('should display a generic error message on other errors', async () => {
        axios.post.mockRejectedValueOnce(new Error('Network Error'));

        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'testpassword' } });

        fireEvent.click(screen.getByRole('button', { name: /Sign in to your account/i }));

        await waitFor(() => expect(screen.getByText(/An error occurred. Please try again later./i)).toBeInTheDocument());
    });
});
