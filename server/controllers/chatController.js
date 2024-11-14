export const chat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: 'Message is required' });
    }

    console.log('Received message:', message);

    const completion = await req.openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    console.log('OpenAI response:', completion.choices[0].message);

    const aiResponse = completion.choices[0].message.content;

    res.json({ message: aiResponse });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ 
      message: 'Error processing your request', 
      error: error.message,
      stack: error.stack
    });
  }
};