# Svelte App

[![Lint](https://github.com/0918nobita/svelte-practice/actions/workflows/lint.yml/badge.svg)](https://github.com/0918nobita/svelte-practice/actions/workflows/lint.yml)

## Install dependencies

```bash
pnpm i
```

## Launch development server

```bash
pnpm dev
```

## Building and running in production mode

To create an optimised version of the app:

```bash
pnpm build
```

You can run the newly built app with `pnpm start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).
