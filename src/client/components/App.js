import "../../../public/styles.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import JobList from "./JobList";
import Pagination from "./Pagination";
import asyncComponent from "./hoc/asyncComponent";

const AsyncJobDetails = asyncComponent(() => {
  return import("./JobDetails");
});
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={JobList} />
        <Route path="/job/:id" component={AsyncJobDetails} />
        <Route path="/new" component={Pagination} />
      </div>
    </BrowserRouter>
  );
};

export default App;
