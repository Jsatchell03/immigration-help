import { useState, useEffect } from "react";
import jsonData from "../assets/test-data.json";

const loadData = () => JSON.parse(JSON.stringify(jsonData));
interface Props {
  setSurveyVisibility: (visible: boolean) => void;
  setGreetingVisibility: (visible: boolean) => void;
}
function Survey(props: Props) {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [questionStack, setQuestionStack] = useState<number[]>([-1]);
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
      <h1>
        {currQuestion === -1 ? null : data.questions[currQuestion].content}
      </h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          if (questionStack[questionStack.length - 1] == -1) {
            props.setGreetingVisibility(true);
            props.setSurveyVisibility(false);
            return null;
          }
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
