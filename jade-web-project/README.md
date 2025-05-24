# J.A.D.E Web Project

## Overview
J.A.D.E is a web application that allows users to upload and categorize videos by game. The application features a clean and modern design with a gradient background and a user-friendly interface.

## Project Structure
```
jade-web-project
├── public
│   └── index.html          # Main HTML document
├── src
│   ├── assets              # Static assets (images, fonts, etc.)
│   ├── components          # React components
│   │   ├── Header.js       # Header component
│   │   ├── Menu.js         # Menu component
│   │   └── VideoUpload.js   # Video upload component
│   ├── styles              # CSS styles
│   │   └── main.css        # Main stylesheet
│   ├── App.js              # Main application component
│   └── index.js            # Entry point of the application
├── package.json            # npm configuration file
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd jade-web-project
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
Open your browser and go to `http://localhost:3000` to view the application.

## Features
- Gradient background using the colors #7fa896, #2c7970, and #8fb29e.
- Header displaying "J.A.D.E".
- Horizontal menu with rounded corners containing sections: Menu, Clips, and Rewing Discord.
- Functionality for users to upload videos categorized by game.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License.