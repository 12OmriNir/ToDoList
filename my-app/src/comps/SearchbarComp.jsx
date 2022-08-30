import React, { Component } from "react";

class SearchbarComp extends Component {
  render() {
    const { onSearch, addAssignment } = this.props;

    return (
      <div className="row mb-5">
        <div className="col-9">
          <input
            type="text"
            className="form-contorl"
            placeholder="What do you need to do today?"
            style={{ width: "800px" }}
            onChange={(event) => onSearch(event)}
          />
        </div>
        
        <div className="col-1"></div>

        <div className="col-2">
          <button className="btn btn-primary" onClick={() => addAssignment()}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default SearchbarComp;
