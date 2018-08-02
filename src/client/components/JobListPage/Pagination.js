import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link, withRouter } from "react-router-dom";

const fetchJobCount = gql`
  {
    jobCount
  }
`;
const Pagination = props => {
  const JOBS_PER_PAGE = 10;
  const renderPageButtons = count => {
    const numberOfPages = Math.ceil(count / JOBS_PER_PAGE);
    const pageButtons = numberOfPages > 20 ? 20 : numberOfPages;
    const currentPage = parseInt(props.match.params.page, 10);
    let startPage, endPage;
    if (numberOfPages <= 20) {
      startPage = 1;
      endPage = numberOfPages;
    } else {
      if (currentPage <= 11) {
        startPage = 1;
        endPage = 20;
      } else if (currentPage + 9 >= numberOfPages) {
        startPage = numberOfPages - 19;
        endPage = numberOfPages;
      } else {
        startPage = currentPage - 10;
        endPage = currentPage + 9;
      }
    }

    return [...Array(endPage + 1 - startPage).keys()].map(i => {
      const pageNumber = startPage + i;
      return (
        <Link key={pageNumber} to={`/new/${pageNumber}`}>
          <span className={currentPage === pageNumber ? "active" : ""}>
            {pageNumber}
          </span>
        </Link>
      );
    });
  };

  const _nextPage = jobCount => {
    const page = parseInt(props.match.params.page, 10);
    if (page <= Math.ceil(jobCount / JOBS_PER_PAGE)) {
      const nextPage = page + 1;
      props.history.push(`/new/${nextPage}`);
    }
  };
  const _previousPage = () => {
    const page = parseInt(props.match.params.page, 10);
    if (page > 1) {
      const previousPage = page - 1;
      props.history.push(`/new/${previousPage}`);
    }
  };
  return (
    <Query query={fetchJobCount}>
      {({ loading, data: { jobCount } }) => {
        if (loading) return <div />;
        return (
          <div className="pagination">
            <div onClick={_previousPage}>Previous</div>
            <ul>{renderPageButtons(jobCount)}</ul>
            <div onClick={() => _nextPage(jobCount)}>Next</div>
          </div>
        );
      }}
    </Query>
  );
};

export default withRouter(Pagination);
