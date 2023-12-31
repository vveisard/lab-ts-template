# @vveisard/template-ts

Templates for minimal TypeScript project with Bun.

# Features

## Developer Experience (DX)

- prettier
- eslint
- typescript-eslint
- husky
- lint-staged
- commitlint

## Scripts

### build

From ./src/index.ts to ./out/index.js and ./out/index.d.ts

### format

### lint

## VSCode Settings

./.vscode/settings.json

# Usage

Use degit:

```bash
bun x degit github:@vveisard/template-ts
```

## Configuration

### Required

- update package.json

  - name
  - description
  - tags

- update README.md

### Optional

- configure package.json exports

<hr/>

# $package.name

# Development

## Prerequisites

### Install [bun](https://bun.sh/):

```bash
curl -fsSL https://bun.sh/install | bash
```

### Install dependencies:

```bash
bun install
```

This will setup [husky](https://typicode.github.io/husky/).
