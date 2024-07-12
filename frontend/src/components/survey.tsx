import { useState, useEffect } from "react";
import jsonData from "../assets/test-data.json";

const loadData = () => JSON.parse(JSON.stringify(jsonData));

function Survey() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [data, setData] = useState(loadData);
  //   question stack is an aarray of question ids that i pop from for the prev button
  let questionStack: number[] = [-1];

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
      <h1>{data.questions[0].content}</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setCurrQuestion(
            questionStack.pop() == undefined ? -1 : questionStack.pop()
          );
        }}
      >
        Previous
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          questionStack.push(currQuestion);
          setCurrQuestion(currQuestion + 1);
        }}
      >
        Next
      </button>
    </>
  );
}

export default Survey;
