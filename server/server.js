const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');


const PORT = 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});