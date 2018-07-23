'use-strict';

import common from './common';

const objCommon = new common();

export default class collabTemplate {
    constructor() { }

    addCollabTemplate() {
        const widget = document.getElementById('modalContainer');

        let html = ` <div class="modal fade" id="addCollab" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="addCollab" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add a Collaborator</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="collabUserName" class="col-form-label">Collaborator User Name:</label>
                            <input type="text" class="form-control" id="collabUserName">

                            <label for="collabRepoName" class="col-form-label">Repository Name:</label>
                            <input type="text" class="form-control" id="collabRepoName">

                            <label class="col-form-label">Permission</label>
                            <div class="form-checkbox">
                                <label>
                                    <input type="radio" value="pull" name="permission" id="permission_pull"> Pull
                                </label>
                            </div>
                            <div class="form-checkbox">
                                <label>
                                    <input type="radio" value="push" name="permission" id="permission_push"> Push
                                </label>
                            </div>
                            <div class="form-checkbox">
                                <label>
                                    <input type="radio" value="admin" name="permission" id="permission_admin"> Admin
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="btnAddCollab">Add</button>
                </div>
            </div>
        </div>
    </div>`;
        const repo = objCommon.createHTMLElement(html);
        widget.appendChild(repo);
    }
}