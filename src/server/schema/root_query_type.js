import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt
} from "graphql";
import JobType from "./job_type";
import { generalQuery } from "../services/helpers";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    job: {
      type: JobType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: async (root, { id }) => {
        const res = await generalQuery(`Select * from Jobs Where Job_ID=${id}`);
        return res[0];
      }
    },
    jobs: {
      type: new GraphQLList(JobType),
      args: {
        first: {
          type: GraphQLInt
        },
        skip: {
          type: GraphQLInt
        }
      },
      resolve: async (root, { first = 10, skip = 0 }) => {
        const res = await generalQuery(
          `Select  * from Jobs  ORDER BY Job_ID OFFSET  ${skip} ROWS FETCH NEXT ${first} ROWS ONLY`
        );
        return res;
      }
    },
    count: {
      type: GraphQLInt,
      resolve: async () => {
        const res = await generalQuery(
          `SELECT COUNT(Job_ID) as count FROM JOBS`
        );
        return res[0].count;
      }
    }
  }
});

export default RootQuery;
