const path = require("path");

const repospacePath = path.join(__dirname, "sandbox");

const config = {
  provider: "alechp",
  repospacePath,
  repositories: [
    { servexyz: "paths-exist" },
    { servexyz: "tacker" },
    { servexyz: "get-pkg-prop" }
  ]
};

module.exports = { config };
