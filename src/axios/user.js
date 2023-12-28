import axios from 'axios';
import { BASE_URL } from '../utils/limitProducts';

export const createUser = async (nombre, email, password) => {
    try {
        const response = await axios.post (`${BASE_URL}/auth/register`, {
            nombre,
            email,
            password
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        return alert(error.response.data.errors[0].msg)
    }
}

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return alert(error.response.data.msg);
    }
}

export const verifyUser = async (email, code) => {
    try {
        const response = await axios.patch(`${BASE_URL}/auth/verify`, {
            email,
            code
        });
        console.log('Usuario Verificado');
        return response.data;
    } catch (error) {
        console.log(error);
        return alert(error.response.data.msg);
    }
};
