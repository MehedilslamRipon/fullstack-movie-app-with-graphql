const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/movieSchema');
const resolvers = require('./resolvers/resolvers');

const app = express();

// cross origin
app.use(cors());

// database connection
mongoose
   .connect(
      'mongodb+srv://movies:movies@cluster0.6rerunb.mongodb.net/?retryWrites=true&w=majority',
      {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      }
   )
   .then(() => console.log('Database Connected Successfully'))
   .catch((err) => console.log(err));

// setting graphql
app.use(
   '/graphql',
   graphqlHTTP({
      schema,
      graphiql: true,
      rootValue: resolvers,
   })
);

// server port
const PORT = 4000;

app.listen(PORT, () => {
   console.log(`server is running on PORT: ${PORT}`);
});
