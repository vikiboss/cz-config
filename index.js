module.exports = {
  types: [
    {
      value: 'feat',
      name: '✨ feat: A new feature',
    },
    {
      value: 'fix',
      name: '🐛 fix: A bug fix',
    },
    {
      value: 'docs',
      name: '📝 docs: Documentation only changes',
    },
    {
      value: 'chore',
      name: "🍕 chore: Changes that don't modify src or test files",
    },
    {
      value: 'style',
      name: '💄 style: Code Style, Changes that do not affect the meaning of the code',
    },
    {
      value: 'refactor',
      name: '♻️ refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: '🚀 perf: A code change that improves performance',
    },
    {
      value: 'test',
      name: '🧪 test: Add missing tests or correcting existing tests',
    },
  ],

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
};
