import {API_URL, API_KEY} from "../../config";

export default class GoodsService {
    async getResource() {
        const response = await fetch(API_URL, {
            // headers - заголовки для запросов GET
            headers: {
                'Authorization': API_KEY
            },
        });

        if (!response.ok){
            throw new Error(`Could not fetch ${API_URL}, received ${response.status}`);
        }

        return await response.json();
    }

    async getGoodsList() {
        return await this.getResource()
    }
}