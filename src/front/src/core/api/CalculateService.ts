import { dataType } from "../utils/utils";
import { loginType, usersType} from './api.types';

export const calculate = async (data: any): Promise<dataType | {detail: any[]}> => {
  const response = await fetch('http://127.0.0.1:8004/well_model/calc', {
    body: JSON.stringify(data),
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return await response.json()
}
export const getUsers = async ():Promise<usersType[]> => {

    const users = await fetch('http://127.0.0.1:8001/users')
    return users.json()
}

export const login = async (login: string, password: number):Promise<loginType> => {
    console.log('login')
    const body = {
        "email": login,
        "password": password
    }
    const users = await fetch(
        'http://127.0.0.1:8001/auth',
        {method: 'POST',  headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)})
    return users.json()
}

// export const getChat
