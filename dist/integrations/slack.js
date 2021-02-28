"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSlackStatus = void 0;
const web_api_1 = require("@slack/web-api");
const token = process.env.SLACK_TOKEN;
const slack = new web_api_1.WebClient(token);
const updateSlackStatus = async (status) => {
    await slack.users.profile.set({
        status_text: status.text,
        status_emoji: status.emoji,
        status_expiration: status.expiration
            ? Math.floor(status.expiration.getTime() / 1000)
            : 0,
    });
};
exports.updateSlackStatus = updateSlackStatus;
//# sourceMappingURL=slack.js.map