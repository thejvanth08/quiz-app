import { useEffect, useState } from "react";
import Question from "./Question";
import Options from "./Options";
// for dev
// import data from "./test.js";

function App() {
  const [quesNum, setQuesNum] = useState(0);
  const [results, setResults] = useState([]);
  // for displaying score
  // has to be done afterwards
  const [score, setScore] = useState(0);

  useEffect(() => {
    // setResults(data);
    const getData = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=10&type=multiple"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const { results } = await response.json();
        setResults(results);
        console.log(results);
      } catch (error) {
        console.error("There was a problem fetching the data:", error.message);
      }
    };

    getData();
  }, []);

  const handleNextQuestion = () => {
    setQuesNum(quesNum + 1);
  };

  // must be available to return markup also to use it
  let question = "";
  let correct_answer = "";
  let incorrect_answers = [];

  if (results.length !== 0) {
    const {
      question: q,
      correct_answer: ca,
      incorrect_answers: ia,
    } = results[quesNum];
    // to overcome block scope issue
    question = q;
    correct_answer = ca;
    incorrect_answers = ia;
  }

  return (
    <main className="h-screen bg-sky-400 px-10 sm:px-20 pt-24 pb-8 overflow-auto">
      {results.length !== 0 ? (
        <div className="max-h-screen mx-auto flex flex-col justify-center items-center">
          <Question question={question} number={quesNum} />
          <Options crt={correct_answer} inCrt={incorrect_answers} score={score} setScore={setScore} />
          {quesNum < results.length - 1 && (
            <button
              className="bg-sky-100 text-sky-500 font-bold text-xl mt-6 px-6 py-2 rounded-lg hover:rounded-2xl"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}
        </div>
      ) : (
        <h1>Wait, Questions are loading...</h1>
      )}
    </main>
  );
}

export default App;
