import axios from 'axios';

// Export API methods
export default {
// test
    getResults: async (q = null) => {
        return axios.get(`https://api.dp.la/v2/items?q=${q}&api_key=fa052df87aa5de7a30a9eb0353d0affc`);
    }
};