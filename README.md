## Getting Started

`Always use pnpm`

1. Install dependencies with `pnpm i` (first run `corepack enable` to enable pnpm)
2. Run `pnpm prepare` command to setup [Husky](https://typicode.github.io/husky) pre-commit hooks.

## Main Scripts

Always prepending pnpm:

- `dev`: Bootstrap the Storybook preview with Hot Reload.
- `build`: Builds the static storybook project.
- `build:lib`: Builds the component library into the **dist** folder.
- `lint:fix`: Applies linting based on the rules defined in **.eslintrc.js**.
- `format:prettier`: Formats files using the prettier rules defined in **.prettierrc**.
- `test`: Runs testing using watch mode.
- `test:cov`: Runs testing displaying a coverage report.
