// src/components/CreateScript.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { createScript } from "../api"; // Import your API function
import { Save } from "lucide-react"; // Import Lucide icon
import { useAuth } from "../context/AuthContext"; // Import your auth context

const CreateScript = () => {
  const { user } = useAuth(); // Get user from context
  const [title, setTitle] = useState(""); // State for script title
  const [prompt, setPrompt] = useState(""); // State for user prompt
  const [scriptContent, setScriptContent] = useState(""); // State for generated script content
  const [loading, setLoading] = useState(false); // Loading state for button
  const [error, setError] = useState(""); // State for error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before API call
    setError(""); // Clear previous errors
    const userId = user ? user.id : null; // Access userId from user object
    const scriptData = { userId, title, prompt };

    try {
      const response = await createScript(scriptData); // Call the createScript API
      setScriptContent(response.data.content); // Set the generated script content
      setTitle(""); // Reset title input
      setPrompt(""); // Reset prompt input
    } catch (error) {
      console.error("Error creating script:", error); // Log error in console
      setError("Failed to generate script."); // Set error message
    } finally {
      setLoading(false); // Set loading to false after API call
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Create a New Script</h1>
      {error && <p className="text-red-500">{error}</p>}{" "}
      {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Script Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Update title state
          className="border p-2 w-full" // Full width for better layout
          required
        />
        <textarea
          placeholder="Enter prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)} // Update prompt state
          className="border p-2 w-full mt-2" // Full width with margin
          required
        />
        <button
          type="submit"
          className={`bg-blue-500 text-white p-2 mt-2 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading} // Disable button when loading
        >
          <Save className="inline mr-1" />
          {loading ? "Generating..." : "Generate Script"}
        </button>
      </form>
      {scriptContent && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Generated Script:</h2>
          <pre className="border p-2">{scriptContent}</pre>
        </div>
      )}
    </div>
  );
};

export default CreateScript;
