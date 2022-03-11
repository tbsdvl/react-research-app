import axios from 'axios';
import { AccordionCollapse } from 'react-bootstrap';

// Export API methods
export default {
// test
    getResults: async (q = null) => {
        return axios.get(`https://tcb-gutenberg-api.herokuapp.com/search/${q}`);
    },
    createArchive: async (archive) => {
        return axios.post(`https://tcb-archives.herokuapp.com/archive`, archive);
    },
    getArchives: async () => {
        return axios.get('http://tcb-archives.herokuapp.com/archive');
    },
    saveToArchive: async (article, archive) => {
        const articleData = {
            archiveId: archive.archiveId,
            title: article.title,
            link: article.url,
            snippet: article.as_html,
            summary: article.bookshelves
        };

        return axios.post('http://tcb-archives.herokuapp.com/article', articleData);
    }
};