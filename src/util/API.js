import axios from 'axios';

// Export API methods
export default {
// test
    getResults: async (q = null) => {
        return axios.get(`https://tcb-gutenberg-api.herokuapp.com/search/${q}`);
    }
};