import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import collabServices from './../services/collab-service';

const objCollabServices = new collabServices();

$(function () {
    $(document).on("click","#btnAddCollab", ()=> {  
        let collabUserName = $("#collabUserName").val();
        let collabRepoName = $("#collabRepoName").val();
        let permission = $("input[name='permission']:checked").val();        
        objCollabServices.addCollab(collabUserName, collabRepoName, permission).then(function (resp) {
            $("#addCollab").modal("hide");
            objChatWidget.createBotWidget(`Collaborator access invite has been sent.`);
        });
    });
});