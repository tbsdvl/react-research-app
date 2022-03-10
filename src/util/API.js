import axios from 'axios';

// Export API methods
export default {

    getResults: async (q = null) => {
        return axios.get(`https://scholar.google.com/scholar?q=${q}}`);
    }
};