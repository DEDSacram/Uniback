import { Db, MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI as string;
const MONGODB_DB = process.env.DB_NAME;

// check the MongoDB URI
if (!MONGODB_URI) {
    throw new Error('Define the MONGODB_URI environmental variable');
}

// check the MongoDB DB
if (!MONGODB_DB) {
    throw new Error('Define the MONGODB_DB environmental variable');
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
    // check the cached.
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    // set the connection options

    // Connect to cluster
    let client = new MongoClient(MONGODB_URI);
    await client.connect();
    let db = client.db(MONGODB_DB);

    // set cache
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}


// import { MongoClient } from 'mongodb'

// const uri = process.env.MONGODB_URI
// const options = {}

// let client
// let clientPromise

// if (!process.env.MONGODB_URI) {
//    throw new Error('Please add your Mongo URI to .env.local')
// }

// class Amongus {
//    constructor() {
//       client = new MongoClient(uri, options)
//    }

//    async Fetch(db, collection) {
//       client.connect()
//       let posts = await client
//       .collection(collection)
//       .find({})
//       const ids = client.db(db).collection(collection)
//       console.log(await ids.find({ "name.last": "Hopper" }))
//       console.log(await ids.find({}).toArray(function (err, result) {
//          console.log("find query executed...")
//          console.log(result)
//       }))
//    }

// }



// export default Amongus