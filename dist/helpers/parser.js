"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseComment = void 0;
const node_emoji_1 = require("node-emoji");
const parseComment = (comment) => {
    let emoji = "";
    const body = node_emoji_1.emojify(node_emoji_1.unemojify(comment));
    node_emoji_1.replace(body, (i) => {
        emoji = emoji ? emoji : i.key;
        return "";
    });
    return { emoji: emoji ? `:${emoji}:` : "", text: node_emoji_1.strip(body).trim() };
};
exports.parseComment = parseComment;
//# sourceMappingURL=parser.js.map