import React, { Component } from "react";
import assignments from "../data/assignments";
import AssignmentsList from "../comps/AssignmentsList";
import SearchbarComp from "../comps/SearchbarComp";
import ButtonsComp from "../comps/ButtonsComp";
const { nanoid } = require("nanoid");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allAssignments: [],
      assignmentsToShow: [],
    };
  }

  componentDidMount() {
    this.setState({
      allAssignments: assignments,
      assignmentsToShow: assignments,
    });
  }

  onSearch = ({ target }) => {
    this.setState((state) => {
      return {
        assignmentsToShow: state.allAssignments.filter((assignment) =>
          assignment.whatToDo.toLowerCase().includes(target.value.toLowerCase())
        ),
      };
    });
  };

  addAssignment = () => {
    const whatToDo = window.prompt("What do you need to do?");

    if (whatToDo) {
      const assignment = {
        id: nanoid(),
        whatToDo: whatToDo,
        wasDone: false,
      };

      this.setState((state) => {
        return {
          allAssignments: [...state.allAssignments, assignment],
          assignmentsToShow: [...state.assignmentsToShow, assignment],
        };
      });
    }
  };

  deleteAssignment = (id) => {
    this.setState((state) => {
      return {
        allAssignments: state.allAssignments.filter(
          (assignment) => assignment.id !== id
        ),
        assignmentsToShow: state.assignmentsToShow.filter(
          (assignment) => assignment.id !== id
        ),
      };
    });
  };

  setAssignment = (id) => {
    this.setState(
      (state) => {
        return {
          allAssignments: state.allAssignments.map((assignment) => {
            if (assignment.id === id) {
              return { ...assignment, wasDone: !assignment.wasDone };
            }
            return assignment;
          }),

          assignmentsToShow: state.assignmentsToShow.map((assignment) => {
            if (assignment.id === id) {
              return { ...assignment, wasDone: !assignment.wasDone };
            }
            return assignment;
          }),
        };
      },
      () => {
        console.log(this.state.assignmentsToShow);
      }
    );
  };

  showAll() {
    this.setState((state) => {
      return {
        assignmentsToShow: state.allAssignments,
      };
    });
  }

  showOnlyCompleted() {
    this.setState((state) => {
      return {
        assignmentsToShow: state.allAssignments.filter(
          (assignment) => assignment.wasDone
        ),
      };
    });
  }

  showOnlyLeft() {
    this.setState((state) => {
      return {
        assignmentsToShow: state.allAssignments.filter(
          (assignment) => !assignment.wasDone
        ),
      };
    });
  }

  render() {
    const { assignmentsToShow } = this.state;

    return (
      <div className="container" style={{ width: "1000px" }}>
        <SearchbarComp
          onSearch={this.onSearch}
          addAssignment={this.addAssignment}
        />
        <AssignmentsList
          assignments={assignmentsToShow}
          deleteAssignment={this.deleteAssignment}
          setAssignment={this.setAssignment}
        />
        <ButtonsComp
          showAll={() => this.showAll()}
          showOnlyCompleted={() => this.showOnlyCompleted()}
          showOnlyLeft={() => this.showOnlyLeft()}
        />
      </div>
    );
  }
}

export default Home;
