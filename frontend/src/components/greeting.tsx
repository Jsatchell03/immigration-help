import { useState } from "react";

interface Props {
  setSurveyVisibility: (visible: boolean) => void;
}

function Greeting(props: Props) {
  const [visible, setVisibility] = useState(true);
  return (
    <>
      {visible && (
        <>
          <h1>Welcome To Immigration Help Click Below To Begin</h1>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              props.setSurveyVisibility(true);
              setVisibility(false);
            }}
          >
            Get Started
          </button>
        </>
      )}
    </>
  );
}

export default Greeting;
