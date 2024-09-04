const dotEnv = require("dotenv");
const fs = require("fs");

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';

if (fs.existsSync(envFile)) {
  dotEnv.config({ path: envFile });
} else {
  dotEnv.config(); // Fallback to default .env file
}

// Log để debug
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('Loaded env file:', envFile);
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('PORT:', process.env.PORT);
console.log('APP_SECRET:', process.env.APP_SECRET);

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
};