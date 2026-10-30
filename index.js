import { ChatGroq } from "@langchain/groq";
import rl from "readline/promises";
import dotenv from "dotenv";

dotenv.config();

const model = new ChatGroq({
  model: "openai/gpt-oss-120b",
  apiKey: process.env.GROQ_API_KEY,
});

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function chat() {
  while (true) {
    const question = await readline.question("You: ");

    const response = await model.stream([
      {
        role: "human",
        content: question,
      },
    ]);

    process.stdout.write("GROQ: ");
    for await (const chunk of response) {
      process.stdout.write(chunk.text);
    }
    process.stdout.write("\n");
  }
}
chat();
