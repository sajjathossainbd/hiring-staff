/* eslint-disable react/prop-types */
import axios from "axios";
import Markdown from "markdown-to-jsx";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { FaHourglassEnd } from "react-icons/fa6";
import TinnyHeading from "./shared/TinnyHeading";
import { LuBrainCircuit } from "react-icons/lu";

const AiAssistant = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(
    localStorage.getItem("conversation") || ""
  );

  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const saveConversation = (newAnswer) => {
    const conversation = `${answer}\n\nQ: ${question}\nA: ${newAnswer}`;
    localStorage.setItem("conversation", conversation);
    setAnswer(conversation);
  };

  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);
    setAnswer(
      (
        prev
      ) => `${prev}\n\n<div> <div className="skeleton h-4 w-6/12 mt-2"></div>
  <div className="skeleton h-4 w-8/12 mt-2"></div>
  <div className="skeleton h-4 w-10/12 mt-2"></div></div>`
    );

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      const newAnswer = response.data.candidates[0].content.parts[0].text;
      saveConversation(newAnswer);
    } catch (error) {
      console.error(error);
      saveConversation("An error occurred. Please try again later.");
    }
    setGeneratingAnswer(false);
  }

  return (
    <div>
      <TinnyHeading
        title={"My Payments"}
        path={"my-payments"}
        pathName={"My Payments"}
      />

      <div className=" bg-white p-10 rounded-lg">
        <Header title="AI Assistant" />
        <AnswerBox answer={answer} />
        <QuestionForm
          question={question}
          onChange={setQuestion}
          onSubmit={generateAnswer}
          generatingAnswer={generatingAnswer}
        />
      </div>
    </div>
  );
};

const Header = ({ title }) => (
  <div className="text-center mb-6">
    <h1 className="text-4xl font-bold text-blue flex items-center gap-2 justify-center">
      {" "}
      <LuBrainCircuit />
      {title}
    </h1>
  </div>
);

const AnswerBox = ({ answer }) => (
  <div className="bg-blue-50 p-6 rounded-xl mb-6 h-96 overflow-y-auto">
    <Markdown
      className="text-gray-700 whitespace-pre-line"
      options={{
        overrides: {
          Q: {
            component: "span",
            props: {
              className: "font-bold text-blue-700",
            },
          },
          A: {
            component: "span",
            props: {
              className: "font-bold text-green-700",
            },
          },
          strong: {
            component: "span",
            props: { className: "font-semibold text-blue-600" },
          },
        
          li: {
            component: "li",
            props: { className: "mb-2 ml-4 list-disc text-gray-800" },
          },
    
          p: {
            component: "p",
            props: { className: "mb-4 text-gray-600" },
          },
        },
      }}
    >
      {answer}
    </Markdown>
  </div>
);

const QuestionForm = ({ question, onChange, onSubmit, generatingAnswer }) => (
  <form onSubmit={onSubmit} className="rounded-lg flex gap-4 px-6">
    <textarea
      required
      value={question}
      onChange={(e) => onChange(e.target.value)}
      className="bg-white border border-lightGray text-gray text-14 rounded-md focus:ring-blue focus:border-blue block w-full p-3 outline-none transition-all duration-500  
          dark:bg-softGreen dark:text-gray dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue dark:focus:border-blue"
      placeholder="Ask me anything..."
      rows="2"
    ></textarea>
    <button
      type="submit"
      disabled={generatingAnswer}
      className={`px-10 py-3 text-lg font-semibold rounded-lg transition-all duration-300 text-white text-16 ${
        generatingAnswer
          ? "from-green-500 to-darkBlue cursor-not-allowed"
          : "bg-gradient-to-r from-blue to-greenLight hover:from-green-500 hover:to-darkBlue"
      }`}
    >
      {generatingAnswer ? (
        <div className="flex items-center gap-2">
          {" "}
          Generating... <FaHourglassEnd />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          Generating
          <IoMdSend />
        </div>
      )}
    </button>
  </form>
);

export default AiAssistant;
