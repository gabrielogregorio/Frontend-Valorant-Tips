TRAZER DE VOLTA

commit lint
sentry
prettier
jest
coverage
hotjar

<div align="center">

# Valorant tips

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)

</div>

<div align="center">

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/aa7397922b484be6943daaa86f16f919)](https://www.codacy.com/gh/gabrielogregorio/valorant-tips/dashboard?utm_source=github.com&utm_medium=referral&utm_content=gabrielogregorio/valorant-tips&utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/aa7397922b484be6943daaa86f16f919)](https://www.codacy.com/gh/gabrielogregorio/valorant-tips/dashboard?utm_source=github.com&utm_medium=referral&utm_content=gabrielogregorio/valorant-tips&utm_campaign=Badge_Coverage)

</div>

<div align="center">

![issues open](https://img.shields.io/github/issues/gabrielogregorio/valorant-tips.svg)
![issues closed](https://img.shields.io/github/issues-closed/gabrielogregorio/valorant-tips.svg)
![PR's open](https://img.shields.io/github/issues-pr/gabrielogregorio/valorant-tips.svg)
![PR's closed](https://img.shields.io/github/issues-pr-closed/gabrielogregorio/valorant-tips.svg)

</div>

<div align="center">

<a href="https://valorant-tips.vercel.app/" target="blank">Access blog</a>

</div>

## Introduction this project

This project was developed using NextJs, Typescript and api is available at [vavatips-backend](https://github.com/gabrielogregorio/valorant-tips-api).

Access [Valorant tips](https://valorant-tips.vercel.app/) or [storybook](https://gabrielogregorio.github.io/valorant-tips/)

![](/home.png)

## Badges

![GitHub stars](https://img.shields.io/github/stars/gabrielogregorio/vavatips-frontend)
![GitHub last commit](https://img.shields.io/github/last-commit/gabrielogregorio/vavatips-frontend?style=flat-square)
![GitHub contributors](https://img.shields.io/github/contributors/gabrielogregorio/vavatips-frontend)
![GitHub language count](https://img.shields.io/github/languages/count/gabrielogregorio/vavatips-frontend)
![GitHub repo size](https://img.shields.io/github/repo-size/gabrielogregorio/vavatips-frontend) ![statements](./coverage/badge-statements.svg) ![branchs](./coverage/badge-branches.svg) ![functions](./coverage/badge-functions.svg) ![lines](./coverage/badge-lines.svg) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/aa7397922b484be6943daaa86f16f919)](https://www.codacy.com/gh/gabrielogregorio/valorant-tips/dashboard?utm_source=github.com&utm_medium=referral&utm_content=gabrielogregorio/valorant-tips&utm_campaign=Badge_Grade)

## Run Project for development

1.  Fully start the backend, available in the [vavatips backend](https://github.com/gabrielogregorio/vavatips-backend) repository.
2.  With the backend working, create an .env file, based on the .env.example file.

## Contributing with project

Read [Contributing.md](CONTRIBUTING.md)

## Available scripts

### Run

```bash
# Install full dependencies
yarn

# Ignore storybook dependencies, but resolve in lockfile.
yarn install --ignore-optional
# Run in develop mode
# Open in http://localhost:3000
yarn dev

## Run in production mode
yarn build
yarn start

# Run storybook in localhost:6006
yarn run storybook
```

### Tests

```bash
# Tests with react testing library and cypress(e2e)
yarn test
yarn cypress

# Tests in watch mode and coverage
yarn test:watch-all
yarn test:watch-all:coverage

```

### Deploy

```bash
# Deploy storybook to github pages
yarn run deploy-storybook-gh-pages
```

### Generics

```bash

# Check typescript, eslint, unit tests, integration tests, update badges, e2e tests and audit production
yarn dev
yarn check-all

# Prettier fix all
yarn prettier --write .

# Audit dependencies
yarn audit --groups "dependencies"

# Check libs not used
npx depcheck

# Uprade packages
yarn upgrade-interactive --latest
```

## Vscode extensions for this project

| Extension                 | Description                             | Author         |
| ------------------------- | --------------------------------------- | -------------- |
| Eslint                    | For linting code                        | Microsoft      |
| Prettier - Code formatter | For beautifully formate code            | Prettier       |
| Prettier Eslint           | Integration prettier and eslint         | Rebecca Vest   |
| Stylelint                 | For lint in styles                      | Stylelint      |
| Gitignore                 | For use .gitignore                      | CodeZombie     |
| EditorConfig for VS code  | For basics formatter in code            | EditorConfig   |
| Tailwind CSS IntelliSense | For highlight and autocomplete tailwind | Tailwind Labs  |
| TODO Highlight v2         | For highlight FIXME: and TODO:          | Jonathan Clark |
