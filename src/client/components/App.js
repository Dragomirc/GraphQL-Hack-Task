import "../../../public/styles.css";
import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import JobListPage from "./JobListPage/JobListPage";
import asyncComponent from "./hoc/asyncComponent";

const AsyncJobDetails = asyncComponent(() => {
  return import("./Jobdetails/JobDetails");
});
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact render={() => <Redirect to="/new/1" />} />
        <Route path="/new/:page" component={JobListPage} />
        <Route path="/job/:id" component={AsyncJobDetails} />
      </div>
    </BrowserRouter>
  );
};

export default App;
