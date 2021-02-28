"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onNewIssue = void 0;
const onNewIssue = async ({ context, octokit, }) => {
    await octokit.issues.addLabels({
        owner: context.issue.owner,
        repo: context.issue.repo,
        issue_number: context.issue.number,
        labels: ["status"],
    });
    await octokit.issues.lock({
        owner: context.issue.owner,
        repo: context.issue.repo,
        issue_number: context.issue.number,
    });
};
exports.onNewIssue = onNewIssue;
//# sourceMappingURL=new-issue.js.map