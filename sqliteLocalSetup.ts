import { BgentRuntime, SqliteDatabaseAdapter } from "eliza";
import { Database } from "sqlite3";
const sqliteDatabaseAdapter = new SqliteDatabaseAdapter(new Database(":memory:"));

const runtime = new BgentRuntime({
    serverUrl: "https://api.openai.com/v1",
    token: process.env.OPENAI_API_KEY ?? (() => { throw new Error("OPENAI_API_KEY is required") })(),
    databaseAdapter: sqliteDatabaseAdapter,
    actions: [
      /* your custom actions */
    ],
    evaluators: [
      /* your custom evaluators */
    ],
    model: "gpt-3.5-turbo", // whatever model you want to use
    embeddingModel: "text-embedding-3-small", // whatever model you want to use
  })