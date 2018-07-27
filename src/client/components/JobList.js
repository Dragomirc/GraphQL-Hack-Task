import React, { Component } from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class JobList extends Component {
  renderJobs = () =>
    this.props.data.jobs.map(({ Job_ID, Job_Title }) => (
      <Link to={`/job/${Job_ID}`} key={Job_ID}>
        <li className="list-group-item">{Job_Title}</li>
      </Link>
    ));
  render() {
    const { data } = this.props;
    if (data.loading) {
      return <div />;
    }
    return (
      <div className="container">
        <h3> Jobs:</h3> <ul className="list-group">{this.renderJobs()}</ul>
      </div>
    );
  }
}

const fetchJobs = gql`
  {
    jobs {
      Job_ID
      Job_Title
    }
  }
`;
export default graphql(fetchJobs)(JobList);
