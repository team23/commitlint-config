# commitlint-config

TEAM23 configuration for [commitlint](https://commitlint.js.org/) enforcing our commit message standard.

If you're using [pre-commit](https://pre-commit.com/), chances are that you're also using [commitlint](https://commitlint.js.org/) to make sure all your commit messages adhere to our [conventional commit standard](https://confluence.team23.de/display/AP/Commit+Standard). 

## How to use

### Create config file

Add a file `commitlint.config.js` to the root directory of your project with the following content: 

```js
module.exports = {
    extends: ['@team23/commitlint-config'],
};
```

### Add pre-commit hook

Next, add the pre-commit hook for commitlint to your pre-commit config (`.pre-commit-config.yaml`) by adding

```yaml
  - repo: https://github.com/alessandrojcm/commitlint-pre-commit-hook
    rev: v9.0.0
    hooks:
      - id: commitlint
        stages: [commit-msg]
        additional_dependencies:
          - "@team23/commitlint-config@1.0.0"
```

Specify the version of `@team23/commitlint-config` you want to use in the `additional_dependencies`.
