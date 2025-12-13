# 🌍 ClubSphere – Membership & Event Management for Local Clubs

## 🎯 Project Purpose

**ClubSphere** is a full-stack MERN (MongoDB, Express, React, Node.js) web application designed to be the central hub for discovering, joining, and managing local clubs and their events.

It simplifies the organizational burden for club managers by providing tools for club/event creation, membership fee collection, and registration tracking. For members, it offers a seamless way to find clubs, manage their memberships, and register for events securely.

## 🚀 Live URL & Repositories

| Type | Link |
| :--- | :--- |
| **Live Application** | [https://clubsphere-a11b12.netlify.app/](https://clubsphere-a11b12.netlify.app/) |
| **Client (Frontend) Repo** | [https://github.com/AyanSujon/ClubSphere-Client.git](https://github.com/AyanSujon/ClubSphere-Client.git) |
| **Server (Backend) Repo** | [https://github.com/AyanSujon/ClubSphere-Server.git](https://github.com/AyanSujon/ClubSphere-Server.git) |
| **API Endpoint** | [https://club-sphere-api.vercel.app/](https://club-sphere-api.vercel.app/) |

## ✨ Key Features

ClubSphere is built around a robust **three-role system** (Admin, Club Manager, and Club Member) and offers the following core functionalities:

### 👤 Role-Based Access and Dashboards

* **Authentication & Authorization:** Secure user login and registration with distinct roles.
* **Dedicated Dashboards:** Separate, role-specific dashboards for Admin, Manager, and Member, providing tailored functionalities and data.

### 💰 Membership & Payment Management

* **Secure Payments:** Integration with **Stripe** for handling secure, free or paid club memberships and event registration fees.
* **Transaction Tracking:** Members can view their payment history, and the Admin can monitor all platform transactions.

### 🧑‍💻 Club & Event Management

* **Club Manager Tools:** Managers can create, edit, update, and delete clubs and associated events.
* **Member Registration:** Members can join clubs and register for specific events.
* **Oversight:** Managers can view their club members and track event registrations.

### 👑 Admin Control

* **System Monitoring:** Comprehensive overview of all users, clubs, and financial transactions across the platform.
* **User Management:** Ability to manage user roles and overall system integrity.

---

## 🔑 Login Credentials

Use the following credentials to explore the different role-based dashboards:

| Role | Password | Email |
| :--- | :--- | :--- |
| **Admin** | `@Admin1` | `admin1@gmail.com` |
| **Club Manager** | `@Manager1` | `manager1@gmail.com` |
| **Club Member** | `@clubMember1` | `clubmember1@gmail.com` |

---



## 📦 Important npm Packages Used

The application leverages a modern MERN stack with a focus on efficiency, secure authentication, and developer experience.

### Backend Dependencies (Server)

| Package | Purpose |
| :--- | :--- |
| `express` | Minimalist web framework for Node.js (Routing and middleware). |
| `mongodb` | Official MongoDB driver for Node.js (Database interaction). |
| `stripe` | Official Stripe SDK for processing payments securely on the server. |
| `firebase-admin` | Enables secure authentication and authorization using Firebase Admin SDK. |
| `cors` | Provides middleware to enable Cross-Origin Resource Sharing. |
| `dotenv` | Loads environment variables from a `.env` file. |

### Frontend Dependencies (Client)

| Package | Purpose |
| :--- | :--- |
| `react` / `react-dom` | Core libraries for building the user interface. |
| `@tanstack/react-query` | Powerful library for data fetching, caching, and state management. |
| `axios` | Promise-based HTTP client for making API requests. |
| `react-router` | Declarative routing for React. |
| `react-hook-form` | High-performance, flexible form validation and management. |
| `firebase` | Client-side SDK for user authentication (e.g., Google Sign-In, Email/Password). |
| `tailwindcss` / `@tailwindcss/vite` | Utility-first CSS framework for rapid styling. |
| `framer-motion` | Library for production-ready animations and gestures. |
| `recharts` | Composable charting library built with React and D3. |
| `sweetalert2` / `react-hot-toast` | Libraries for beautiful, responsive alerts and notifications. |

---

## 🔗 Page List & Endpoints

### Public & General Pages

| Page Name | URL |
| :--- | :--- |
| **Home** | [Home](https://clubsphere-a11b12.netlify.app/) |
| **Clubs** | [Clubs](https://clubsphere-a11b12.netlify.app/clubs) |
| **Events** | [Events](https://clubsphere-a11b12.netlify.app/events) |
| **Pricing** | [Pricing](https://clubsphere-a11b12.netlify.app/pricing) |
| **Dashboard** (Redirects based on role) | [Dashboard](https://clubsphere-a11b12.netlify.app/dashboard) |
| **Profile** | [Profile](https://clubsphere-a11b12.netlify.app/profile) |
| **Club Details** (Example) | [Club Details](https://clubsphere-a11b12.netlify.app/clubs/693cf610c5a111d3639f07d7) |
| **Event Details** (Example) | [Event Details](https://clubsphere-a11b12.netlify.app/events/693451210c37c914c5524f9a) |

### Admin Dashboard Pages

| Page Name | URL | Features |
| :--- | :--- | :--- |
| **Overview** | [Overview](https://clubsphere-a11b12.netlify.app/dashboard) | System-wide statistics |
| **Manage Users** | [Manage Users](https://clubsphere-a11b12.netlify.app/dashboard/admin/manage-users) | Member role assignment, user control |
| **Manage Clubs** | [Manage Clubs](https://clubsphere-a11b12.netlify.app/dashboard/admin/manage-clubs) | Club oversight and management |
| **Transactions** | [Transactions](https://clubsphere-a11b12.netlify.app/dashboard/admin/transactions) | Payment management and history |

### Manager Dashboard Pages

| Page Name | URL | Features |
| :--- | :--- | :--- |
| **Overview** | [Overview](https://clubsphere-a11b12.netlify.app/dashboard) | Manager's clubs and events summary |
| **Create Club** | [Create Club](https://clubsphere-a11b12.netlify.app/dashboard/create-club) | Create new clubs |
| **Create Event** | [Create Event](https://clubsphere-a11b12.netlify.app/dashboard/create-event) | Create new events |
| **My Clubs** | [My Clubs](https://clubsphere-a11b12.netlify.app/dashboard/manager/my-clubs) | View, update, and delete owned clubs |
| **Club Members** | [Club Members](https://clubsphere-a11b12.netlify.app/dashboard/manager/club-members) | View members of owned clubs |
| **Events Management** | [Events Management](https://clubsphere-a11b12.netlify.app/dashboard/manager/events-management) | View, update, and delete events |
| **Event Registrations** | [Event Registrations](https://clubsphere-a11b12.netlify.app/dashboard/manager/event-registrations) | Track event registrations |
| **View/Edit Club** (Example) | [View/Edit Club](https://clubsphere-a11b12.netlify.app/dashboard/manager/my-clubs/693451ee0c37c914c5524fab/edit) | Detail view and editing of a club |

### Member Dashboard Pages

| Page Name | URL | Features |
| :--- | :--- | :--- |
| **Overview** | [Overview](https://clubsphere-a11b12.netlify.app/dashboard/member) | Member's activity summary |
| **My Clubs** | [My Clubs](https://clubsphere-a11b12.netlify.app/dashboard/member/my-clubs) | Browse joined clubs |
| **My Events** | [My Events](https://clubsphere-a11b12.netlify.app/dashboard/member/my-events) | View events they are registered for |
| **Payment History** | [Payment History](https://clubsphere-a11b12.netlify.app/dashboard/member/payment-history) | View transaction history |





































# Login info:

@Admin1
admin1@gmail.com

admin2@gmail.com
@Admin2

admin3@gmail.com
@Admin3

>>>>>>>>>>>>>>>>
manager1@gmail.com
@Manager1


manager2@gmail.com
@Manager2

manager3@gmail.com
@Manager3



>>>>>>>>>>>>>>>>>>>>>>>>>
clubMember1@gmail.com
@clubMember1

clubMember2@gmail.com
@clubMember2

clubMember3@gmail.com
@clubMember3















###





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
