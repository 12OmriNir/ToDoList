import React from "react";

const AssignmentPreview = ({ assignment, deleteAssignment, setAssignment }) => {
  return (
    <div className="row mb-3 border">
      <div className="col-4">
        <input
          type="checkbox"
          defaultChecked={assignment.wasDone}
          onClick={setAssignment}
        />{" "}
        :{assignment.whatToDo}
      </div>
      <div className="col-7"></div>
      <div className="col-1">
        <button className="btn btn-primary" onClick={deleteAssignment}>
          <i class="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  );
};
export default AssignmentPreview;
