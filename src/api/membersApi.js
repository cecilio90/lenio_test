import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.propublica.org/congress/v1/',
    headers: {'X-API-Key': 'tdeDCaOQKlbSemFOyXliYxifeiohd3MI4D1cheVK'}
});
