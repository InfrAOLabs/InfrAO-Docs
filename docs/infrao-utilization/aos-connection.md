---
title: Connecting to InfrAO-Deployed Processes
sidebar_label: AOS CLI Connection
description: How to connect to a process deployed with InfrAO hardware using the command line.
slug: /infrao/aos-cli-connect
---

# 🔌 Connecting via CLI to InfrAO-Deployed Processes

If a process was deployed using **InfrAO's Compute Unit (CU)** and **Memory Unit (MU)** infrastructure, you need to explicitly tell the `aos` CLI where to route the connection.

## 🧭 Basic Command

```bash
aos InfrAO-Deployed-Process \
  --mu-url https://ur-mu.randao.net \
  --cu-url https://ur-cu.randao.net \
  --wallet pathToWallet.json
```

Replace:
- `InfrAO-Deployed-Process` with your target **Process ID**
- `pathToWallet.json` with your **local wallet path**

## 🧠 Why It Matters

InfrAO processes live on dedicated hardware that is separate from the default public cluster. Without specifying these `--mu-url` and `--cu-url` flags, your CLI won't be able to locate or interact with the process.

---

### ✅ Use this when:

- You're interacting with any process deployed via the [InfrAO Deployment Script](./deploying-on-su)
- You want to ensure **fast, reliable communication** via InfrAO’s private infrastructure

Need help connecting or debugging? [Join our Discord](https://discord.gg/ao) or email [support@randao.net](mailto:support@randao.net).
