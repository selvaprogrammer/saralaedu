import axios from 'axios';
import toast from 'react-hot-toast';

export const Appdispatch = (type: string, payload?: any, time?: any) => {
    if (payload) return { type: type, payload: payload, time: time };
    else return { type: type };
};
export const Appservice = async (method: string, url: string, data?: any): Promise<any> => {
    try {
        const response = await axios({
            method, url,
            params: method == "get" ? data : undefined,
            data: method != "get" ? data : undefined,
            responseType: url.includes('fsa') ? "blob" : "json",
        });
        return response;
    } catch (err: any) {
        showError(err);
        return Promise.reject(err);
    }
};
const showError = (error: any) => {
    const code = error?.response?.status;
    const errorData = error?.response?.data;
    console.log('errorData', errorData);
    switch (code) {
        case 400:
            return toast.error("The request was invalid");
        case 403:
            return toast.error("Forbidden");
        case 401:
            return toast.error("Token Expired");
        case 404:
            return toast.error("URL not found");
        case 500:
            return toast.error("Server error");
        default:
            return toast.error("Something went wrong");
    }
};