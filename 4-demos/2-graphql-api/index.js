import {ApolloServer, gql} from "apollo-server";

import {typeDefs} from './typedefs/index.js'
import {resolvers} from './resolvers/index.js'


const server = new ApolloServer({typeDefs, resolvers});
server.listen(5000).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});
