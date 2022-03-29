import {gql} from "apollo-server";


const typeDefs = gql`
    
    type Session{
        id:ID!
        title: String!
        description: String
        startsAt: String
        endsAt: String
        room: String
        day: String
        format: String
        track: String
        level: String,
    }
    
    input SessionInput{
        title: String!
        description: String
        startsAt: String
        endsAt: String
        room: String
        day: String
        format: String
        track: String
        level: String,
    }
    
    # Read
    type Query{
        sessions:[Session]
        session_by_pk(id:ID!):Session    
    }
    
    # Write
    type Mutation{
        add_one_session(sessionInput:SessionInput!):Session
    }
    
`

export {typeDefs}