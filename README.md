# Admin Dashboard React

A React.js dashboard frontend application with Firebase authentication, featuring graphs, user management and task assignment window.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Dashboard UI](#dashboard-ui)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- Firebase Authentication
- Graphs and Data Visualization
- Responsive Dashboard Layout
- User Management
- Task Assignment

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository

 ```bash
 git clone https://github.com/shubham225/admin-dashboard-react.git
 ```

2. Navigate to the project folder:

 ```bash
 cd admin-dashboard-react
 ```

3. Install dependencies:

 ```bash
 npm install
 ```

## Usage

### Development

To run the application in development mode, use the following command:

 ```bash
 npm start
 ```

This will start the development server, and you can view the application in your web browser at <http://localhost:3000>.

### Production Build

To build the application for production, use the following commands:

 ```bash
 npm run build
 ```

This will create a build folder with optimized and minified production-ready assets.

### Environment Variables

Make sure to set up the necessary environment variables. Create a `.env` file in the root of your project and add the required variables:

 ```env
 REACT_APP_FIREBASE_API_KEY=your-api-key
 REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
 REACT_APP_FIREBASE_PROJECT_ID=your-project-id
 REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
 REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
 REACT_APP_FIREBASE_APP_ID=your-app-id
 REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
 ```

Note: Ensure you replace your-api-key, your-auth-domain, and other placeholders with your actual Firebase configuration.

## Dashboard UI

### Login Page

The Login Page is where users can authenticate and gain access to the dashboard. Below is a snapshot of the Login Page:

![Login Page](/screenshots/login-page.png)

### Home Page

The Home Page serves as the main landing page for authenticated users. It typically includes an overview of key data and navigation to other sections of the dashboard.

![Home Page](/screenshots/home-page.png)

### Ticket List Page

The Ticket List Page displays a list of assigned tasks or tickets, allowing users to manage and track their assignments.

![Ticket List Page](/screenshots/ticket-page.png)

## Technologies Used

- **React.js:** A JavaScript library for building user interfaces.
- **Firebase:** A cloud-based platform for building serverless applications.
- **recharts:** A simple yet flexible JavaScript charting library for data visualization.
- **React Router:** A declarative routing library for React.js applications.
- **Node.js and npm:** JavaScript runtime and package manager for building and managing dependencies.

## License

This project is licensed under the [MIT License](LICENSE.md).