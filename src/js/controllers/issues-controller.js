import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import issueService from './../services/issues-service';
import chatWidget from './../views/widget';

const objIssueService = new issueService();
const objChatWidget = new chatWidget();

$(function () {

    $(document).on("click", "#btnCreateIssue", () => {

        let title = $("#title").val();
        let comment = $("#comment").val();
        let issueRepoName = $("#issueRepoName").val();
        objIssueService.createIssue(title, comment, issueRepoName)
            .then(function (resp) {
                $("#createIssue").modal("hide");
                $("#dashBoard").addClass("row mx-0");
                objChatWidget.createBotWidget(`Issue Name- ${resp.title} <br> Issue Created`);
            });
    });


    $(document).on("click", "#btnEditIssue", () => {

        let repoName = $("#selectRepo option:selected").val();
        let $selectedIssueOption = $("#selectIssue option:selected")
        let issueId = $selectedIssueOption.val();
        let issueBody = $selectedIssueOption.attr("body");
        let issueTitle = $selectedIssueOption.text();
        let state = "open";
        if ($("#issueState:checked")) { state = "closed"; }

        objIssueService.updateIssue(repoName, issueId, issueBody, issueTitle, state)
            .then(function (resp) {
                $("#updateIssue").modal("hide");
                $("#msg").text("Issue has been updated.");
                objChatWidget.createBotWidget(`Issue Name- ${resp.title} has been Updated.`);
            });
    });
    $(document).on("change", "#selectRepo", () => {
        $("#selectIssue").html("");
        addOptions($("#selectIssue"), "Select an issue");
        objIssueService.getIssues($(this).find(":selected").val()).then(function (resp) {
            let repoSelect = document.getElementById("selectIssue");
            resp.forEach((item) => {
                let o = document.createElement("option");
                o.text = item.title;
                o.value = item.number;

                let attrBody = document.createAttribute("body");
                attrBody.value = item.body;
                o.setAttributeNode(attrBody);

                let attrCommentCount = document.createAttribute("commentcount");
                attrCommentCount.value = item.comments;
                o.setAttributeNode(attrCommentCount);

                let attrState = document.createAttribute("state");
                attrState.value = item.state;
                o.setAttributeNode(attrState);

                repoSelect.appendChild(o);

            });
        });
    });
});

function addOptions(elem, text) {
    let o = document.createElement("option");
    o.text = text;
    o.value = text;
    elem[0].appendChild(o);
}