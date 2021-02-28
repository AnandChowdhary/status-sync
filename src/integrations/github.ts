import { GitHubProfileStatus } from "github-profile-status";
import type { Status } from "../interfaces";

const profileStatus = new GitHubProfileStatus({
  token: process.env.GITHUB_TOKEN || "",
});

export const updateGitHubStatus = async (status: Status) => {
  await profileStatus.set({
    emoji: status.emoji as any,
    message: status.text,
  });
};
