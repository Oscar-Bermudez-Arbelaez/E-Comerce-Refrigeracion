// test-db.js
import client from "./src/config/db.js";

console.log("🔍 Probando conexión a la base de datos...");

client.query("SELECT NOW()")
  .then(res => {
    console.log("✅ Conectado a la DB:", res.rows[0]);
    client.end();
  })
  .catch(err => {
    console.error("❌ Error al conectar a la base de datos:", err);
    client.end();
  });
