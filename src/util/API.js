import axios from 'axios';

// Export API methods
export default {

    getResults: async (q = null) => {
        return axios.get(`https://serpapi.com/search.json?engine=google_scholar?q=${q}&api_key=012c5e9936708f7bb8bfc559a890a5ddc15133a1e8a8fa3285e4bd7f057052a2`);
    }
};