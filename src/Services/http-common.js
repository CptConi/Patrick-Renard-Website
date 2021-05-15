import axios from 'axios';

export default axios.create({
    // baseURL: 'http://15.237.23.153:3001/files',
    baseURL: 'http://localhost:3001/files',
    headers: {
        'Content-type': 'application/json',
    },
});
