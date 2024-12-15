# Tableau Extension Template

This repository provides a template for creating a Tableau Extension using the Tableau Extensions API. The application demonstrates how to load the Tableau Extensions API, display a configuration dialog, and save settings for customization.

## Features

- **Tableau Extensions API Integration**: Easily integrate Tableau Extensions into your applications.
- **Configuration Dialog**: Includes a popup configuration dialog for user-defined settings.
- **Settings Management**: Save and retrieve settings using the Tableau Extensions API.
- **React Framework**: Built using React for a modern, component-based architecture.
- **Material-UI**: Styled components for a polished user interface.

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (Latest LTS recommended)
- Git
- A Tableau environment to test the extension

## Using `degit` to Create a New Project

To create a new project based on this repository using `degit`, follow these steps:

1. Ensure you have `degit` installed globally. If not, install it using:

   ```bash
   npm install -g degit
   ```
3. Use degit to create a copy of this repository:

   ```bash
   degit HollowLeaf1981/tableau_extension_template your-new-project
   ```
Replace your-new-project with the desired name of your project folder.

3. Navigate to the newly created project directory:

   ```bash
   cd your-new-project
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and navigate to the local server URL provided (usually `http://localhost:5173`).
   
## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HollowLeaf1981/tableau_extension_template.git

   ```

2. Navigate to the project directory:

   ```bash
    cd tableau_extension_template
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173 ` to see the application.

3. Follow the steps below to load this extension into Tableau:

- Open Tableau Desktop.
- Add an Extension object to your dashboard.
- Choose to load the extension from a local file and select the manifest.trex from the project.

## Project Structure

```
.
├── public
│   ├── configure.html     # Entry point for the configuration dialog
│   └── index.html         # Main entry point for the extension
├── src
│   ├── components
│   │   └── Configure.jsx  # Component for the configuration dialog
│   ├── App.jsx            # Main application logic
│   └── index.js           # Application entry point
├── package.json
└── README.md
```

## How It Works

### App.jsx

The main application initializes the Tableau Extensions API, retrieves saved settings, and displays the configuration dialog.

### Configure.jsx

Handles the configuration logic. Users can input settings in a dialog, save them, and close the dialog, which triggers an update in the main application.

## Configuration Flow

1. The user clicks a button to open the configuration dialog.
2. The dialog loads a separate page where the user can set preferences.
3. The settings are saved using the Tableau Extensions API.
4. The main application updates to reflect the new settings.

## Commands

- **Start Development Server**: `npm start`
- **Build for Production**: `npm run build`

## Example Usage

1. Open Tableau Desktop and add an extension object to your dashboard.
2. Load the extension from the local directory.
3. Interact with the configuration dialog to customize settings.
4. See the changes reflected in the Tableau dashboard.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

### Author

Developed by Toan Hoang. For more projects and updates, visit [HollowLeaf1981 on GitHub](https://github.com/HollowLeaf1981).

If you encounter any issues or have suggestions for improvement, feel free to create an issue or submit a pull request.
