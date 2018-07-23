import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import recastService from './../services/recast-service';
import repoService from './../services/repo-service';
import repoTemplate from './../views/repo-view';
import issueTemplate from './../views/issues-view';
import collabTemplate from './../views/collab-view';
import chatWidget from './../views/widget';

const objRecastService = new recastService();
const objRepoService = new repoService();
const objRepoTemplate = new repoTemplate();
const objIssueTemplate = new issueTemplate();
const objCollabTemplate = new collabTemplate();
const objChatWidget = new chatWidget();

$(function () {
    $("#btnCommand").on("click", () => {
        let commandText = $("#txtCommand").val();
        objChatWidget.createUserWidget(commandText);
        $("#txtCommand").val("");
        if (commandText !== '') {
            let result = objRecastService.recast(commandText);            
            result.then(function (resp) {
                let repoName = " ";
                if (resp.results.entities.git_repo !== undefined) {
                    repoName = resp.results.entities.git_repo[0].value;
                }

                if (resp.results.intents[0] !== undefined) {
                    showPopup(resp.results.intents[0].slug,
                        resp.results.intents[0].confidence, repoName);
                }
                else {
                    $("#txtCommand").focus();
                    $("#fail-alert").fadeTo(2000, 500).slideUp(500, function () {
                        $("#success-alert").slideUp(500);
                    });
                }
            });
        }
    });

    $("#txtCommand").on("keydown", function (e) {
        if (e.keyCode == '13')
            $("#btnCommand").click();
    });

});

export function showPopup(slug, confidence, repoName) {
    let accuracy = Number(confidence) * 100;
    let commandName = (accuracy !== 0) ? slug : "invalid";

    switch (commandName) {
        case "createrepo": {
            if (repoName !== undefined || repoName !== "") {
                $("#repoName").val(repoName);
            }
            objRepoTemplate.createRepositoryTemplate();
            $("#createRepo").modal();
            break;
        }
        case "createissue":
            objIssueTemplate.createIssueTemplate();
            $("#createIssue").modal();
            break;

        case "addcollab": {
            objCollabTemplate.addCollabTemplate();
            $("#addCollab").modal();
            break;
        }

        case "updateissue": {
            objRepoService.getRepositories().then(function (resp) {
                let repoNames = resp.filter(a => a.open_issues != 0);
                objIssueTemplate.updateIssueTemplate();
                let repoSelect = document.getElementById("selectRepo");
                repoNames.forEach((item) => {
                    var o = document.createElement("option");
                    o.text = item.name;
                    o.value = item.name;
                    repoSelect.appendChild(o);
                });
                $("#btnEditIssue, #divIssueState, #divCommentText").removeClass("d-none");
                $("#divlastCommentText,#divAddCommentText,#btnAddComment").addClass("d-none");
                $("#updateIssueModal").text("Update Issue");
                $("#updateIssue").modal();
            });           
            break;
        }

        case "displaylastcomment": {
            objRepoService.getRepositories().then(function (resp) {
                let repoNames = resp.filter(a => a.open_issues != 0);
                objIssueTemplate.updateIssueTemplate();
                let repoSelect = document.getElementById("selectRepo");
                repoNames.forEach((item) => {
                    var o = document.createElement("option");
                    o.text = item.name;
                    o.value = item.name;
                    repoSelect.appendChild(o);
                });
                $("#divlastCommentText").removeClass("d-none");
                $("#btnEditIssue, #btnAddComment,#divIssueState, #divCommentText,#divAddCommentText").addClass("d-none");
                $("#updateIssueModal").text("Show last comment");    
                $("#updateIssue").modal();
            });
            
            break;
        }
        case "addissuecomment": {
            objRepoService.getRepositories().then(function (resp) {
                let repoNames = resp.filter(a => a.open_issues != 0);
                objIssueTemplate.updateIssueTemplate();
                let repoSelect = document.getElementById("selectRepo");
                repoNames.forEach((item) => {
                    var o = document.createElement("option");
                    o.text = item.name;
                    o.value = item.name;
                    repoSelect.appendChild(o);
                });
                $("#btnEditIssue, #divIssueState, #divCommentText,#divlastCommentText").addClass("d-none");
                $("#divAddCommentText, #btnAddComment").removeClass("d-none");
                $("#updateIssueModal").text("Add a new comment");   
                $("#updateIssue").modal();
            });
            
            break;
        }

        default: {
            $("#txtCommand").focus();
            $("#fail-alert").fadeTo(2000, 500).slideUp(500, function () {
                $("#success-alert").slideUp(500);
            });
        }
    }
}