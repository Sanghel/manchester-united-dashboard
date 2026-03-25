export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'ui',
        'hooks',
        'api',
        'config',
        'deps',
        'types',
        'test',
        'docs',
        'router',
        'store',
        'scores',
        'standings',
        'stats',
        'leagues',
        'layout',
      ],
    ],
    'scope-empty': [1, 'never'],
  },
}
