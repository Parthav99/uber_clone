# Uber Clone Project

---

# ![image](https://github.com/user-attachments/assets/a05eaed3-61c0-4d03-9f19-911894f29bae)


Welcome to the **Uber Clone**! This project is a full-stack ride-booking application that simulates core features of the Uber platform, leveraging **React**, **Next.js**, **Firebase**, and **TailwindCSS**.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Architecture](#project-architecture)

---

## Overview
This Uber clone project was created to explore the functionality of modern ride-booking platforms. Built using the latest tools and frameworks, it includes core features such as user authentication, real-time location tracking, ride requests, and history management. This project demonstrates the powerful combination of **Next.js for server-rendered React**, **Firebase for real-time data management and user authentication**, and **TailwindCSS for responsive UI design**.

---

## Features
- **User Authentication**: Secure sign-in and sign-up using Firebase Authentication.
- **Real-time Database Integration**: Ride requests, updates, and tracking are managed with Firebase Firestore.
- **Responsive UI**: TailwindCSS for a seamless experience across devices.
- **Ride History and Tracking**: Access to past rides and real-time ride tracking.
- **Customizable Configurations**: Easily adaptable Tailwind and Firebase configurations.

---

## Tech Stack
- **Frontend**: React, Next.js, TailwindCSS
- **Backend**: Firebase (Authentication, Firestore, Real-time Database)
- **Styling**: TailwindCSS, PostCSS
- **Development Tools**: ESLint, Node.js

---

## Setup and Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/uber-clone.git
   cd uber-clone

2. Install dependencies: Make sure you have Node.js and npm installed. Then run:
    ```bash
    npm install
    ```

3. Set up Firebase:

    Go to the Firebase Console, create a new project, and add your web app.
    Copy the Firebase configuration and replace it in firebase.js.

4. Set up environment variables:

    In the project root, create a .env.local file and add your Firebase credentials.

5. Start the development server:

    ```bash
    npm run dev
    ```

    View in Browser:
        Open http://localhost:3000 to see your Uber clone in action.

## Usage

Once the app is running, you can:

  - Sign Up / Sign In: Create an account or log in with Firebase Authentication.
  - Request a Ride: Input your pick-up and destination locations.
  - Track Your Ride: View real-time ride details on the RideDetails page.
  - View Ride History: Access your ride history through the RideHistory component.

## Project Architecture

This project is designed with modularity and scalability in mind. Here's a high-level view of key components:

  - Authentication: Managed by Firebase Authentication, handling secure logins and signups.
  - Real-time Updates: Firestore and Firebase's real-time database provide live ride status and updates.
  - UI Components: Styled with TailwindCSS, each component is designed to be reusable and responsive.
  - Routing and SSR: Next.js’s file-based routing allows seamless page navigation and server-side rendering for improved performance.

We hope you enjoy exploring this Uber Clone project and that it inspires you to build even more exciting applications. 🚗💨

