import { promises as fs } from "fs";
import { emojify } from "node-emoji";
import { join } from "path";
import type { Status } from "../interfaces";

export const generateApi = async (status: Status) => {
  const api = {
    emojiText: status.emoji,
    emoji: emojify(status.emoji),
    text: status.text,
    date: new Date().toISOString(),
  };
  await fs.mkdir(join(".", "public"));
  await fs.writeFile(
    join(".", "public", "api.json"),
    JSON.stringify(api, null, 2)
  );
};
