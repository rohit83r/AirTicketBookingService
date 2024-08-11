# Air Ticket Booking Service

## Overview

The Air Ticket Booking Service is a Node.js-based microservice designed to manage the booking process for air tickets. It includes features for creating, updating, and managing bookings, and integrates seamlessly with other services in an airline reservation system. This service is built with scalability and modularity in mind, using Express for the web framework and Sequelize as the ORM for interacting with the database.

## Features

- **Booking Management**: Create, update, delete, and view bookings.
- **Database Integration**: Uses Sequelize to manage booking data in a relational database.
- **Error Handling**: Comprehensive error management with custom error classes.
- **Message Queue**: Implements a message queue system for asynchronous operations.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd AirTicketBookingService-master
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the root directory of the project to store environment variables. Here is an example:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=air_ticket_booking
JWT_SECRET=your_jwt_secret_key
```

Replace the placeholders with your actual database credentials and desired JWT secret.

## Database Setup

Ensure that your database is set up and running. The service uses Sequelize for ORM, and the following commands can be used to manage the database:

1. **Run migrations**:
   ```bash
   npx sequelize-cli db:migrate
   ```

2. **Seed the database** (optional):
   ```bash
   npx sequelize-cli db:seed:all
   ```

This will create the necessary tables and populate initial data if applicable.

## Running the Application

To start the server, use the following command:

```bash
npm start
```

The server will start on the port specified in the `.env` file (default is 3000). The API can then be accessed at `http://localhost:3000`.

## API Endpoints

Here is a list of the main API endpoints:

### **Booking Endpoints**

- **POST `/api/v1/bookings`**
  - Creates a new booking.
  - **Request Body**:
    ```json
    {
      "flightId": "12345",
      "userId": "67890",
      "seatNumber": "12A",
      "status": "confirmed"
    }
    ```

- **GET `/api/v1/bookings/:id`**
  - Retrieves the details of a specific booking.
  - **Parameters**:
    - `id`: The ID of the booking.

- **PUT `/api/v1/bookings/:id`**
  - Updates an existing booking.
  - **Request Body**:
    ```json
    {
      "seatNumber": "14C",
      "status": "cancelled"
    }
    ```

- **DELETE `/api/v1/bookings/:id`**
  - Deletes a specific booking.

## Project Structure

Here's a high-level overview of the project's structure:

```
AirTicketBookingService-master/
├── src/
│   ├── config/
│   │   └── serverConfig.js            # Server configuration
│   ├── controllers/
│   │   └── booking-controller.js      # Booking-related controllers
│   ├── migrations/
│   │   ├── 20240807194206-create-booking.js   # Booking migration
│   │   └── 20240807200536-modify_bookings_add_new_fields.js # Modify Booking migration
│   ├── models/
│   │   └── booking.js                 # Booking model definition
│   ├── repository/
│   │   └── booking-repository.js      # Booking data access layer
│   ├── routes/
│   │   └── v1/                        # API routes (version 1)
│   ├── services/
│   │   └── booking-service.js         # Booking business logic
│   ├── utils/
│   │   ├── helper.js                  # Helper functions
│   │   ├── messageQueue.js            # Message queue management
│   │   └── error/                     # Error handling utilities
│   │       ├── app-error.js
│   │       ├── service-error.js
│   │       ├── validation-error.js
│   └── index.js                       # Entry point of the application
├── .gitignore                         # Git ignore file
├── README.md                          # Project documentation
├── package.json                       # Node.js dependencies and scripts
└── package-lock.json                  # Dependency lock file
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
