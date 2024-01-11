# Nuxt 3 + NuxtUI + Codestyle Starter

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
yarn ct
```

5. **Husky** `.husky/pre-commit`

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn lint:fix
```

6. **Husky** `.husky/pre-push`

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# npm run build
```

## Development

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarm build
```

Locally preview production build:

```bash
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
