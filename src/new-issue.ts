import type { Context } from "@actions/github/lib/context";
import type { GitHub } from "@actions/github/lib/utils";

export const onNewIssue = async ({
  context,
  octokit,
}: {
  context: Context;
  octokit: InstanceType<typeof GitHub>;
}) => {
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
