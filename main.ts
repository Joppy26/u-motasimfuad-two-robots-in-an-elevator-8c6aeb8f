// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "So... do you also stare at the floor numbers to avoid eye contact, or did your last firmware update fix that?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
