# 🍰 Minimal Turborepo TS React Starter

This is a minimal [Turborepo](https://turbo.build/repo/docs) starter set up to build a monorepo application with TypeScript.

It's built to be the most simple base possible to start building with your tools of choice. Very little decisions were made to let you setup your own tools. As such it includes a single app which is a React app built with Vite and simple packages to help kickstart your project faster.

## 🚀 Get started

Clone this repo, install its dependencies:

```sh
pnpm i 
```

and run the development server:

```sh
pnpm dev
```

## 📦 Apps & packages

This project includes two main folders:
- `apps`: applications to be deployed and consumed
    - `frontend`: a React application built with [Vite](https://vite.dev/)
- `packages`: development packages used to build the applications in `apps`
    - `@base/config-eslint`: `eslint` config
    - `@base/config-ts`: `tsconfig.json` used throughout the monorepo
    - `@base/ui`: a starter package for a React component library
    - `@base/utils-ts`: a library of TS utilities

### 🧰 Tools

This project is set up to work with:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [pnpm](https://pnpm.io/fr/) for package management
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [GitHub Actions](https://github.com/features/actions) for CI workflows

## 📚 Going further with Turborepo

Here are useful links to learn more about how Turborepo works:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
