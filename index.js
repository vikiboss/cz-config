module.exports = {
  types: [
    {
      value: 'feat',
      name: 'โจ feat: A new feature',
    },
    {
      value: 'fix',
      name: '๐ fix: A bug fix',
    },
    {
      value: 'docs',
      name: '๐ docs: Documentation only changes',
    },
    {
      value: 'chore',
      name: "๐ chore: Changes that don't modify src or test files",
    },
    {
      value: 'style',
      name: '๐ style: Code Style, Changes that do not affect the meaning of the code',
    },
    {
      value: 'refactor',
      name: 'โป๏ธ refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: '๐ perf: A code change that improves performance',
    },
    {
      value: 'test',
      name: '๐งช test: Add missing tests or correcting existing tests',
    },
  ],

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
};
