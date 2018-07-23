const rootUrl = "https://api.github.com/";

import commonServices from './common-service';
const objCommonServices = new commonServices();

export default class issueService {
    constructor() { }
   
    createIssue(title, comment, issueRepoName) {
        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": `token ${sessionStorage.getItem("token")}`,
            "User-Agent": `${title}`
        });

        let data = {
            title: `${title}`,
            body: `${comment}`
        };

        return objCommonServices.postData(`${rootUrl}repos/${sessionStorage.getItem("userName")}/${issueRepoName}/issues`,
            header, data);
    }
   
    getIssues (repoName) {
        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": `token ${sessionStorage.getItem("token")}`,
        });
        let url = `${rootUrl}repos/${sessionStorage.getItem("userName")}/${repoName}/issues`;
       
        return objCommonServices.getData(url,header); 
    }
  
    updateIssue (repoName, issueId, issueBody, issueTitle, state) {
        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": `token ${sessionStorage.getItem("token")}`
        });
        let data = {
            title: `${issueTitle}`,
            body: `${issueBody}`,
            state: `${state}`
        };

        return objCommonServices.patchData(`${rootUrl}repos/${sessionStorage.getItem("userName")}/${repoName}/issues/${issueId}`,
            header, data);
    }  
}