import "./App.css";
import { useState } from "react";
import Survey from "./components/survey";
import Translate from "./components/translate";
import Greeting from "./components/greeting";
import Alert from "./components/alert";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [surveyVisible, setSurveyVisibility] = useState<boolean>(false);
  const [greetingVisible, setGreetingVisibility] = useState<boolean>(true);
  const [alertVisible, setAlertVisibility] = useState<boolean>(false);
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
          setAlertVisibility={setAlertVisibility}
        />
      )}
      {alertVisible && <Alert />}
      <Translate />
    </>
  );
}

export default App;
