# SocioRealm Frontend

SocioRealm is a social media app that allows users to connect with their friends, share posts, and much more. This repository contains the frontend part of the application, built with React.

## Project Structure

The project is structured into two main directories: `public` and `src`.

### Public

The `public` directory contains files that are served directly by the server. These include:

- The main `index.html` file
- The web app manifest `manifest.json`
- Logos and the favicon for the web app
- The `robots.txt` file for web robots
- Additional assets like social media icons in the `assets` directory

### Src

The `src` directory contains the source code of the application, organized as follows:

- `components`: Reusable React components
- `state`: Global state management files
- `scenes`: Different scenes or views of the application

The `scenes` directory further contains:

- `loginPage`: Components for the login page
- `homePage`: Components for the home page
- `profilePage`: Components for the user profile page
- `navbar`: Components for the navigation bar
- `widgets`: Various widgets used across the application

## Setup

To set up the project for development, follow these steps:

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm start`

(Note: These steps assume that Node.js and npm are installed on your system)

Please refer to the individual directories for more specific documentation.

## Acknowledgments

This project was developed by following along with a YouTube course. Much of the code is based on the lessons learned in the course. The original course can be found at [YouTube Course](<https://www.youtube.com/watch?v=K8YELRmUb5o>).

