import React, { Component } from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";

import { Query } from "react-apollo";
const fetchJobs = gql`
  {
    jobs {
      Job_ID
      Job_Title
    }
  }
`;
const JobList = props => {
  const renderJobs = jobs =>
    jobs.map(({ Job_ID, Job_Title }) => (
      <Link to={`/job/${Job_ID}`} key={Job_ID}>
        <li className="list-group-item">{Job_Title}</li>
      </Link>
    ));

  return (
    <Query query={fetchJobs}>
      {({ loading, data: { jobs } }) => {
        if (loading) return <div />;
        return (
          <div className="container">
            <h3> Jobs:</h3>
            <ul className="list-group">{renderJobs(jobs)}</ul>
          </div>
        );
      }}
    </Query>
  );
};

export default JobList;
