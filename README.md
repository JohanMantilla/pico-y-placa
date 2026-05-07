<p align="center">
  <a href="https://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
  </a>
</p>

# Pico y Placa API

This project is a simple backend solution built with **NestJS** to validate whether a vehicle can circulate under the **Pico y Placa** traffic restriction system used in Quito, Ecuador.

A basic frontend form is included to test the API without relying only on Postman.

---

## Pico y Placa Rules

**Restricted plate digits by day:**

- Monday: 1, 2  
- Tuesday: 3, 4  
- Wednesday: 5, 6  
- Thursday: 7, 8  
- Friday: 9, 0  

**Restricted time ranges:**

- 07:00 – 09:30  
- 16:00 – 19:30  

Outside these hours, vehicles can circulate normally.

---

## Project setup

1. Clone the repository

```bash
git clone https://github.com/JohanMantilla/pico-y-placa.git
```

2. Install dependencies
```
npm install
```

3. Run the application
```
npm run start:dev
```

## Application URLs
### Frontend (static form):
```
http://localhost:3000
```
### API endpoint:
```
http://localhost:3000/api/v1/vehicle-restriction
```

## API usage
### Endpoint
```
POST /api/v1/vehicle-restriction
```
### Example body
```
POST /api/v1/vehicle-restriction
```
If the vehicle cannot circulate, the API returns a 400 Bad Request response.
If it can circulate, the request data is returned successfully.

## Tests
Unit tests were implemented using Jest to validate the Pico y Placa business rules.
The tests focus on the domain layer, covering scenarios such as:

* Restricted days and times
* Allowed time ranges

To run the tests:
```
npm run test
```

## Notes

* The project uses in-memory storage.
* No database is required.
* The main goal of this solution is to correctly validate Pico y Placa rules and keep the code clear and easy to understand.
