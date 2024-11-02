import { api } from "@/environments/api";
import { AxiosResponse } from "axios";

export const getCourses = (): Promise<AxiosResponse<any, any>> => {
    try {
        return api.get('/course');
    } catch (error) {
        console.error("Error getting courses:", error);
        throw error;
    }
}

export const getCourseByIdFn = (id: string): Promise<AxiosResponse<any, any>> => {
    try {
        return api.get(`/courses/${id}`);
    } catch (error) {
        console.error("Error getting course by id:", error);
        throw error;
    }
}


