import axios from "axios"
import { IUser } from "../types/user"

export const getAllUsers = async ():Promise<IUser[]> => {
    const {data} = await axios.get<IUser[]>('http://localhost:8000/')
    return data
}

export const getOneUser = async (id:number | null):Promise<IUser> => {
    const {data} = await axios.get<IUser[]>('http://localhost:8000/')
    const users = await data.filter((user, userId)=> userId===id)
    return users[0]
}

export const getSearchUser = async (name:string):Promise<IUser[]> => {
    const {data} = await axios.get<IUser[]>('http://localhost:8000/')
    const users = await data.filter((user)=> user.name.includes(name))
    return users
}