import React from "react";
import { Link } from "react-router-dom";
import { delteTask } from "../../actions/todoAction";
import { useDispatch } from "react-redux";

function TaskCards({ item }) {
  const dispatch = useDispatch();
  const { id, task, taskDescription, newVal, branch, tag, date } = item;
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{task}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{taskDescription}</h6>
          <p>{date}</p>
          <p className="card-text">{newVal}</p>
          <p className="card-text">{branch}</p>
          <p className="card-text">{tag}</p>
          <Link to={`/todo/edit/${id}`}>
            <p className="card-link">Edit</p>
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(delteTask(id))}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskCards;
