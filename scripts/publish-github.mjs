import { spawnSync } from "node:child_process";
import path from "node:path";
const cwd = process.cwd();

const args = process.argv.slice(2);
const visibility =
  findArgValue(args, "--visibility") ||
  (args.includes("--private")
    ? "private"
    : args.includes("--internal")
      ? "internal"
      : "public");
const owner = findArgValue(args, "--owner") || process.env.GITHUB_OWNER || "";
const customName = findArgValue(args, "--name") || "";
const description =
  findArgValue(args, "--description") ||
  "AI frontend test project based on CLRS and datawhalechina/leetcode-notes";
const ghBin = process.env.GH_BIN || "gh";

ensureCommandAvailable(ghBin);
ensureGitRepo();
ensureGhAuth(ghBin);

const branch = execAndGetStdout("git", ["rev-parse", "--abbrev-ref", "HEAD"]);
const hasOrigin = run("git", ["remote", "get-url", "origin"], false).status === 0;

if (!hasOrigin) {
  const repoName = customName || path.basename(cwd);
  const repoSlug = owner ? `${owner}/${repoName}` : repoName;
  runStrict(ghBin, [
    "repo",
    "create",
    repoSlug,
    "--source",
    ".",
    "--remote",
    "origin",
    "--push",
    `--${visibility}`,
    "--description",
    description,
  ]);
  console.log(`Created and pushed: ${repoSlug}`);
} else {
  runStrict("git", ["push", "-u", "origin", branch]);
  console.log(`Pushed branch '${branch}' to existing origin.`);
}

function ensureCommandAvailable(command) {
  const version = run(command, ["--version"], false);
  if (version.status !== 0) {
    console.error("GitHub CLI not found. Please install system gh first.");
    process.exit(1);
  }
}

function ensureGitRepo() {
  const result = run("git", ["rev-parse", "--is-inside-work-tree"], false);
  if (result.status !== 0) {
    console.error("Current directory is not a git repository.");
    process.exit(1);
  }
}

function ensureGhAuth(ghCommand) {
  const status = run(ghCommand, ["auth", "status"], false);
  if (status.status === 0) {
    return;
  }
  console.log("GitHub auth is required. Opening browser login...");
  runStrict(ghCommand, ["auth", "login", "-w"]);
}

function run(command, commandArgs, inherit = true) {
  return spawnSync(command, commandArgs, {
    cwd,
    stdio: inherit ? "inherit" : "pipe",
    shell: false,
    encoding: "utf8",
  });
}

function runStrict(command, commandArgs) {
  const result = run(command, commandArgs, true);
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function execAndGetStdout(command, commandArgs) {
  const result = run(command, commandArgs, false);
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
  return (result.stdout || "").toString().trim();
}

function findArgValue(argList, key) {
  const index = argList.indexOf(key);
  if (index === -1 || index + 1 >= argList.length) {
    return "";
  }
  return argList[index + 1];
}
