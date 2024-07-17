import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const registerUser = async (name, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { name, email, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
    };

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const logoutUser = () => {
    localStorage.removeItem('authToken');
};

export const getUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/user`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const updateUser = async (name, email) => {
    try {
        const response = await axios.put(
            `${API_URL}/user`,
            { name, email },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const updatePassword = async (password) => {
    try {
        const response = await axios.put(
            `${API_URL}/password`,
            { password },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const deleteUser = async () => {
    try {
        const response = await axios.delete(`${API_URL}/user`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};