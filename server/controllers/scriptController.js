const Script = require('../models/script');
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const createScript = async (req, res) => {
  try {
    const { title, prompt } = req.body;

    const openAIResponse = await openai.completions.create({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 500,
    });

    const content = openAIResponse.choices[0].text;

    const script = await Script.create({ userId: req.user.id, title, content });
    res.status(201).json(script);
  } catch (error) {
    console.error('Error in createScript:', error);
    res.status(500).json({ message: 'Failed to generate script', error: error.message });
  }
};

const getScripts = async (req, res) => {
  try {
    const scripts = await Script.find({ userId: req.user.id });
    res.json(scripts);
  } catch (error) {
    console.error('Error in getScripts:', error);
    res.status(500).json({ message: 'Failed to retrieve scripts', error: error.message });
  }
};

const updateScript = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedScript = await Script.findOneAndUpdate(
      { _id: id, userId: req.user.id },
      { title, content },
      { new: true }
    );
    if (!updatedScript) {
      return res.status(404).json({ message: 'Script not found or you do not have permission to update it' });
    }
    res.json(updatedScript);
  } catch (error) {
    console.error('Error in updateScript:', error);
    res.status(500).json({ message: 'Failed to update script', error: error.message });
  }
};

const deleteScript = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedScript = await Script.findOneAndDelete({ _id: id, userId: req.user.id });
    if (!deletedScript) {
      return res.status(404).json({ message: 'Script not found or you do not have permission to delete it' });
    }
    res.json({ message: 'Script deleted successfully' });
  } catch (error) {
    console.error('Error in deleteScript:', error);
    res.status(500).json({ message: 'Failed to delete script', error: error.message });
  }
};

module.exports = { createScript, getScripts, updateScript, deleteScript };