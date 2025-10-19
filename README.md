# GitHub Profile Finder

This is a simple React application built with Vite that allows you to search for GitHub users and view their profile information.

## Features

  * **Search for GitHub users:** Enter a GitHub username to fetch and display their profile data.
  * **View profile information:** See the user's avatar, name, number of public repositories, followers, and following count.
  * **Direct link to GitHub profile:** Click on the user's name to open their GitHub profile in a new tab.

## Technologies Used

  * **React:** A JavaScript library for building user interfaces.
  * **Vite:** A fast build tool and development server for modern web projects.
  * **React Icons:** A library of popular icons for React projects.
  * **GitHub API:** Used to fetch user profile data.

## Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/loharharsh222/react_project.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd react-app
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1.  **Run the development server:**

    ```bash
    npm run dev
    ```

    This will start the application in development mode. Open your browser and go to `http://localhost:5173` to view the app.

2.  **Build the application for production:**

    ```bash
    npm run build
    ```

    This will create a `dist` folder with the optimized production build of the application.

3.  **Lint the code:**

    ```bash
    npm run lint
    ```

    This will run ESLint to check for any linting errors in the code.

4.  **Preview the production build:**

    ```bash
    npm run preview
    ```

    This will serve the production build from the `dist` folder locally.

## Security Note

The GitHub API token is hardcoded in the `src/components/index.jsx` file. It is highly recommended to move this token to a `.env` file and add it to the `.gitignore` to prevent it from being exposed in the source code.

```javascript
// src/components/index.jsx

//...
const response = await fetch(`https://api.github.com/users/${input}`, {
  headers: {
    // Replace this with an environment variable
    Authorization: "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",
  },
});
//...
```
