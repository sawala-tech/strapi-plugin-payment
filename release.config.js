module.exports = {
  branches: [
    'main',
    {
      name: 'beta',
      prerelease: true,
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        assets: ['dist/**/*.{js,css}', 'docs', 'CHANGELOG.md', 'package.json'],
        message:
          'chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
