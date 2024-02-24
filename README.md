# Movies w/ React + Vite

[![Deploy to GitHub Pages](https://img.shields.io/github/actions/workflow/status/MrOlivo/movies-react/deploy.yml?style=for-the-badge&labelColor=363a4f&color=a6da95)](https://github.com/MrOlivo/movies-react/actions/workflows/deploy.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/MrOlivo/movies-react/github-code-scanning/codeql?label=CodeQL&style=for-the-badge&labelColor=363a4f&color=b7bdf8)](https://github.com/MrOlivo/movies-react/actions/workflows/github-code-scanning/codeql)

This is a brief summary of your project. It should explain what the project does, who it's for, and why it exists.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- pnpm: A package manager for the JavaScript programming language.
- Vite: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- Vitest: Vitest is a next generation testing framework powered by Vite.
- Biome: Fast formatter for JavaScript, TypeScript, JSX, and JSON. An alternative to Prettier.

## Project Structure

The project has the following structure:

```
├── .env.example
├── .eslintrc.cjs
├── .github
│   └── workflows
│       └── deploy.yml
├── .gitignore
├── .prettierrc
├── .vscode
├── biome.json
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.module.css
│   ├── App.tsx
│   ├── components
│   │   ├── Empty.module.css
│   │   ├── Empty.tsx
│   │   ├── MovieCard.module.css
│   │   ├── MovieCard.tsx
│   │   ├── MoviesGrid.module.css
│   │   └── ...
│   ├── hooks
│   ├── index.css
│   ├── main.tsx
│   ├── pages
│   ├── types
│   ├── utils
│   └── vite-env.d.ts
├── test
│   ├── MovieCard.test.jsx
│   └── MoviesGrid.test.jsx
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.js
```

## Installation

To install the project, follow these steps:

1. Clone the repository: `git clone https://github.com/MrOlivo/movies-react.git`
2. Navigate to the project directory: `cd movies-react`
3. Install the dependencies: `pnpm install`
4. Start the development server: `pnpm dev`

## Testing

To run the tests, use the following command: `pnpm test`

## Deployment

To build the project for production, use the following command: `pnpm run build`

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b branch-name`
3. Make your changes
4. Commit your changes: `git commit -m "Commit message"`
5. Push to your branch: `git push origin branch-name`
6. Open a pull request

## License

This project is licensed under the MIT License.
