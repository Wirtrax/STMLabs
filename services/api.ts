import type { IUser } from '../types/user'
import { request } from './utils/api'
import { useDate } from '../hooks/useDate'

export interface ITransformedUser {
    name: string;
    picture: string;
    mediumPicture: string,
    location: string;
    email: string;
    phone: string;
    registeredDate: string;
}

interface IApiResponse {
    results: IUser[];
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
    };
}

export const getUsers = async (): Promise<{
    success: boolean;
    users: ITransformedUser[];
}> => {
    try {
        const data = await request<IApiResponse>('/?results=15', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const transformedUsers: ITransformedUser[] = data.results.map(user => ({
            picture: user.picture.thumbnail,
            mediumPicture: user.picture.medium,
            name: `${user.name.first} ${user.name.last}`,
            location: `${user.location.state}, ${user.location.city}`,
            email: user.email,
            phone: user.phone,
            registeredDate: useDate(user.registered.date)
        }));

        return {
            success: true,
            users: transformedUsers,

        };
    } catch (error) {
        return {
            success: false,
            users: []
        };
    }
};