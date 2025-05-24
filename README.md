<<<<<<< HEAD
# TUI-Portfolio

A reborn web portfolio with a TUI (Text User Interface) aesthetic.  
Now featuring a built-in terminal that simulates POSIX commands in Bash.

![screenshot](./public/images/web-portfolio.jpg)

## Features

- Simulated Bash-style terminal with basic POSIX-like commands (`ls`, `cat`, `echo`, `grep`, `rm`, `touch`)
- Simulated `neofetch` with host OS (browser), JS heap, and page uptime (resets on refresh)
- Retro TUI-inspired UI, styled per page and component
- Modular project and configuration context shells  
  _(e.g., `info-shell` is custom; you could implement others like `conmmanctl`, `python`, etc.)_

## Live Demo

Check it out live here: [https://lichdencor.netlify.app](https://lichdencor.netlify.app)

## Getting Started

### Requirements

- [Bun](https://bun.sh/) installed globally (`bun --version`)

### Run Locally

1. **Clone the repo**

   ```bash
   git clone https://github.com/lichdencor/TUI-Portfolio.git
   cd TUI-Portfolio
   ```
   
2. **Install the dependencies**
   ```bash
   bun install
   ```
   
3. **Start develeopment server**
   ```bash
   bun run dev
   ```
4. Visit  http://localhost:PORT (e.g., port 5173, 3000, etc.)


## License

This project is licensed under the [MIT License](./LICENSE).  
You are free to use, modify, and distribute this project — just make sure to credit the original author.
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
>>>>>>> 16fa599 (Initial commit)
