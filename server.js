// server.js
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const SECRET_KEY = "tu_clave_secreta";

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Simulación de autenticación
  if (email === "user@gmail.com" && password === "123") {
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Credenciales incorrectas" });
  }
});

app.listen(5000, () => {
  console.log("Servidor corriendo en http://localhost:5000");
});