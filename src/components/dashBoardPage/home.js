import React from "react";
import SideBar from "./../../elements/Sidebar/SideBar";
import Header from "../../elements/Header/Header";
import AllTask from "./allTask";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddNewTask from "./addNewTask";
import EditTask from "./editTask";

function Home() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row main__class">
          <div className="col-md-3">
            <SideBar />
          </div>
          <div className="col-md-8">
            <Header />
            <Switch>
              <Route exact path="/home" component={AllTask} />
              <Route exact path="/todo/add" component={AddNewTask} />
              <Route exact path="/todo/edit/:id" component={EditTask} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Home;
