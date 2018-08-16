import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const fetchJobs = gql`
  query FetchJobs($skip: Int) {
    jobs(skip: $skip) {
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

  const pagesToSkip = parseInt(props.match.params.page, 10) * 10;
  return (
    <Query query={fetchJobs} variables={{ skip: pagesToSkip }}>
      {({ loading, data: { jobs } }) => {
        if (loading) return <div />;
        return (
          <div className="container">
            <h3> Jobs :</h3>
            <ul className="list-group">{renderJobs(jobs)}</ul>
          </div>
        );
      }}
    </Query>
  );
};

export default withRouter(JobList);
