import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const fetchJobCount = gql`
  {
    count
  }
`;
const Pagination = props => {
  return (
    <Query query={fetchJobCount}>
      {({ loading, data: { count } }) => {
        if (loading) return <div />;
        return <div>Count: {count}</div>;
      }}
    </Query>
  );
};

export default Pagination;
