# 🔴 Status Sync

This repository contains a GitHub Actions workflow that lets you set and sync your real-time status on Slack, GitHub, and other places.

## 🌟 How it works

Several services let you set a live status (e.g., "working", "AKF", etc.), such as Slack and GitHub. Instead of manually setting and updating your status on each service, you can use this repository as a template to set up an automation to do this for you. It also exposes a JSON API, so you can show your status in other places, such as your website, in real time.

1. Create a GitHub issue to track your status
2. Comment your status on that issue
3. Your status will be synced to all services

### Supported services

- [x] GitHub
- [x] Slack
- [x] JSON API: https://anandchowdhary.github.io/status-sync/api.json
- [ ] Twitter user description

## 📄 License

[MIT](./LICENSE) © [Anand Chowdhary](https://anandchowdhary.com)
