# 🎧 Music Tomorrow

A monorepo powering Music Tomorrow's application.

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
    - `frontend`: a React application built with [Vite](https://vite.dev/) and using Tailwind CSS, React Router, Tanstack Query, E2E tests with Playwrite and visual regression test with Argos.
- `packages`: development packages used to build the applications in `apps`
    - `@mt/config-css`: Tailwind CSS base config and CSS reset and vars shared by `compose-ui` and `frontend`.
    - `@mt/config-eslint`: `eslint` config
    - `@mt/config-ts`: `tsconfig.json` used throughout the monorepo
    - `@mt/utils-ts`: a library of TS utilities
    - `@mt/compose-ui`: the React component library providing the building blocks to compose the UI of `frontend`. Using Tailwind, React Aria, shadcn and Storybook.

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
