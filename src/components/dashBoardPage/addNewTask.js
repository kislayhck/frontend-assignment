import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../actions/todoAction";
import { useHistory } from "react-router-dom";

function AddNewTask() {
  const [task, setTask] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [subTask, setSubTask] = useState("");
  const [date, setDate] = useState("");
  const [fields, setFields] = useState([{ value: null }]);
  const [branch, setBranch] = useState("todo");
  const [tag, setTag] = useState("");

  let history = useHistory();
  const dispatch = useDispatch();

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

  const submitHandlet = (e) => {
    e.preventDefault();
    console.log(subTask[0].value);
    const newMap = subTask.map((valMap) => valMap.value);
    const newVal = newMap;
    let id = Math.random() * 100;
    const newData = { id, task, newVal, taskDescription, branch, tag, date };
    dispatch(addTask(newData));
    history.push("/home");
  };

  return (
    <>
      <form className="container mt-5" onSubmit={submitHandlet}>
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

export default AddNewTask;
