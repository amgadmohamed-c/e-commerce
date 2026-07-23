
## Overview


The application exposes RESTful APIs for:

* Authentication
* User Management
* Product Management
* Category Management
* Cart Management
* Cart Item Management

The project follows a layered architecture using Express.js, Sequelize ORM, and PostgreSQL to ensure maintainability, scalability, and modularity.

---

## Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Sequelize ORM
* JSON Web Tokens (JWT)
* bcryptjs
* cookie-parser
* dotenv

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Access & Refresh Tokens
* Refresh Token stored in HTTP-Only Cookies

### User Management

* Get User Details
* Update User Details

### Product Management

* Create Product
* Get All Products
* Get Product by ID
* Update Product
* Delete Product
* Pagination Support

### Category Management

* Create Category
* Get Categories
* Get Category by ID
* Update Category
* Delete Category

### Cart Management

* Create Cart
* Delete Cart
* Add Cart Items
* Update Cart Items
* Delete Cart Items
* Stock Validation

### Additional Features

* Logging Middleware
* Global Error Handling
* Authentication Middleware
* Role-based Authorization Middleware
* Pagination Utility

---

## System Architecture

```text
                    Client (Postman)

                            |
                            v

                    Express Application
                            |
            ---------------------------------
            |               |               |
         Logger          JWT Auth       Error Handler
            |               |               |
            ---------------------------------
                            |
                            v

                       Controllers
                            |
                            v

                         Services
                            |
                            v

                    Sequelize ORM
                            |
                            v

                       PostgreSQL
```

---

## Project Structure

```text
tccd/
│
├── config/
│   └── dbconnection.js
│
├── controllers/
│   ├── auth.controller.js
│   ├── user.controller.js
│   ├── product.controller.js
│   ├── category.controller.js
│   ├── cart.controller.js
│   └── cartitem.controller.js
│
├── middlewares/
│   ├── auth.middleware.js
│   ├── admin.middleware.js
│   ├── error.middleware.js
│   └── logger.middleware.js
│
├── models/
│   ├── user.js
│   ├── product.js
│   ├── category.js
│   ├── cart.js
│   ├── cartitem.js
│   └── index.js
│
├── routes/
│   ├── auth.routes.js
│   ├── user.routes.js
│   ├── product.routes.js
│   ├── category.routes.js
│   ├── cart.routes.js
│   └── cartitem.routes.js
│
├── services/
│   ├── auth.service.js
│   ├── user.service.js
│   ├── product.service.js
│   ├── category.service.js
│   └── cart.service.js
│
├── utils/
│   ├── jwt.js
│   ├── ApiError.js
│   └── pagination.js
│
├── .env
├── package.json
├── app.js
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password

JWT_SECRET=your_secret

ACCESS_TOKEN_EXPIRY=24h
REFRESH_TOKEN_EXPIRY=7d
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/amgadmohamed-c/e-commerce.git
```

### Navigate to Project Directory

```bash
cd e-commerce
```

### Install Dependencies

```bash
npm install
```

---

## Database Setup

1. Install PostgreSQL.
2. Create a database.
3. Configure the `.env` file.
4. Ensure PostgreSQL is running.

Example:

```sql
CREATE DATABASE ecommerce;
```

---

## Running the Project

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

The server will start on:

```text
http://localhost:3000
```

---

## API Endpoints

### Authentication

```text
POST   /api/auth/signup
POST   /api/auth/login
POST   /api/auth/logout
```

### Users

```text
GET    /api/users
PATCH  /api/users
```

### Products

```text
GET    /api/products
GET    /api/products/:id
POST   /api/products
PATCH  /api/products/:id
DELETE /api/products/:id
```

### Categories

```text
GET    /api/categories
GET    /api/categories/:id
POST   /api/categories
PATCH  /api/categories/:id
DELETE /api/categories/:id
```

### Cart

```text
POST   /api/cart
DELETE /api/cart
```

### Cart Items

```text
GET    /api/cartItems/:cartId
POST   /api/cartItems/:cartId
GET    /api/cartItems/:cartItemId
PATCH  /api/cartItems/:cartItemId
DELETE /api/cartItems/:cartItemId
```

---

## Pagination

Pagination is implemented for endpoints that return collections, such as:

```text
GET /api/products?page=1&limit=10
```

Example:

```text
GET /api/products?page=2&limit=5
```

---

## Authentication Flow

1. User logs in.
2. Server generates:

   * Access Token
   * Refresh Token
3. Refresh Token is stored in an HTTP-Only cookie.
4. Access Token is used to authenticate protected routes.
5. Middleware validates JWT before accessing secured endpoints.

---

## Logging

The application uses a custom logging middleware that logs:

* Request Time
* Request Method
* Request URL
* Request Headers
* Client IP Address

---

## Error Handling

A global error middleware is implemented to ensure consistent API responses and centralized exception handling.

---




