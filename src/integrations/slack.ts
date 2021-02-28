import { WebClient } from "@slack/web-api";
import type { Status } from "../interfaces";

const token = process.env.SLACK_TOKEN;
const slack = new WebClient(token);

export const updateSlackStatus = async (status: Status) => {
  await slack.users.profile.set({
    profile: JSON.stringify({
      status_text: status.text,
      status_emoji: status.emoji,
      status_expiration: status.expiration
        ? Math.floor(status.expiration.getTime() / 1000)
        : 0,
    }),
  });
};
