import { checkResponse } from "./responseChek";

const API_URL = 'https://randomuser.me/api';

export const request = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    const res = await fetch(`${API_URL}${endpoint}`, options);
    return checkResponse(res);
};