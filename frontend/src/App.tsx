import "./App.css";
import { useState } from "react";
import Survey from "./components/survey";
import Translate from "./components/translate";
import Greeting from "./components/greeting";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [surveyVisible, setSurveyVisibility] = useState(false);
  const [greetingVisible, setGreetingVisibility] = useState(true);
  return (
    <>
      {greetingVisible && (
        <Greeting
          setSurveyVisibility={setSurveyVisibility}
          setGreetingVisibility={setGreetingVisibility}
        />
      )}
      {surveyVisible && (
        <Survey
          setGreetingVisibility={setGreetingVisibility}
          setSurveyVisibility={setSurveyVisibility}
        />
      )}
      <Translate />
    </>
  );
}

export default App;
