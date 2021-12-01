import { GraphQLClient } from 'graphql-request';

export default new GraphQLClient(process.env.graphqlUrl);