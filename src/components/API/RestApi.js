export default class RestApi{

    static async getCats(page) {

        return fetch(`https://api.thecatapi.com/v1/images/search?mime_types=jpg,png&page=${page}&limit=15&order=Asc&size=med`, {
            headers: {
                "x-api-key": "66b3ec38-2ef5-4770-8cf5-af389b5ac452",
                "Content-Type": "application/json"
            },
            redirect: 'follow'
        })
            .then(response => response.json())
            .catch(error => console.log('error', error));
    }
}