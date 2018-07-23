
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import repoService from './../services/repo-service';
import chatWidget from './../views/widget';

const objRepoService = new repoService();
const objChatWidget = new chatWidget();

$(function () {
    $(document).on("click", "#btnCreateRepo", () => {
        let repoName = $("#repoName").val();
        let description = $("#description").val();
        let privateRepo = $("input[name='repository[public]']:checked").val();
        objRepoService.createRepo(repoName, privateRepo, description)
            .then(function (resp) {
                $("#createRepo").modal("hide");
                $("#dashBoard").addClass("row mx-0");
                objChatWidget.createBotWidget(`Repository Name- ${resp.name} <br> Repository Created`);//.bs_info(`Repository Name- ${resp.name}`,
                //"Repository Created");
            });
    });
});
