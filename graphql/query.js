import { gql } from 'graphql-request';

export const getJSONIdByTail = gql`
query GetJSONIdByTail($tail: String!) { 
    long_tails_by_pk(tail: $tail) {
    json_id
    }
}
`;