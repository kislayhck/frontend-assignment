import React from "react";
import { useSelector } from "react-redux";
import TaskCards from "./taskCards";
import "./style.css";

function AllTask() {
  const myTask = useSelector((state) => state.todos.totalTask);

  return (
    <>
      <div className="all__tasks">
        <div className="row">
          <div className="col-md-4">
            <h4 className="text-center done__section">Done</h4>
            {myTask.map((item) => (
              <div key={item.id}>
                {item.branch === "Done" ? <TaskCards item={item} /> : ""}
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <h4 className="text-center inprogress__section">Inprogress</h4>
            {myTask.map((item) => (
              <div key={item.id}>
                {item.branch === "Inprogress" ? <TaskCards item={item} /> : ""}
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <h4 className="text-center todo__section">Todo</h4>
            {myTask.map((item) => (
              <div key={item.id}>
                {item.branch === "todo" ? <TaskCards item={item} /> : ""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllTask;
