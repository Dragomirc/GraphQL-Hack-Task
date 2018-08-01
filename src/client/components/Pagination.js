import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

const fetchJobCount = gql`
  {
    count
  }
`;
const Pagination = props => {
  const renderPageButtons = count => {
    let numberOfPages = count / 10;
    let pageButtons = numberOfPages > 10 ? 10 : numberOfPages;

    return [...Array(pageButtons)].map((_, index) => {
      let pageNumber = index + 1;
      return (
        <Link key={pageNumber} to={`/new/${pageNumber}`}>
          <span>{pageNumber}</span>
        </Link>
      );
    });
  };

  return (
    <Query query={fetchJobCount}>
      {({ loading, data: { count } }) => {
        if (loading) return <div />;
        return (
          <div>
            <ul>{renderPageButtons(count)}</ul>
          </div>
        );
      }}
    </Query>
  );
};

export default Pagination;
