import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";

const JobType = new GraphQLObjectType({
  name: "JobType",
  fields: {
    Job_ID: { type: GraphQLInt },
    Job_Title: { type: GraphQLString },
    Town_Location: { type: GraphQLString },
    Description: { type: GraphQLString },
    Salary_From_Per_Annum: { type: GraphQLInt },
    Salary_To_PerAnnum: { type: GraphQLInt }
  }
});

export default JobType;
