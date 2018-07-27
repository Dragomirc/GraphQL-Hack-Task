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
    jobs: {
      type: new GraphQLList(JobType),
      resolve: async () => {
        const res = await generalQuery(`select top 10 * from Jobs`);
        return res;
      }
    },
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
    }
  }
});

export default RootQuery;
