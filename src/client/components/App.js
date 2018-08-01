import "../../../public/styles.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import JobListPage from "./JobListPage";
import asyncComponent from "./hoc/asyncComponent";

const AsyncJobDetails = asyncComponent(() => {
  return import("./JobDetails");
});
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={JobListPage} />
        <Route path="/job/:id" component={AsyncJobDetails} />
      </div>
    </BrowserRouter>
  );
};

export default App;
