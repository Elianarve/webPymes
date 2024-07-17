import axios from 'axios';

const Api_URL = 'http://localhost:3000/api/news';

export const getNews = async () => {
    try {
        const response = await axios.get(Api_URL);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
    }

export const createNews = async (news) => {
    try {
        const response = await axios.post(Api_URL, news);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export const deleteNews = async (id) => {
    try {
        const response = await axios.delete(`${Api_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export const updateNews = async (id, news) => {
    try {
        const response = await axios.put(`${Api_URL}/${id}`, news);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export const getNewsById = async (id) => {
    try {
        const response = await axios.get(`${Api_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
}