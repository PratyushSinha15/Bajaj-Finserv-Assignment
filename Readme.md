# BFHL Data Processing REST API

This is a simple Node.js REST API built with Express that processes an array of data and returns a structured JSON response categorizing the elements within the array. The project is structured using the MVC (Model-View-Controller) pattern for better organization and scalability.

---

## Tech Stack

-   **Node.js**: JavaScript runtime environment.
-   **Express.js**: Web framework for Node.js, used to create the server and routes.
-   **Body-Parser**: Middleware to parse incoming request bodies.

---

## API Endpoint

### `POST /bfhl`

This is the main endpoint of the application. It accepts a POST request with a JSON body and returns the processed data.

-   **Method**: `POST`
-   **Route**: `/bfhl`
-   **Success Status Code**: `200`
-   **Error Status Codes**: `400` (Bad Request), `500` (Internal Server Error)

---

## Request & Response Format

### Request Body

The request must be a JSON object with a single key `data`, which holds an array of strings and numbers.

**Example Request:**
```json
{
    "data": ["a", "1", "334", "4", "R", "$"]
}

Success Response Body
If the request is successful, the API returns a JSON object with the following structure:

Example Response:

{
    "is_success": true,
    "user_id": "jane_doe_29072025",
    "email": "jane.doe@example.com",
    "roll_number": "JD12345",
    "odd_numbers": ["1"],
    "even_numbers": ["334", "4"],
    "alphabets": ["A", "R"],
    "special_characters": ["$"],
    "sum": "339",
    "concat_string": "Ra"
}

How to Run Locally
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js (v14 or later recommended)

npm (Node Package Manager)

Installation & Setup
Clone the repository:

git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_DIRECTORY>

Install NPM packages:

npm install

Start the server:

npm start

The server will start running on http://localhost:3000.

How to Use
You can use any API client like Postman, Insomnia, or a simple curl command to test the endpoint.

Using curl:

curl -X POST http://localhost:3000/bfhl \
-H "Content-Type: application/json" \
-d '{"data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]}'

