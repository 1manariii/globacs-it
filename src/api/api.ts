import axios from "axios"
import { IUser } from "../types/user"

interface IProps {
    name?: string;
    id?: number;
}

export const getAllUsers = async ({ name, id }: IProps): Promise<IUser[] | IUser | null> => {
    try {
        const { data } = await axios.get<IUser[]>('http://localhost:8000/');

        if (id !== undefined) {
            const user = data.find((user, userId) => userId === id);
            return user || null;
        }

        if (name !== undefined) {
            const users = data.filter((user) => user.name.includes(name));
            return users; 
        }

        return data;
    } catch (error) {
        console.error('Ошибка при получении пользователей:', error);
        throw error; 
    }
};