import { gql } from 'graphql-request';

export const getTailsByPK = gql`
query MyQuery($tail: String!) { 
    long_tails_by_pk(tail: $tail) {
    json_id
    }
}
`;