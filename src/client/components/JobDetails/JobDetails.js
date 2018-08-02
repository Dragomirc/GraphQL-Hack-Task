import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const fetchJob = gql`
  query FetchJob($id: Int!) {
    job(id: $id) {
      Job_ID
      Job_Title
      Town_Location
      Description
      Salary_From_Per_Annum
      Salary_To_Per_Annum
    }
  }
`;
const JobDetails = props => {
  return (
    <Query query={fetchJob} variables={{ id: props.match.params.id }}>
      {({ loading, error, data: { job } }) => {
        if (loading) return <div />;
        if (error) return `Error!: ${error}`;
        const {
          Job_Title,
          Town_Location,
          Description,
          Salary_From_Per_Annum,
          Salary_To_Per_Annum
        } = job;

        return (
          <div className="container">
            <h2>
              <b>Title:</b> {Job_Title}
            </h2>
            <div>
              <b>Salary:</b> {Salary_From_Per_Annum} - {Salary_To_Per_Annum}
            </div>
            <div>
              <b>Location:</b> {Town_Location}
            </div>
            <p>
              <b>Description:</b> {Description}
            </p>
          </div>
        );
      }}
    </Query>
  );
};

export default JobDetails;
