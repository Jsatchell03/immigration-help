interface Props {
  message: string;
}

function Alert(props: Props) {
  return (
    <div className="alert alert-secondary" role="alert">
      {props.message}
    </div>
  );
}

export default Alert;
