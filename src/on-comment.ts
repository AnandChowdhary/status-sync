import type { Context } from "@actions/github/lib/context";
import type { GitHub } from "@actions/github/lib/utils";
import { unemojify } from "node-emoji";

export const onIssueComment = async ({
  context,
  octokit,
}: {
  context: Context;
  octokit: InstanceType<typeof GitHub>;
}) => {
  const oneHourAgo = new Date();
  oneHourAgo.setHours(oneHourAgo.getHours() - 1);

  const { data } = await octokit.issues.listComments({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.issue.number,
    since: oneHourAgo.toISOString(),
  });
  const lastComment = data.pop();
  if (!lastComment || !lastComment.body) return;

  const body = unemojify(lastComment.body);
  const emoji = body.search(/:[^:\s]*(?:::[^:\s]*)*:/);
};
