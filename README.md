# Todo List App

A simple React + Vite Todo List application with task persistence using browser localStorage.

## Overview

This project is a lightweight task manager where users can:

- Add new tasks
- Mark tasks complete by clicking the task item
- Delete individual tasks
- Keep tasks saved in the browser across refreshes

It uses React functional components, hooks, and FontAwesome icons for task deletion.

## Features

- Add and remove tasks
- Validate empty input and show an alert message
- Toggle task completion state with a click
- Persist tasks in `localStorage`
- Responsive UI built with CSS

## Tech Stack

- React 18
- Vite
- JavaScript (JSX)
- CSS
- FontAwesome icons
- ESLint for code quality

## Project Structure

- `src/App.jsx` - main App wrapper
- `src/Components/nav-bar/Navbar.jsx` - page header
- `src/Components/main-content/MainContent.jsx` - task input, list rendering, and task actions
- `src/index.css` - global styles
- `src/App.css` - component-specific styles
- `package.json` - dependencies and scripts
- `vite.config.js` - Vite configuration

## Installation

1. Clone this repository:

   ```bash
   git clone <repository-url>
   cd Todo-List
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Run Locally

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal to view the app.

## Build for Production

Generate a production build with:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Notes

- Tasks are stored in the browser's `localStorage`, so they remain available after refreshing the page.
- Clicking a task toggles a completed state, which visually marks the task as finished.
- The delete button removes the task from both the UI and storage.

## License

This project is provided as-is for demonstration and learning purposes.

## Author
 **Muhammad Muzammil** (Monarch of Code) Full Stack Developer