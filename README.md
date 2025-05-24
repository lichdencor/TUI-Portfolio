# TUI-Portfolio

A reborn web portfolio with a TUI (Text User Interface) aesthetic.  
Now featuring a built-in terminal that simulates POSIX commands in Bash.

![screenshot](./public/images/web-portfolio.jpeg)

## Features

- Simulated Bash-style terminal with basic POSIX-like commands (ls, cat, echo, grep, rm, touch)
- Simulated Neofetch with Host OS browser, JS heap, Page uptime (resets after refresh)
- Retro TUI-inspired UI, styled per page and component
- Modular project and configuration context shells (ex. info-shell is invented, you could implement conmmanctl, python, etc)

## Live Demo

Check it out live here: [https://lichdencor.netlify.app](https://lichdencor.netlify.app)

## Getting Started

### Requirements

- [Bun](https://bun.sh/) installed globally (bun --version)

### Run Locally

1. **Clone the repo**

```
bash
   git clone https://github.com/lichdencor/TUI-Portfolio.git
   cd TUI-Portfolio
```
   
2. **Install the dependencies**
```   
bash
   bun install
```
   
3. **Start develeopment server**

```
bash
   bun run dev
```

**4. Visit  http://localhost:PORT (ex. port 5173, 3000, etc.)**



## License

This project is licensed under the [MIT License](./LICENSE).  
You are free to use, modify, and distribute this project — just make sure to credit the original author.

