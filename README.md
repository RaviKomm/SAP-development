# SAP-development
# DevMinds SPA - OIDC Authentication Web App

## 📌 Overview

This project is a **Single Page Application (SPA)** built using **React** that integrates **OIDC (OpenID Connect)** authentication via **Google Login**. It serves as a minimal yet secure web app for demonstrating modern login flows with user identity display.

---

## 💻 Technologies Used

- **React** (JavaScript library for building SPAs)
- **Google OAuth2 / OIDC** (`@react-oauth/google`)
- **JWT Decode** (`jwt-decode`)
- **CSS** for styling

---

## ✅ Assignment Requirements Mapping

| Requirement                                                 | How It’s Met                                              |
|-------------------------------------------------------------|-----------------------------------------------------------|
| Install necessary development tools and JS framework/library | Used `npm`, `React`, and supporting libraries             |
| Create a single-page web app                                | Built with React, following SPA architecture              |
| Include a main HTML file                                    | Handled via React’s `public/index.html`                  |
| Add CSS for styling                                         | `styles.css` applied to improve appearance                |
| Use JavaScript for functionality                            | `App.js` contains OIDC login logic and dynamic rendering |

---

## ✨ Features

- Google Login integration using OIDC protocol
- User profile (name, email, and picture) displayed after login
- Logout functionality
- Simple UI with modern styling and background image

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
git clone https://github.com/your-username/oidc-spa.git
cd oidc-spa
npm install
### Running the App
npm start
-The app will run on http://localhost:3000 (or another port if already in use).
🧠 Notes
-The Google OIDC client ID is configured in index.js.

-Styling is applied via style.css located in the src folder.

-React handles HTML through JSX and the public/index.html template.




