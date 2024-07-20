import { useState, useEffect } from "react";
import jsonData from "../assets/test-data.json";

const loadData = () => JSON.parse(JSON.stringify(jsonData));
interface Props {
  setSurveyVisibility: (visible: boolean) => void;
  setGreetingVisibility: (visible: boolean) => void;
}

type Question = {
  id: number;
  content: string;
  type: string;
  options: string[];
};

function Survey(props: Props) {
  const [currQuestion, setCurrQuestion] = useState<number>(0);
  const [questionStack, setQuestionStack] = useState<number[]>([-1]);
  const [data, setData] = useState(loadData);
  const [response, setResponse] = useState<string>("");
  const [inputValues, setInputValues] = useState(new Map<number, string>());
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

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResponse(e.target.value);
  }
  // This function will return the JSX for the answer choices. The function takes a question and will return JSX based on the question type using a switch statement
  function getOptions(questionData: Question) {
    switch (questionData.type) {
      case "number-value":
        return (
          <input
            type="number"
            className="form-control"
            id="number-value-input"
            value={response}
            onChange={handleFormChange}
          />
        );
      case "search-dropdown":
        break;
      case "dropdown":
        break;
      case "radio":
        break;
      case "multiple-selection":
    }
  }
  return (
    <>
      <h1>
        {currQuestion === -1 ? null : data.questions[currQuestion].content}
      </h1>
      {getOptions(data.questions[currQuestion])}
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
          setInputValues(
            new Map<number, string>(
              inputValues.set(data.questions[currQuestion].id, response)
            )
          );
          console.log(inputValues);
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
