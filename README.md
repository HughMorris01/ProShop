# ProShop eCommerce Platform

> eCommerce platform built with the MERN stack & Redux.

<img src="./frontend/public/images/screens.png">

ProShop | Full-Stack E-Commerce Platform
A feature-rich, full-stack e-commerce solution designed with the MERN (MongoDB, Express, React, Node.js) architecture. This platform provides a seamless shopping experience for customers and a comprehensive management suite for administrators.

🚀 Tech Stack
Frontend: React.js, Redux (State Management), React-Bootstrap (UI Framework)

Backend: Node.js, Express.js

Database: MongoDB with Mongoose ODM

Authentication: JSON Web Tokens (JWT) & Bcrypt.js

Payments: PayPal SDK Integration

🛠 Core Features
User Experience
Product Discovery: Real-time search, category pagination, and a "Top Rated" product carousel.

Shopping Cart: Persistent cart functionality with real-time inventory adjustment.

Review System: Verified user ratings and comment sections for every product.

Secure Checkout: Integrated multi-step checkout process with PayPal and Credit Card support.

Administrative Suite
User Management: Full CRUD capabilities for user profiles and permissions.

Inventory Control: Admin dashboard to add, edit, or remove products and track stock levels.

Order Fulfillment: centralized dashboard to track payment status and toggle delivery status.

📁 Project Overview
Environment Configuration
To run this project locally, create a .env file in the root directory and include the following:

NODE_ENV: Set to development or production.

MONGO_URI: Your MongoDB connection string.

JWT_SECRET: A secure string for token encryption.

PAYPAL_CLIENT_ID: Your PayPal developer credentials.

⚙️ Installation & Setup
Clone & Install Dependencies:

Bash
npm install && cd frontend && npm install
Seed the Database (Optional):

Bash
# This will populate the DB with sample products and users
npm run data:import
Start the Development Server:

Bash
# Runs both backend and frontend concurrently
npm run dev
Tips for "Sprucing" this Repo:
Replace the Sample Data: Since this is based on a popular tutorial, many recruiters will recognize the "Airpods" and "iPhone" sample data. Replacing those with unique products (like "Vintage Cameras" or "Mechanical Keyboards") immediately makes the project look more original.

Use the Screenshot: Since you already have that great collage of the site, you should definitely embed it at the very top of the README under the main title.

Clean up the License: Instead of pasting the whole MIT text, you can just say "Distributed under the MIT License. See LICENSE for more information." and keep a separate file called LICENSE.
