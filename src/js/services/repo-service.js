const rootUrl = "https://api.github.com/";

import commonServices from './common-service';
const objCommonServices = new commonServices();

export default class repoService {
    constructor() { }
    createRepo (repoName, isPrivate, description) {
        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": `token ${sessionStorage.getItem("token")}`,
            "User-Agent": `${repoName}`
        });

        let data = {
            name: `${repoName}`,
            description: `${description}`,
            homepage: "https://github.com",
            private: false
        };

        return objCommonServices.postData(`${rootUrl}user/repos`, header, data);
    }  
  
    getRepositories() {
        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": `token ${sessionStorage.getItem("token")}`,
        });
        let url = `${rootUrl}users/${sessionStorage.getItem("userName")}/repos`;
       
        return objCommonServices.getData(url,header);
    } 
}