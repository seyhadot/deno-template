const config = {
  "PORT": Deno.env.get("PORT") || 4000,
  "DB_URI": Deno.env.get("DB_URI") || "mongodb://localhost:27017",
  "DB": Deno.env.get("DB") || "deno_api",
};

export default config;
