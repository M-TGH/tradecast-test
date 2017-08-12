# Tradecast Test

This is a Tradecast Test project. It's made so a user can upload a .mp4 file and see the metadata of the uploaded file.

## Getting Started

This repository requires all of the below tools/frameworks to be installed*:

* NodeJS (v6.11.2 or higher)
* NPM (v4.0.0 or higher)

*The versions are the ones that were used when creating the project, often times lower versions are still compatible.

### Installation

 Here are the instructionts for properly setting up the project:
 
 * Clone the repository
 * Run `npm install` inside the repository folder
 * Copy, paste and then rename the example.env file to .env 
 * Change the port in the .env file if you want to (default from example.env is 8081)
 * Run `node ffprobe.js`
 
The project is now running on localhost:8081 (if the port is left unchanged)

### Usage

Once the project is opened in your browser you can upload a file and press the submit button. After this it'll load the metadata from the file and display it to you.
