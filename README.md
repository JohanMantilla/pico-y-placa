<p align="center">
  <a href="https://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
  </a>
</p>

# Pico y Placa API

## Overview

This project is a backend solution built with **NestJS** to validate whether a vehicle can circulate under the **Pico y Placa** traffic restriction system used in Quito, Ecuador. A lightweight frontend interface is included to simplify API testing without relying only on Postman.


## Business Rules

### Restricted plate digits by day

- Monday: 1, 2
- Tuesday: 3, 4
- Wednesday: 5, 6
- Thursday: 7, 8
- Friday: 9, 0

### Restricted time ranges

- 07:00 – 09:30
- 16:00 – 19:30

Outside these hours, vehicles can circulate normally.


## Tech Stack

- NestJS
- TypeScript
- Jest


## Requirements

- Node.js >= 18
- npm >= 9



## Installation

### Clone the repository

```bash
git clone https://github.com/JohanMantilla/pico-y-placa.git
cd pico-y-placa
````

### Install dependencies

```bash
npm install
```

### Run the application

```bash
npm run start:dev
```


## Application URLs

### Frontend (static form)

```text
http://localhost:3000
```

### API Endpoint

```text
http://localhost:3000/api/v1/vehicle-restriction
```

## API Usage

### Endpoint

```http
POST /api/v1/vehicle-restriction
```

### Example Request Body

```json
{
  "licensePlate": "PBZ-4565",
  "date": "2026-05-06",
  "time": "06:30"
}
```

### Success Response Example

```json
{
  "licensePlate": "PBZ-4565",
  "date": "2026-05-06",
  "time": "06:30"
}
```

### Error Response Example

```json
{
  "statusCode": 400,
  "message": "El vehículo no puede circular debido a la restricción de pico y placa",
  "error": "Bad Request"
}
```
E
If the vehicle cannot circulate, the API returns a `400 Bad Request` response.
If the vehicle can circulate, the request is processed successfully.


## Tests

Unit tests were implemented using Jest to validate the Pico y Placa business rules.

The tests focus on the domain layer, covering scenarios such as:

* Restricted days and times
* Allowed time ranges

### Run tests

```bash
npm run test
```



## Architecture

The project follows a layered architecture using:

* Controllers
* DTO validation
* Application services
* Domain business rules

This structure helps keep the code modular, maintainable, and easy to understand.


## Notes

* No database is required for this challenge.
* The application uses in-memory logic only.
* The main goal of this solution is to correctly validate Pico y Placa rules while maintaining clean and readable code.

