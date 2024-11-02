import { api } from "@/environments/api";
// import { auth } from "@/firebase/config";
import { AxiosResponse } from "axios";
// import { ConfirmationResult, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup, UserCredential } from "firebase/auth";

/**
 * instructor Authentication and Management Service
 * 
 * This module provides functions for instructor authentication, registration, and management.
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
 * @param {string} phoneNumber - The instructor's phone number
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
 * Registers a new instructor
 * @param {string} firstname - instructor's last name
 * @param {string} lastname - instructor's first name
 * @param {string} email - instructor's email address
 * @param {string} phoneNumber - instructor's phone number
 * @param {string} password - instructor's password
 * @returns {Promise} A promise that resolves with the registration result
 */
export const signInFn = (firstname: string, lastname: string, email: string, phoneNumber: any, password: string, profileImageUrl: any): Promise<AxiosResponse<any, any>> => {
    try {
        return api.post('/instructor/register-api', { firstname, lastname, email, phoneNumber, password, profileImageUrl });
    } catch (error) {
        console.error("Error signing in:", error);
        throw error;
    }
}

/**
 * Logs in an existing instructor
 * @param {string} email - instructor's email address
 * @param {string} password - instructor's password
 * @returns {Promise} A promise that resolves with the login result
 */
export const loginFn = (email: string, password: string): Promise<AxiosResponse<any, any>> => {
    try {
        return api.post('/instructor/login-api', { email, password });
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

/**
 * Logs out the current instructor
 * @returns {Promise} A promise that resolves when the logout is complete
 */
export const logoutFn = (): Promise<AxiosResponse<any, any>> => {
    try {
        return api.post('/instructor/logout');
    } catch (error) {
        console.error("Error logging out:", error);
        throw error;
    }
}

/**
 * Retrieves instructor data
 * @param {any} id - The instructor's ID
 * @returns {Promise} A promise that resolves with the instructor data
 */
export const getInstructorDataFn = (id: any): Promise<AxiosResponse<any, any>> => {
    try {
        return api.get(`/instructor/id/${id}`);
    } catch (error) {
        console.error("Error getting instructor data:", error);
        throw error;
    }
}
export const getInstructors = (): Promise<AxiosResponse<any, any>> => {
    try {
        return api.get(`/instructor/`);
    } catch (error) {
        console.error("Error getting instructor data:", error);
        throw error;
    }
}

/**
 * Updates instructor data
 * @param {any} id - The instructor's ID
 * @param {string} nom - instructor's last name
 * @param {string} prenom - instructor's first name
 * @param {string} email - instructor's email address
 * @param {string} telephone - instructor's phone number
 * @returns {Promise} A promise that resolves with the updated instructor data
 */
export const updateInstructorDataFn = (id: any, nom: string, prenom: string, email: string, telephone: string): Promise<AxiosResponse<any, any>> => {
    try {
        return api.put(`/instructor/${id}`, { nom, prenom, email, telephone });
    } catch (error) {
        console.error("Error updating instructor data:", error);
        throw error;
    }
}

/**
 * Deletes a instructor account
 * @param {any} id - The instructor's ID
 * @returns {Promise} A promise that resolves when the deletion is complete
 */
export const deleteInstructorDataFn = (id: any): Promise<AxiosResponse<any, any>> => {
    try {
        return api.delete(`/instructor/${id}`);
    } catch (error) {
        console.error("Error deleting instructor data:", error);
        throw error;
    }
}
