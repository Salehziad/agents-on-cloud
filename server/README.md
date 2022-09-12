## Description of the project

### an online platform that facilitates consumer-to-consumer sales through its website

### What problem or pain point does it solve?
- Reducing the amount of time, effort, and money spent on product search.
- It provides a simple channel for connecting seller and buyer.
<br>
<br>

# Server Url

## [Deployed Link on Heroku](https://store-server-saleh.herokuapp.com/)
<br>

## Configuration

- README.md - contains documentation
- .env - contains env variables (should be git ignored)
- .gitignore - contains a .gitignore file
- package.json - contains npm package config
- server.js - the entry point for your application
- src/ - contains your core application files and folders and server file which contains the main server
<br>

## Dependecies

```js
{
    "body-parser": "^1.20.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.2",
    "express": "^4.18.1",
    "express-jwt": "^5.3.1",
    "express-validator": "^5.3.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.6.0",
    "mongose": "^0.0.2-security",
    "morgan": "^1.10.0",
    "uuid": "^8.3.2"
}
```
## Installation

## .env sample 
```js
{
MONGODB_URI=mongodb+srv://12345:12345@cluster0.u6ppf.mongodb.net/?retryWrites=true&w=majority
PORT=5000
SECRET=hdfskjhfksjdfsdf5s2d3f6sf54s53df4s3dfsdf5435s4fd534fd
}
```
server requires Node.js v14+ to run.

Install the dependencies and devDependencies and start the server.

    cd server
    npm i
    npm start


## License

MIT