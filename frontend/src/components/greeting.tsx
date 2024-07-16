import { useState } from "react";

interface Props {
  setSurveyVisibility: (visible: boolean) => void;
  setGreetingVisibility: (visible: boolean) => void;
}

function Greeting(props: Props) {
  return (
    <>
      <h1>Welcome To Immigration Help Click Below To Begin</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          props.setSurveyVisibility(true);
          props.setGreetingVisibility(false);
        }}
      >
        Get Started
      </button>
    </>
  );
}

export default Greeting;
