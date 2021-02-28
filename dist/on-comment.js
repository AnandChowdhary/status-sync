"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onIssueComment = void 0;
const parser_1 = require("./helpers/parser");
const slack_1 = require("./integrations/slack");
const onIssueComment = async ({ context, octokit, }) => {
    const oneHourAgo = new Date();
    oneHourAgo.setHours(oneHourAgo.getHours() - 1);
    const { data } = await octokit.issues.listComments({
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: context.issue.number,
        since: oneHourAgo.toISOString(),
    });
    const lastComment = data.pop();
    if (!lastComment || !lastComment.body)
        return;
    const result = parser_1.parseComment(lastComment.body);
    for await (const helper of [slack_1.updateSlackStatus]) {
        await helper(result);
    }
};
exports.onIssueComment = onIssueComment;
//# sourceMappingURL=on-comment.js.map