import { debug, getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";
import { onNewIssue } from "./new-issue";
import { onIssueComment } from "./on-comment";

const token =
  getInput("token") || process.env.GH_PAT || process.env.GITHUB_TOKEN;

export const run = async () => {
  const COMMAND = getInput("command");
  debug(`Got command: ${COMMAND}`);
  if (!COMMAND) throw new Error("Command not found");
  if (!token) throw new Error("GitHub token not found");

  const octokit = getOctokit(token);
  if (COMMAND === "onIssueComment") return onIssueComment({ context, octokit });
  if (COMMAND === "onNewIssue") return onNewIssue({ context, octokit });
  throw new Error("Command not recognized");
};

run()
  .then(() => {})
  .catch((error) => {
    console.error("ERROR", error);
    setFailed(error.message);
  });
