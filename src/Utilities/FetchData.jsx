import axios from 'axios';

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_API_HOST,
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/${url}`, options);

    return data;
};
