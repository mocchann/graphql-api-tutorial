const { ApolloServer, gql } = require("apollo-server");

const books = [
  {
    title: "猫である",
    author: "夏目",
  },
  {
    title: "犬である",
    author: "冬目",
  },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    test: [Book]
  }
`;

const resolvers = {
  Query: {
    test: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
