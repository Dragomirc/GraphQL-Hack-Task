import React from "react";
import Pagination from "./Pagination";
import JobList from "./JobList";

const JobListPage = props => (
  <div>
    <JobList />
    <Pagination />
  </div>
);
export default JobListPage;
