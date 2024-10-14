# Forge Hello World

Uses Fuegokit React and blended ThemeProvider for Forge development.

Files of interest:

```bash
tree -I node_modules
.
├── README.md
├── dist
│   ├── assets
│   │   ├── index-C97NCATj.js
│   │   └── index-Cc_ZgGLD.css
│   ├── index.html
│   └── vite.svg
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── BlendedThemeProvider
│   │   │   ├── BlendedThemeProvider.tsx
│   │   │   └── index.tsx
│   │   ├── GlobalStyles
│   │   │   ├── GlobalStyles.tsx
│   │   │   └── index.tsx
│   │   ├── Todos
│   │   │   ├── LayoutComponents.tsx
│   │   │   ├── TodosApp.tsx
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── WelcomeBanner
│   │   │   ├── WelcomeBanner.tsx
│   │   │   └── index.tsx
│   │   └── index.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.app.tsbuildinfo
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.node.tsbuildinfo
└── vite.config.ts

10 directories, 32 files

```

## Forge boilerplate README follows:

This project contains a Forge app written in Javascript that displays `Hello World!` in a Jira issue panel.

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

- Install top-level dependencies:

```
npm install
```

- Install dependencies inside of the `static/hello-world` directory:

```
npm install
```

- Modify your app by editing the files in `static/hello-world/src/`.

- Build your app (inside of the `static/hello-world` directory):

```
npm run build
```

- Deploy your app by running:

```
forge deploy
```

- Install your app in an Atlassian site by running:

```
forge install
```

### Notes

- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
