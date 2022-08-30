import React, { Component } from "react";
import AssignmentPreview from "./AssignmentPreview";

class AssignmentsList extends Component {
  render() {
    const { assignments, deleteAssignment, setAssignment } = this.props;
    return assignments.map((assignment) => (
      <AssignmentPreview
        key={assignment.id}
        assignment={assignment}
        deleteAssignment={() => deleteAssignment(assignment.id)}
        setAssignment={() => setAssignment(assignment.id)}
      />
    ));
  }
}

export default AssignmentsList;
