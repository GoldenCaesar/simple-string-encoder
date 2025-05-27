# simple-string-encoder

Encodes & Decodes and Hacks Strings with passwords

## Purpose and Functionality

This application allows you to encode and decode strings using a password. It provides a simple web interface to perform these operations, as well as a backend API for programmatic access. The encoding process involves Base64 transformation, a custom password-based key generation, and a compression step to further obfuscate the data.

## API Endpoints

The application exposes the following API endpoints:

### `POST /api/encode`

*   **Method:** `POST`
*   **Description:** Encodes the provided string using the given password.
*   **Request Body:** JSON object
    *   `string` (string, required): The string to be encoded.
    *   `password` (string, required): The password to use for encoding.
*   **Response:**
    *   `200 OK`: Returns the encoded string directly in the response body.

### `POST /api/decode`

*   **Method:** `POST`
*   **Description:** Decodes the provided string using the given password.
*   **Request Body:** JSON object
    *   `string` (string, required): The string to be decoded.
    *   `password` (string, required): The password to use for decoding.
*   **Response:**
    *   `200 OK`: Returns the decoded string directly in the response body.

## How to Run the Project Locally

To run this project on your local machine, follow these steps:

1.  **Prerequisites:**
    *   Ensure you have [Node.js](https://nodejs.org/) installed.

2.  **Clone the repository (if you haven't already):**
    ```bash
    git clone https://github.com/andrewgeorgemitchell/simple-string-encoder.git
    cd simple-string-encoder
    ```

3.  **Install dependencies:**
    Open your terminal in the project root directory and run:
    ```bash
    npm install
    ```

4.  **Start the server:**
    After installation is complete, start the application with:
    ```bash
    npm start
    ```

5.  **Access the application:**
    The server will start, and you should see a message like `Starting Server on http://localhost:8080`.
    You can access the web interface by opening your browser and navigating to `http://localhost:8080`.

## Frontend Interface

The project includes a simple web interface for easy interaction with the encoding and decoding functionalities. After starting the server, you can access this interface by navigating to `http://localhost:8080` in your web browser.

The interface provides forms to:
*   Input a string and a password for encoding.
*   Input an encoded string and a password for decoding.

The frontend files are located in the `public` directory.

## Technology Stack

*   **Backend:** Node.js, Express.js
*   **Core Functionality:** Custom JavaScript for encoding/decoding, using `btoa` and `atob` for Base64 operations.
*   **Frontend:** HTML, CSS (implicitly, though not explicitly managed via a framework), JavaScript.

## Authors

*   Stephen Miller
*   Andrew Mitchell

## License

This project is licensed under the ISC License. See the `LICENSE` file for more details (if one exists, or refer to the ISC license terms).
