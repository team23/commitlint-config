import * as config from '@commitlint/config-conventional';

// add 'sec' and 'release' types
const types = config.rules['type-enum'][2].concat(['sec', 'release']);

const Configuration = {
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

export default Configuration;
