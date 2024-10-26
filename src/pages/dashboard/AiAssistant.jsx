import axios from "axios";
import Markdown from "markdown-to-jsx";
import { useState } from "react";

const AiAssistant = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [generatingAnswer, setGeneratingAnswer] = useState(false);

    async function generateAnswer(e) {
        setGeneratingAnswer(true);
        e.preventDefault();
        setAnswer("Loading your answer... \n It might take up to 10 seconds");
        try {
            const response = await axios({
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT}`,
                method: "post",
                data: {
                    contents: [{ parts: [{ text: question }] }],
                },
            });

            setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
        } catch (error) {
            console.log(error);
            setAnswer("Sorry - Something went wrong. Please try again!");
        }
        setGeneratingAnswer(false);
    }

    return (
        <div className="xl:h-[600px] flex flex-col gap-5 mb-10">
            <div className="py-5">
                <h1 className="text-4xl font-bold text-blue-500 mb-4">AI Assistant</h1>
            </div>
            <div className="flex-1 ">
                <div className="w-full overflow-y-auto bg-white rounded-lg shadow-lg p-7 h-[400px]">
                    <Markdown  className="text-gray-800">{answer}</Markdown>
                </div>
            </div>
            <form onSubmit={generateAnswer} className="w-full bg-white p-4 rounded-lg shadow-lg flex">

                <textarea
                    required
                    className="border border-gray-300 rounded-lg flex-1 p-3 mr-2 resize-none transition-all duration-300 focus:border-blue focus:shadow-lg"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask anything"
                ></textarea>
                <button
                    type="submit"
                    className={`bg-blue text-white px-3 py-1 rounded-md hover:bg-darkBlue transition-all duration-300 ${generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={generatingAnswer}
                >
                    {generatingAnswer ? "Generating..." : "Generate"}
                </button>
            </form>
        </div>
    );
};

export default AiAssistant;
