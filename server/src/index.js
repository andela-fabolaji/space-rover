const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const resolvers = {
  Query: {
    hello: (_, args) => {
      return args.name ? `Hello, ${args.name}!`: 'Hello, there!';
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server launched at ${url}`);
});