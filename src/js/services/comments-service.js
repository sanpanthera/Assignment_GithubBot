const rootUrl = "https://api.github.com/";

import commonServices from './common-service';
const objCommonServices = new commonServices();

export default class commentsService {
    constructor() { }
   
    getLastComment (repoName, commentId) {
        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": `token ${sessionStorage.getItem("token")}`,
        });
        let url = `${rootUrl}repos/${sessionStorage.getItem("userName")}/${repoName}/issues/comments`;

       return objCommonServices.getData(url,header);     
    }

    addComment (repoName, issueId, comments) {
        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": `token ${sessionStorage.getItem("token")}`
        });
        let data = {
            body: `${comments}`
        };
        return objCommonServices.postData(`${rootUrl}repos/${sessionStorage.getItem("userName")}/${repoName}/issues/${issueId}/comments`,
            header, data);
    } 
}