import { axios } from 'axios';

export default class PostService{

    static async getCats() {

            // fetch('https://api.nomoreparties.co/todays-tips-rus').then((res) => {
            //   return res.json();
            // }).then((res) => {
            //   console.log(Object.values(res));  
            // })

        return fetch("https://api.thecatapi.com/v1/images/search?mime_types=jpg,png&limit=15&order=Rand&size=med", {
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