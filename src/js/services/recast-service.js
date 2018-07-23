export default class recastService {
    constructor() { }

    recast(keyword) {
        let data = { "text": `${keyword}`, "language": "en" };

        let header = new Headers({
            "Authorization": "Token 4e761c83b15b7d321b4fb0ef4b0e0ed0",
            "Content-Type": "application/json"
        });

        return fetch("https://api.recast.ai/v2/request", {
            method: "POST",
            headers: header,
            body: JSON.stringify(data)
        }).then(function (response) {
           return response.json();
        }).catch(function (error) {
            console.log("Request failure: ", error);
        });
    }
}