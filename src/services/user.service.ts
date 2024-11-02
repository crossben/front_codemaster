import { api } from "@/environments/api";
// import { auth } from "@/firebase/config";
import { AxiosResponse } from "axios";
// import { ConfirmationResult, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup, UserCredential } from "firebase/auth";

/**
 * User Authentication and Management Service
 * 
 * This module provides functions for user authentication, registration, and management.
 * It uses Firebase for Google and phone number authentication, and a custom API for other operations.
 */

/**
 * Initiates Google Sign-In process
 * @returns {Promise} A promise that resolves with the sign-in result
 */
// export const signInWithGoogleFn = (): Promise<UserCredential> => {
//     try {
//         const provider = new GoogleAuthProvider();
//         return signInWithPopup(auth, provider);
//     } catch (error) {
//         console.error("Error signing in with Google:", error);
//         throw error;
//     }
// }

/**
 * Initiates Phone Number Sign-In process
 * @param {string} phoneNumber - The user's phone number
 * @param {RecaptchaVerifier} appVerifier - The reCAPTCHA verifier instance
 * @returns {Promise} A promise that resolves with the sign-in result
 */
// export const signInWithPhoneNumberFn = (phoneNumber: string, appVerifier: RecaptchaVerifier): Promise<ConfirmationResult> => {
//     try {
//         return signInWithPhoneNumber(auth, phoneNumber, appVerifier);
//     } catch (error) {
//         console.error("Error signing in with phone number:", error);
//         throw error;
//     }
// }

/**
 * Registers a new user
 * @param {string} firstname - User's last name
 * @param {string} lastname - User's first name
 * @param {string} email - User's email address
 * @param {string} phoneNumber - User's phone number
 * @param {string} password - User's password
 * @returns {Promise} A promise that resolves with the registration result
 */
export const signInFn = (firstname: string, lastname: string, email: string, phoneNumber: any, password: string, profileImageUrl : any): Promise<AxiosResponse<any, any>> => {
    try {
        return api.post('/user/register-api', { firstname, lastname, email, phoneNumber, password, profileImageUrl });
    } catch (error) {
        console.error("Error signing in:", error);
        throw error;
    }
}

/**
 * Logs in an existing user
 * @param {string} email - User's email address
 * @param {string} password - User's password
 * @returns {Promise} A promise that resolves with the login result
 */
export const loginFn = (email: string, password: string): Promise<AxiosResponse<any, any>> => {
    try {
        return api.post('/user/login-api', { email, password });
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

/**
 * Logs out the current user
 * @returns {Promise} A promise that resolves when the logout is complete
 */
export const logoutFn = (): Promise<AxiosResponse<any, any>> => {
    try {
        return api.post('/users/logout');
    } catch (error) {
        console.error("Error logging out:", error);
        throw error;
    }
}

/**
 * Retrieves user data
 * @param {any} id - The user's ID
 * @returns {Promise} A promise that resolves with the user data
 */
export const getUserDataFn = (id: any): Promise<AxiosResponse<any, any>> => {
    try {
        return api.get(`/user/id/${id}`);
    } catch (error) {
        console.error("Error getting user data:", error);
        throw error;
    }
}
export const getUsers = (): Promise<AxiosResponse<any, any>> => {
    try {
        return api.get(`/user/`);
    } catch (error) {
        console.error("Error getting user data:", error);
        throw error;
    }
}

/**
 * Updates user data
 * @param {any} id - The user's ID
 * @param {string} firstname - User's last name
 * @param {string} lastname - User's first name
 * @param {string} email - User's email address
 * @param {string} phoneNumber - User's phone number
 * @returns {Promise} A promise that resolves with the updated user data
 */
export const updateUserDataFn = (id: any, firstname: string, lastname: string, email: string, phoneNumber: string): Promise<AxiosResponse<any, any>> => {
    try {
        return api.put(`/user/${id}`, { firstname, lastname, email, phoneNumber });
    } catch (error) {
        console.error("Error updating user data:", error);
        throw error;
    }
}

/**
 * Deletes a user account
 * @param {any} id - The user's ID
 * @returns {Promise} A promise that resolves when the deletion is complete
 */
export const deleteUserDataFn = (id: any): Promise<AxiosResponse<any, any>> => {
    try {
        return api.delete(`/user/${id}`);
    } catch (error) {
        console.error("Error deleting user data:", error);
        throw error;
    }
}
