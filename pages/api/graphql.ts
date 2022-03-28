import {
    ApolloServer,
    gql,
  } from 'apollo-server-micro';
  import type {
    NextApiRequest,
    NextApiResponse,
  } from 'next';
  import { makeExecutableSchema } from 'graphql-tools'
  import { MongoClient} from 'mongodb'
  // import { mutations } from '../../serverApi/mutations/mutations';
  // import { queries } from '../../serverApi/queries/queries';
  // import { resolvers } from '../../serverApi/resolvers';
  // const typeDefs = gql`
  //   type Query {
  //     users: [User!]!
  //   }
  //   type User {
  //     name: String
  //   }
  // `;
  // const resolvers = {
  //   Query: {
  //     users(parent:any, args:any, context:any) {
  //       return [{ name: "Nextjs" }];
  //     },
  //   },
  // };
 
  const typeDefs = gql`
  type Query {
    item: String

  }
`

const resolvers = {
  Query: {
    item(_parent: any, _args: any, _context: { db: { collection: (arg0: string) => { (): any; new(): any; findOne: { (): Promise<any>; new(): any; }; }; }; }, _info: any) {
      return _context.db
        .collection('characters')
        .findOne()
        .then((data) => {
          return data.item
          

        })
    },
  },
}
  

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})




// { typeDefs, resolvers,schema,
//   context: async ()
  let db: any
  const apolloServer = new ApolloServer({ typeDefs, resolvers,schema,
    context: async () => {
      if (!db) {
        try {
          const dbClient = new MongoClient('mongodb://0.0.0.0:27017', {
          })
         
          // if (!dbClient.isConnected()) await dbClient.connect()
          await dbClient.connect()
          db = dbClient.db(process.env.DB_NAME) // database name
        } catch (e) {
          console.log('--->error while connecting via graphql context (db)', e)
        }
      }
  
      return { db }
    }
  
  
  });
  const startServer = apolloServer.start();
  const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://studio.apollographql.com"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    if (req.method === "OPTIONS") {
      res.end();
      return false;
    }
    await startServer;
    await apolloServer.createHandler({
      path: "/api/graphql",
    })(req, res);
  };
  export const config = {
    api: {
      bodyParser: false,
    },
  };
  export default handler;