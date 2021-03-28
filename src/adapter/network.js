import axios from "axios";

class bugClient {
  constructor() {
    this.client = axios.create({
      baseURL: "http://35.239.253.67:5000/",
    });
  }

  async authUser() {
    try {
      const result = await this.client.get("users");
      return result;
    } catch (e) {
      console.log("error" + e);
    }
  }

  async createUsers() {
    try {
      const result = await this.client.post("users");
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

  async getMarkets() {
    try {
      const result = await this.client.post(`markets`);
      return result;
    } catch (err) {
      console.error(err.message);
    }
  }
}

const bugClientInstance = new bugClient();

export default bugClientInstance;
