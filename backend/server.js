const express = require("express");
const cors = require("cors");
require("dotenv").config();   // ✅ Load environment variables

const app = express();

app.use(cors({
  origin: "http://localhost:8081"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Import your models (this contains mongoose)
const db = require("./app/models");

db.mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Test application." });
});

require("./app/routes/turorial.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});