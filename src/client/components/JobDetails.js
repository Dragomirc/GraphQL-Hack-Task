import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class JobDetails extends Component {
  render() {
    const { job } = this.props.data;
    if (!job) {
      return <div />;
    }
    const {
      Job_Title,
      Town_Location,
      Description,
      Salary_From_Per_Annum,
      Salary_To_PerAnnum
    } = job;
    return (
      <div className="container">
        <h2>
          <b>Title:</b> {Job_Title}
        </h2>

        <div>
          <b>Salary:</b> {Salary_From_Per_Annum} - {Salary_To_PerAnnum}
        </div>
        <div>
          <b>Location:</b> {Town_Location}
        </div>

        <p>
          <b>Description:</b> {Description}
        </p>
      </div>
    );
  }
}
const fetchSong = gql`
  query FetchJob($id: Int!) {
    job(id: $id) {
      Job_ID
      Job_Title
      Town_Location
      Description
      Salary_From_Per_Annum
      Salary_To_PerAnnum
    }
  }
`;

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.match.params.id } })
})(JobDetails);
