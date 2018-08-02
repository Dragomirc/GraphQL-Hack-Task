import React from "react";
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
    let numberOfPages = count / JOBS_PER_PAGE;
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

  const _nextPage = jobCount => {
    const page = parseInt(props.match.params.page, 10);
    if (page <= jobCount / JOBS_PER_PAGE) {
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
          <div>
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
