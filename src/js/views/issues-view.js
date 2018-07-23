'use-strict';

import common from './common';

const objCommon = new common();

export default class issueTemplate {
    constructor() { }
    
    createIssueTemplate() {
        const widget = document.getElementById('modalContainer');

        let html = ` <div class="modal fade" id="createIssue" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="createIssue"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Create Issue</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="title" class="col-form-label">Title:</label>
                            <input type="text" class="form-control" id="title">

                            <label for="issueRepoName" class="col-form-label">Repository Name:</label>
                            <input type="text" class="form-control" id="issueRepoName">

                            <label for="repoName" class="col-form-label">Comment:</label>
                            <textarea class="form-control" rows="5" id="comment" placeholder="Leave a comment"></textarea>
                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="btnCreateIssue">Create</button>
                </div>
            </div>
        </div>
    </div>`;
        const repo = objCommon.createHTMLElement(html);
        widget.appendChild(repo);
    }

    updateIssueTemplate() {
        const widget = document.getElementById('modalContainer');
        let html = `<div class="modal fade" id="updateIssue" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="updateIssue"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="updateIssueModal">some Text</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="selectRepo" class="col-form-label">Repository Name:</label>
                            <select id="selectRepo" class="form-control">
                                <option>Select a repository</option>
                            </select>
                            <label for="selectIssue" class="col-form-label">Issue Name:</label>
                            <select id="selectIssue" class="form-control">
                                <option>Select an issue</option>
                            </select>
                            <div class="form-checkbox d-none" id="divIssueState">
                                <label>
                                    <input type="radio" value="closed" name="state" id="issueState"> Close this issue
                                </label>
                            </div>

                            <div id="divCommentText" class="d-none">
                                <label for="commentText" class="col-form-label">Comment:</label>
                                <textarea class="form-control" rows="5" id="commentText"></textarea>
                            </div>

                            <div id="divlastCommentText" class="d-none">
                                <label for="lastCommentText" class="col-form-label">Last Comment:</label>
                                <textarea class="form-control" disabled rows="5" id="lastCommentText"></textarea>
                            </div>

                            <div id="divAddCommentText" class="d-none">
                                <label for="addCommentText" class="col-form-label">Add Comment:</label>
                                <textarea class="form-control" rows="5" id="addCommentText"></textarea>
                            </div>

                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary d-none" id="btnEditIssue">Update Issue</button>
                    <button type="button" class="btn btn-primary d-none" id="btnAddComment">Add Comment Issue</button>
                </div>
            </div>
        </div>
    </div>`;
        const repo = objCommon.createHTMLElement(html);
        widget.appendChild(repo);
    }


}