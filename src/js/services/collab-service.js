const rootUrl = "https://api.github.com/";

import commonServices from './common-service';
const objCommonServices = new commonServices();

export default class collabServices {
    constructor() { } 
   
    addCollab (collabUserName, collabRepoName, permission) {
        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": `token ${sessionStorage.getItem("token")}`,
            "User-Agent": `${title}`
        });
        return objCommonServices.putData(`${rootUrl}repos/${sessionStorage.getItem("userName")}/${collabRepoName}/collaborators/${collabUserName}?permission=${permission}`,
            header);
    }
}