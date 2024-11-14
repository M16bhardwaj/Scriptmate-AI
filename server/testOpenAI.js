import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Check if the API key is loaded correctly
console.log("Loaded API Key:", process.env.OPENAI_API_KEY); 

async function testOpenAI() {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello, how are you?" }],
    });

    console.log('OpenAI Response:', completion.choices[0].message);
  } catch (error) {
    console.error('OpenAI Error:', error);
  }
}

testOpenAI();
