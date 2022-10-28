import axios from 'axios';
import { useDataStore } from '../stores/counter';
import * as config from '../../env_config';

const API_URL = config.default.API_URL;
console.log(API_URL);

class DataService {
    async getHome() {
        const response = await axios.get(API_URL + '/');
        console.log(response.data);
        useDataStore().data = response.data;
    }
}

export default new DataService();