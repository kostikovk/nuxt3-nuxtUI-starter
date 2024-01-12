# Nuxt 3 + NuxtUI + Codestyle Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/3bf4afed-c00b-4ab2-9f14-2ec00719d491/deploy-status)](https://app.netlify.com/sites/nuxt3-nuxtui-codestyle/deploys)

Look at the [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) and [NuxtUI](https://ui.nuxt.com/) documentation to learn more.

## Tools and commands:

1. **ESLint**

```bash
# check .ts,.js,.vue
yarn lint:eslint

# fix
yarn fix:eslint
```

2. **Prettier**

```bash
# check .
yarn lint:prettier

# fix
yarn fix:prettier
```

3. **Stylelint**

```bash
# check .scss,.vue
yarn lint:stylelint

# fix
yarn fix:stylelint
```

4. **Check All**

```bash
yarn lint
```

5. **Fix All**

```bash
yarn fix
```

6. **Commitizen**. Using [git-cz](https://github.com/streamich/git-cz)

```bash
yarn commit
# or it's the same but committing all files
yarn commit:all
```

7. **Husky** `.husky/pre-commit`

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn lint:fix
```

8. **Husky** `.husky/pre-push`

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# yarn build
```

## Development
I'm using [NVM](https://github.com/nvm-sh/nvm) and [Yarn](https://yarnpkg.com/getting-started/install) if you don't have it, install it first.
```bash
# if you don't have node 18 version you will need to install it first
nvm use
```
```bash
yarn install
```
```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
