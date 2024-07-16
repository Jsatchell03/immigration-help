import { useState, useEffect } from "react";
import jsonData from "../assets/test-data.json";

const loadData = () => JSON.parse(JSON.stringify(jsonData));

function Survey() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [questionStack, setQuestionStack] = useState<number[]>([]);
  const [data, setData] = useState(loadData);
  //   question stack is an aarray of question ids that i pop from for the prev button
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await fetch("../assets/test-data.json");
  //       result.json().then((json) => {
  //         setData(json.questions[currQuestion].content);
  //       });
  //     };
  //     fetchData();
  //   }, []);

  return (
    <>
      <h1>{data.questions[currQuestion].content}</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          console.log(questionStack[questionStack.length - 1]);
          setCurrQuestion(questionStack[questionStack.length - 1]);
          setQuestionStack(questionStack.slice(0, questionStack.length - 1));
        }}
      >
        Previous
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          console.log("Next");
          setQuestionStack([...questionStack, currQuestion]);
          setCurrQuestion(currQuestion + 1);
        }}
      >
        Next
      </button>
    </>
  );
}

export default Survey;
