import axios from "axios";

/**
 * API Configuration
 * 
 * This file sets up an Axios instance for making API requests.
 * It includes interceptors for request and response handling.
 */

/**
 * Create an Axios instance with predefined configuration
 */
export const api = axios.create({
    baseURL: "http://localhost:4000/api",  // Base URL for all requests
    withCredentials: true,  // Allows sending cookies from the browser
});

/**
 * Request Interceptor
 * 
 * This interceptor runs before every request is sent.
 * It's used here to add an authorization header to each request.
 */
api.interceptors.request.use(
    (config) => {
        // Add authorization header using token from localStorage
        config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        return config;
    },
    (error) => {
        // If there's an error setting up the request
        return Promise.reject(error);
    }
);

/**
 * Response Interceptor
 * 
 * This interceptor runs after every response is received.
 * It's used here to handle specific error scenarios, like unauthorized access.
 */
api.interceptors.response.use(
    (response) => {
        // Pass through all successful responses
        return response;
    },
    (error) => {
        // Handle unauthorized access (HTTP 401)
        if (error.response.status === 401) {
            // Redirect to login page
            window.location.href = '/login';
        }
        // Log all errors to console
        console.log(error);
        // Reject the promise to propagate the error
        return Promise.reject(error);
    }
);
