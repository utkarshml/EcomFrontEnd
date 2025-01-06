import axios, { AxiosInstance, AxiosRequestHeaders, AxiosResponse } from "axios";

// Create an Axios instance
export const axiosInstance: AxiosInstance = axios.create({});

// Define the type for the body data
type Body = Record<string, any> | null;

// API connector function
export const apiConnector = async (
    method: "GET" | "POST" | "PUT" | "DELETE", // Restrict method types
    url: string,
    bodyData?: Body,
    headers?: AxiosRequestHeaders,
    params?: Record<string, any>
): Promise<AxiosResponse> => {
    try {
        const response = await axiosInstance({
            method: method,
            url: url,
            data: bodyData || null,
            headers: headers || undefined,
            params: params || undefined,
        });
        return response;
    } catch (error: any) {
        console.error("Error in API call:", error.response?.data || error.message);
        throw error;
    }
};
