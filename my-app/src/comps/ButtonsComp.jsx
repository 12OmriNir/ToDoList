import React from "react";

const ButtonsComp = ({ showAll, showOnlyCompleted, showOnlyLeft }) => {
  return (
    <div className="row">
      <div className="col-1">
        <button
          className="btn btn-primary"
          onClick={showAll}
          style={{ width: "100px" }}
        >
          ALL
        </button>
      </div>
      <div className="col-1"></div>
      <div className="col-1">
        <button
          className="btn btn-primary"
          onClick={showOnlyCompleted}
          style={{ width: "100px" }}
        >
          COMPLETED
        </button>
      </div>
      <div className="col-1"></div>
      <div className="col-1">
        <button
          className="btn btn-primary"
          onClick={showOnlyLeft}
          style={{ width: "100px" }}
        >
          LEFT
        </button>
      </div>
    </div>
  );
};

export default ButtonsComp;
