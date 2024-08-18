import "./styles/App.css";
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
  const [alertMessage, setAlertMessage] = useState<string>("");
  return (
    <>
      {greetingVisible && (
        <div className="greeting-wrapper">
          <Greeting
            setSurveyVisibility={setSurveyVisibility}
            setGreetingVisibility={setGreetingVisibility}
          />
        </div>
      )}

      {surveyVisible && (
        <Survey
          setGreetingVisibility={setGreetingVisibility}
          setSurveyVisibility={setSurveyVisibility}
          setAlertVisibility={setAlertVisibility}
          setAlertMessage={setAlertMessage}
        />
      )}

      {alertVisible && (
        <div className="alert-wrapper">
          <Alert message={alertMessage} />
        </div>
      )}

      <Translate />
    </>
  );
}

export default App;
