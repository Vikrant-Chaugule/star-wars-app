import "./BackButton.css";

export const BackButton = ({ onClick }: any) => {
  return (
    <button className="back-button" onClick={onClick}>
      Back
    </button>
  );
};
