"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateApi = void 0;
const fs_1 = require("fs");
const node_emoji_1 = require("node-emoji");
const path_1 = require("path");
const generateApi = async (status) => {
    const api = {
        emojiText: status.emoji,
        emoji: node_emoji_1.emojify(status.emoji),
        text: status.text,
        date: new Date().toISOString(),
    };
    await fs_1.promises.mkdir(path_1.join(".", "public"));
    await fs_1.promises.writeFile(path_1.join(".", "public", "api.json"), JSON.stringify(api, null, 2));
};
exports.generateApi = generateApi;
//# sourceMappingURL=api.js.map