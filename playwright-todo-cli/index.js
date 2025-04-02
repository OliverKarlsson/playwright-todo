#!/usr/bin/env node
const { execSync } = require("child_process");
const { version } = require("./package.json");

try {
  execSync(`npm init playwright@${version} -- --quiet --no-examples`, {
    stdio: "inherit",
  });
} catch (error) {
  console.error("Something went wrong in the playwright setup:\n", error);
  process.exit(1);
}
