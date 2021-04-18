import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask, updatedTask } from "../../actions/todoAction";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditTask() {
  const [task, setTask] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [subTask, setSubTask] = useState("");
  const [date, setDate] = useState("");
  const [fields, setFields] = useState([{ value: null }]);
  const [branch, setBranch] = useState("todo");
  const [tag, setTag] = useState("");

  let { id } = useParams();
  let history = useHistory();

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
    setSubTask(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  const dispatch = useDispatch();
  const editOnecontact = useSelector((state) => state.todos.updatedTask);

  useEffect(() => {
    if (editOnecontact != null) {
      setTask(editOnecontact.task);
      setTaskDescription(editOnecontact.taskDescription);
      setSubTask(editOnecontact.newVal);
      setBranch(editOnecontact.branch);
      setTag(editOnecontact.tag);
      setDate(editOnecontact.date);
    }
    dispatch(getTask(id));
  }, [editOnecontact]);

  const updateSubmit = (e) => {
    e.preventDefault();
    const updated_task = Object.assign(editOnecontact, {
      task,
      taskDescription,
      branch,
      tag,
      date,
    });
    dispatch(updatedTask(updated_task));
    history.push("/home");
  };

  return (
    <>
      <form className="container mt-5" onSubmit={updateSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Enter Task Name</label>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="form-control"
              name="taskname"
              placeholder="Task Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Sub Task </label>
            <button type="button" onClick={() => handleAdd()}>
              +
            </button>

            {fields.map((field, idx) => {
              return (
                <div key={`${field}-${idx}`}>
                  <input
                    type="text"
                    placeholder="Enter text"
                    value={subTask}
                    onChange={(e) => handleChange(idx, e)}
                  />
                  <button type="button" onClick={() => handleRemove(idx)}>
                    X
                  </button>
                </div>
              );
            })}
          </div>
          <div className="form-group col-md-4">
            <label for="inputEmail4">Enter Date</label>
            <input
              type="date"
              className="col-md-4"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="inputAddress">Descriptio</label>
          <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="form-control"
            name="taskDescription"
            placeholder="Description"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label for="inputState">State</label>
            <select
              onChange={(e) => setBranch(e.target.value)}
              className="form-control"
            >
              <option value="todo" name="todo">
                To-Do
              </option>
              <option value="Inprogress" name="Inprogress">
                In-Progress
              </option>
              <option value="Done" name="inprogress">
                Done
              </option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            value="personal"
            onChange={() => setTag("personal")}
            name="tag"
          />
          <label for="tag">personal</label>
          <input
            type="checkbox"
            value="official"
            onChange={() => setTag("official")}
            name="tag"
          />
          <label for="tag">official</label>
          <input
            type="checkbox"
            value="miscellaneous"
            onChange={() => setTag("miscellaneous")}
            name="tag"
          />
          <label for="gridCheck3">miscellaneous</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </>
  );
}

export default EditTask;
