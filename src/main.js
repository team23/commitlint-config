const config = require('@commitlint/config-conventional');

// add 'sec' and 'release' types
const types = config.rules['type-enum'][2].concat(['sec', 'release']);

module.exports = {
    // See https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/index.js
    extends: ['@commitlint/config-conventional'],
    // Own rules
    rules: {
        'subject-case': [
            2,
            'never',
            ['start-case', 'pascal-case', 'upper-case'],
        ],
        'type-enum': [2, 'always', types],
    },
};