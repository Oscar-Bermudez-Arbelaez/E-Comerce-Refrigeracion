import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/authroutes.js";  // ✅ AÑADIDO

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Servidor corriendo correctamente");
});

// Usar rutas
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);  // ✅ AÑADIDO

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor en puerto ${PORT} [${NODE_ENV}]`);
});

export default app;
