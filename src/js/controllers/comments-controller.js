import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import chatWidget from './../views/widget';
import commentsService from './../services/comments-service';
const objCommentsService = new commentsService();
const objChatWidget = new chatWidget();

$(function () {
    $(document).on("click", "#btnAddComment", () => {
        let repoName = $("#selectRepo option:selected").val();
        let issueId = $("#selectIssue option:selected").val();
        let comments = $("#addCommentText").val();

        objCommentsService.addComment(repoName, issueId, comments)
            .then(function (resp) {
                $("#updateIssue input").val("");
                $("#updateIssue").modal("hide");                
                objChatWidget.createBotWidget(`Comment has been added successfully!!!`);
            });
    });

    $(document).on("change", "#selectIssue", () => {
        let $selectedOption = $(this).find("option:selected");

        $("#commentText").val($selectedOption.attr("body"));
        if ($selectedOption.attr("state") != "open") {
            $("#issueState").prop("disabled", "disabled").prop("checked", true);
        }
        else {
            $("#issueState").prop("disabled", false).prop("checked", false);
        }

        if (!$("#divlastCommentText").hasClass("d-none")) {
            if (Number($selectedOption.attr("commentcount")) != 0) {
                objCommentsService.getLastComment($("#selectRepo").val(),
                    $selectedOption.attr("commentcount")).then(function (resp) {
                        let objComment = resp[resp.length - 1];
                        let lastCommentText = `${objComment.body} &#10; &#10;Last Updated:${objComment.updated_at}`;
                        $("#lastCommentText").html(lastCommentText);
                    });
            }
            else {
                $("#lastCommentText").val("No Comments available");
            }
        }
    });
});