
export const Reset = ({ clearBoard, buttonName }) => {
  return (
    <button className="reset-button" onClick={clearBoard}>
      {buttonName}
    </button>
  );
};