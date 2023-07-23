Decoder Ring App

This README file provides documentation for the Decoder Ring App. The app allows users to encode and decode messages using three different ciphers: Caesar Cipher, Polybius Cipher, and Substitution Cipher.

Installation

To install the Decoder Ring App, follow these steps:

Clone the repository from GitHub:

git clone https://github.com/your-username/decoder-ring-app.git


Change to the app's directory:

cd decoder-ring-app


Install the dependencies using npm:

npm install

Usage

To use the Decoder Ring App, follow these steps:

Open the app in your preferred text editor.

Import the required functions from the /src directory:

import { caesar } from './caesar.js';
import { polybius } from './polybius.js';
import { substitution } from './substitution.js';


Use the imported functions to encode or decode messages:

Example usage of Caesar Cipher:

const encodedMessage = caesar('Hello, World!', 3); // returns 'Khoor, Zruog!'
const decodedMessage = caesar('Khoor, Zruog!', -3); // returns 'Hello, World!'


Example usage of Polybius Cipher:

const encodedMessage = polybius('Hello, World!'); // returns '3251131343 2543241341!'
const decodedMessage = polybius('3251131343 2543241341!', false); // returns 'hello world!'


Example usage of Substitution Cipher:

const encodedMessage = substitution('Hello, World!', 'xoyqmcgrukswaflnthdjpzibev'); // returns 'rmjjp, ujpjf!'
const decodedMessage = substitution('rmjjp, ujpjf!', 'xoyqmcgrukswaflnthdjpzibev', false); // returns 'hello, world!'

Development

To contribute to the Decoder Ring App, follow these steps:

Fork the repository on GitHub.

Clone the forked repository to your local machine:

git clone https://github.com/your-username/decoder-ring-app.git


Change to the app's directory:

cd decoder-ring-app


Install the dependencies using npm:

npm install


Make your changes and test the app using the provided test scripts.

Commit your changes and push them to your forked repository.

Submit a pull request to the original repository.

Testing

To run the tests for the Decoder Ring App, use the following command:

npm test


The tests are located in the /test directory and are written using the Jest testing framework. Each cipher function in the /src directory has corresponding test files.
