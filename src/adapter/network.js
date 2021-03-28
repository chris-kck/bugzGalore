import axios from 'axios';

class bugClient{
    constructor (){
        this.client = axios.create({
            baseURL: 'https://bugzbe.herokuapp.com/'
        });
    }

    async authUser() {
        try {
            const result = await this.client.get('users');
            return result;
        } catch (e) {
            console.log("error" + e);
        }
    }

    async createUsers() {
        try {
            const result = await this.client.post('users');
            return result;
        } catch (e) {
            console.log("error" + e);
        }
    }

    async getData(data) {
        try {
            const result = await this.client.post(`users/${data}`);
            return result;
        } catch (e) {
            console.log("error" + e);
        }
    }

}

const bugClientInstance = new bugClient();
export default bugClientInstance;
