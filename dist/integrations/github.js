"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGitHubStatus = void 0;
const github_profile_status_1 = require("github-profile-status");
const profileStatus = new github_profile_status_1.GitHubProfileStatus({
    token: process.env.GH_PAT || "",
});
const updateGitHubStatus = async (status) => {
    await profileStatus.set({
        emoji: status.emoji,
        message: status.text,
    });
};
exports.updateGitHubStatus = updateGitHubStatus;
//# sourceMappingURL=github.js.map