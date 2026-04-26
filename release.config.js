module.exports = {
  branches: ["main"],
  repositoryUrl: "https://github.com/Nillorian/logseq-plugin-deepl-translate",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md"
      }
    ],
    [
      "@semantic-release/github",
      {
        "assets": [
          {
            "path": "logseq-plugin-deepl-translate.zip",
            "label": "Plugin ZIP"
          }
        ]
      }
    ]
  ]
};
