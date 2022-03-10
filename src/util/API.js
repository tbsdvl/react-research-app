import axios from 'axios';

// Export API methods
export default {

    getResults: async (q = null) => {
        return axios.get(`https://serpapi.com/search.json?engine=google&q=${q}&api_key=${process.env.API_KEY}`);
    }
};