import { emojify, replace, strip, unemojify } from "node-emoji";
import type { Status } from "../interfaces";

export const parseComment = (comment: string): Status => {
  let emoji = "";
  const body = emojify(unemojify(comment));
  replace(body, (i) => {
    emoji = emoji ? emoji : i.key;
    return "";
  });
  return { emoji: emoji ? `:${emoji}:` : "", text: strip(body).trim() };
};
