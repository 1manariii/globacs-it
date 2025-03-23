import axios from "axios"
import { IUser } from "../types/user"

interface IProps {
    name?: string;
    id?: number;
}

export const getAllUsers = async ({ name, id }: IProps): Promise<IUser[] | IUser | null | string> => {
    try {
        const { data } = await axios.get<IUser[]>('http://localhost:8000/');

        if (id !== undefined) {
            const user = data.find((user, userId) => userId === id);
            return user || null;
        }

        if (name !== undefined) {
            const { data } = await axios.get<IUser[]>(`http://localhost:8000?term=${name}`);
            return data; 
        }

        return data;
    } catch (error:unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("Произошла неизвестная ошибка");
    }
};