'use-strict';

import common from './common';

const objCommon = new common();

export default class repoTemplate {
    constructor() { }
    
    createRepositoryTemplate() {
        const widget = document.getElementById('modalContainer');

        let html = `<div class="modal fade" id="createRepo" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="createRepo" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Create Repository</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">

                        <label for="repoName" class="col-form-label">Repository Name:</label>
                        <input type="text" class="form-control" id="repoName">

                        <label for="description" class="col-form-label">Description:</label>
                        <input type="text" class="form-control" id="description">

                        <div class="form-checkbox">
                            <label>
                                <input type="radio" disabled value="false" checked="checked" name="repository[public]" id="repository_public_true"> Public
                            </label>
                            <svg height="32" class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="24" aria-hidden="true">
                                <path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path>
                            </svg>
                            <span class="note">
                                Anyone can see this repository. You choose who can commit.
                            </span>
                        </div>
                        <div class="form-checkbox">
                            <label>
                                <input type="radio" disabled value="true" name="repository[public]" id="repository_public_false"> Private
                            </label>
                            <svg height="32" class="octicon octicon-lock" viewBox="0 0 12 16" version="1.1" width="24" aria-hidden="true">
                                <path fill-rule="evenodd" d="M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z"></path>
                            </svg>
                            <span class="note">
                                You choose who can see and commit to this repository.
                            </span>
                        </div>

                    </div>

                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="btnCreateRepo">Create</button>
            </div>
        </div>
    </div>
</div>`;
        const repo = objCommon.createHTMLElement(html);
        widget.appendChild(repo);
    }
}