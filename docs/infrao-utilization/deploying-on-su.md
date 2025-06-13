---
title: Deploying a Process with InfrAO SU
sidebar_label: Deploying on SU
description: Learn how to deploy a process using InfrAO's optimized endpoints for better performance and isolation.
slug: /infrao/deploying-on-su
---

# 🚀 Deploying a Process with InfrAO SU

This guide walks you through deploying a process using **InfrAO's custom MU, CU, and Scheduler infrastructure**. By routing deployments through InfrAO, your process benefits from **faster hardware**, improved scheduling, and **clean authority isolation**.

## 🔧 Script Example

```ts
import { readFileSync, appendFile } from "node:fs";
import { connect, createDataItemSigner } from "@permaweb/aoconnect";

const logFilePath = 'log.txt';

const { spawn } = connect({
  MU_URL: "https://ur-mu.randao.net",
  CU_URL: "https://ur-cu.randao.net",
  GATEWAY_URL: "https://arweave.net",
});

const wallet = JSON.parse(readFileSync("Path to Wallet").toString());

async function main() {
    const processId = await spawn({
        module: "ISShJH1ij-hPPt9St5UFFr_8Ys3Kj5cyg7zrMGt7H9s",
        scheduler: "hgyPiR329mfonaqwAdqIygJPrLL8ypflUAzgUZTyYnA",
        signer: createDataItemSigner(wallet),
        tags: [
            { name: "Authority", value: "--TKpHlFyOR7aLqZ-uR3tqtmgQisllKaRVctMlwvPwE" },
            { name: "aos-Version", value: "2.0.6" },
            { name: "Name", value: "InfrAO Su Process Example" },
            { name: "App-Name", value: "aos" },
            { name: "Data-Protocol", value: "ao" },
        ],
    });

    console.log(processId);

    appendFile(logFilePath, `"${processId}",\n`, (err) => {
        if (err) console.error("Error writing to file:", err);
    });

    return processId;
}

await main();
```

---

## 🧠 Notes & Considerations

- This deployment method uses **InfrAO’s endpoints** for both the Memory Unit (MU) and Compute Unit (CU), and sets a custom **Scheduler ID** and **Authority tag** tied to InfrAO infrastructure.
- Processes deployed this way are ideal for **isolated ecosystems**: they’re expected to **only communicate with other processes deployed through InfrAO**.

### 🔄 Cross-Ecosystem Communication

If your process needs to communicate with processes deployed using other infrastructure (e.g. Forward Research), you **must add their authority** to your process manually:

```lua
table.insert(ao.authorities,"fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY")
```

> ⚠️ This must be `eval`ed from within your process logic to be active.

---

## ✅ When to Use This

- You want **performance gains** from dedicated hardware
- You need **process isolation** and want to avoid noise from the public cluster
- You control both ends of the communication (i.e., all processes are spawned through InfrAO)

---

For questions or help optimizing deployment strategy, [reach out to the InfrAO team](mailto:support@randao.net) or [join the AO Discord](https://discord.gg/ao).
