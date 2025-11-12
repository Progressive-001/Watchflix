import axios from "axios"

const api = axios.create({
    baseURL:  'https://api.themoviedb.org/3',
    params: {
        api_key: '03858a4709caa9506ba77cb561f9b589',
    },
});

export default api;
