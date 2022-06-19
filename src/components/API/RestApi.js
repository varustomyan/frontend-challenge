export default class RestApi {
  static async getCats(page) {
    return fetch(
      `https://api.thecatapi.com/v1/images/search?mime_types=jpg,png&page=${page}&limit=15&order=Asc&size=med`,
      {
        headers: {
          "x-api-key": process.env.REACT_APP_API_KEY,
          "Content-Type": "application/json",
        },
        redirect: "follow",
      }
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }
}
