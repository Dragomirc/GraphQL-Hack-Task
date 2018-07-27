import { GraphQLSchema } from "graphql";
import RootQueryType from "./root_query_type";

export default new GraphQLSchema({
  query: RootQueryType
});
