interface Props {
  setSurveyVisibility: (visible: boolean) => void;
  setGreetingVisibility: (visible: boolean) => void;
}

function Greeting(props: Props) {
  return (
    <>
      <div className="greeting-text-wrapper">
        <h1 className="greeting">Welcome To Immigration Help</h1>
        <h1 className="greeting">Click below to begin</h1>
      </div>
      <div className="btn-wrapper">
        <button
          type="button"
          className="btn btn-primary start"
          onClick={() => {
            props.setSurveyVisibility(true);
            props.setGreetingVisibility(false);
          }}
        >
          Get Started
        </button>
      </div>
    </>
  );
}

export default Greeting;
