import "./App.css";
import { useState } from "react";
import Survey from "./components/survey";
import Translate from "./components/translate";
import Greeting from "./components/greeting";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [surveyVisible, setSurveyVisibility] = useState(false);
  return (
    <>
      <Greeting setSurveyVisibility={setSurveyVisibility} />
      {surveyVisible && <Survey />}
      <Translate />
    </>
  );
}

export default App;
