import "dotenv-safe/config";
import path from "path";
import { createConnection } from "typeorm";

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    synchronize: true,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [],
  });
};

main().catch((err) => {
  console.error(err);
});
