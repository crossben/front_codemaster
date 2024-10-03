import { api } from "@/environments/api";
import { AxiosResponse } from "axios";

export const addToCartFn = (productId: string, userId: string): Promise<AxiosResponse<any, any>> => {
    try {
        return api.post(`/cart/${userId}/add/${productId}`);
    } catch (error) {
        console.error("Error adding to cart:", error);
        throw error;
    }
}

export const getCartFn = (userId: string): Promise<AxiosResponse<any, any>> => {
    try {
        return api.get(`/cart/${userId}`);
    } catch (error) {
        console.error("Error getting cart:", error);
        throw error;
    }
}

export const removeFromCartFn = (productId: string, userId: string): Promise<AxiosResponse<any, any>> => {
    try {
        return api.delete(`/cart/${userId}/remove/${productId}`);
    } catch (error) {
        console.error("Error removing from cart:", error);
        throw error;
    }
}

export const buyCartFn = (userId: string): Promise<AxiosResponse<any, any>> => {
    try {
        return api.post(`/cart/${userId}/buy`);
    } catch (error) {
        console.error("Error buying cart:", error);
        throw error;
    }
}

