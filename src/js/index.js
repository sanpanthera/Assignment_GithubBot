
import '../scss/index.scss';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

$(function () {
    $("#success-alert").hide();
    $("#fail-alert").hide();
    $("#tokenModal").modal();

    $("#btnSave").on("click", () => {
        sessionStorage.setItem("token", $("#txtToken").val());
        sessionStorage.setItem("userName", $("#txtUserName").val());
        $("#tokenModal").modal("hide");
    });

    $(document).on('hidden.bs.modal','.modal', ()=> {
        $(this).find("input,select").val("");
        $(this).find("textarea").text("");
        $(this).find("[type='radio']").not("#repository_public_true").prop("checked", false);
        $(this).find("select option").not(":first").remove();        
        $('#modalContainer').html('');
        $("#txtCommand").val("").focus();
    });   
});