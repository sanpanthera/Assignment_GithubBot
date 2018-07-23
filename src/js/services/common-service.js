export default class commonServices {    
    constructor() { }

    postData(url, header, data) {
        return fetch(url, {
            method: "POST",
            headers: header,
            body: JSON.stringify(data)
        }).then(function (response) {
            if (response.ok) {
               return response.json();
            }
        }).catch(function (error) {
            console.log("Request failure: ", error);
        });
    }

    patchData(url, header, data) {
        return fetch(url, {
            method: "PATCH",
            headers: header,
            body: JSON.stringify(data)
        }).then(function (response) {
            if (response.ok) {
              return response.json();
            }
        }).catch(function (error) {
            console.log("Request failure: ", error);
        });
    }

    putData(url, header) {
        return fetch(url, {
            method: "PUT",
            headers: header
        }).then(function (response) {
            if (response.ok) {
             return response.json();
            }
        }).catch(function (error) {
            console.log("Request failure: ", error);
        });
    }

    getData(url, header) {
        return fetch(url, {
            method: "GET",
            headers: header
        }).then(function (response) {
            if (response.ok) {
              return response.json();
            }
        }).catch(function (error) {
            console.log("Request failure: ", error);
        });
    }
}