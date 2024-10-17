require("dotenv").config(); // Load environment variables from .env file

const { Sequelize } = require("sequelize");

// Create a new Sequelize instance to connect to the PostgreSQL database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432, // Explicitly set the port
    dialect: "postgres",
  }
);


// Test the connection to the PostgreSQL database
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to PostgreSQL has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Export the sequelize instance for use in other parts of the application
module.exports = sequelize;
