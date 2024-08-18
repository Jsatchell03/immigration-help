import { useState, useEffect } from "react";
import jsonData from "../assets/test-data.json";

const loadData = () => JSON.parse(JSON.stringify(jsonData));
let formChanged: boolean = false;
interface Props {
  setSurveyVisibility: (visible: boolean) => void;
  setGreetingVisibility: (visible: boolean) => void;
  setAlertVisibility: (visible: boolean) => void;
  setAlertMessage: (message: string) => void;
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
  useEffect(() => {
    props.setAlertMessage(
      "Please complete all required fields before moving on"
    );
  }, []);

  function handleFormChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
    // | React.FormEvent<HTMLFormElement>
  ) {
    formChanged = true;
    console.log(formChanged);
    props.setAlertVisibility(false);
    setResponse(e.target.value);
  }

  // function handleMultiSelectForm() {}
  // The multi select form will need extra logic that will be handled thru this function
  // This function will return the JSX for the answer choices. The function takes a question and will return JSX based on the question type using a switch statement
  // Need to add a default value to the form. Something that makes it clear what type of data needs to be input
  function getOptions(questionData: Question) {
    let i = 0;
    switch (questionData.type) {
      case "number-value":
        i = 0;
        return (
          <div className="number-input">
            <input
              type="number"
              className="form-control number-value"
              id="number-value-input"
              value={response}
              onChange={handleFormChange}
            />
          </div>
        );
      case "search-dropdown":
      case "dropdown":
        i = 0;
        const dropdownOptions = questionData.options.map((option) => (
          <option key={(i += 1)} value={option}>
            {option}
          </option>
        ));
        return (
          <select
            className="form-select dropdown"
            aria-label="Default select example"
            value={response}
            onChange={handleFormChange}
          >
            <option value="-1" disabled>
              Please select...
            </option>
            {dropdownOptions}
          </select>
        );
      case "multiple-selection":
      case "radio":
        i = 0;
        const radioOptions = questionData.options.map((option) => (
          <div className="form-check" key={(i += 1)}>
            <input
              type="radio"
              name="radio-question"
              className="form-check-input radio"
              value={option}
            ></input>
            <label className="form-check-label">{option}</label>
          </div>
        ));
        return <form onChange={handleFormChange}>{radioOptions}</form>;
    }
  }

  return (
    <div className="survey-wrapper">
      <h1 className="question">
        {currQuestion === -1 ? null : data.questions[currQuestion].content}
      </h1>
      {getOptions(data.questions[currQuestion])}
      <div className="control-btns-wrapper">
        <button
          type="button"
          className="btn btn-primary prev"
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
          className="btn btn-primary next"
          onClick={() => {
            if (formChanged) {
              console.log("Next");
              setInputValues(
                new Map<number, string>(
                  inputValues.set(data.questions[currQuestion].id, response)
                )
              );
              console.log(inputValues);
              setQuestionStack([...questionStack, currQuestion]);
              setCurrQuestion(currQuestion + 1);
              formChanged = false;
            } else {
              console.log("Form Unchanged " + formChanged);
              props.setAlertVisibility(true);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// Need a better way to handel data entry. I think a default value that is checked when question changes. Throw an alert or something similar when the
// default value is not changed. This prevents many of the errors we are dealing with now.

export default Survey;
