
const dotenv = require('dotenv').config();
export const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.log("set mongo uri");
    process.exit();
}

export const JWT_SECRET = process.env["JWT_SECRET"];

if (!JWT_SECRET) {
    console.log("No JWT secret string");
    process.exit();
}