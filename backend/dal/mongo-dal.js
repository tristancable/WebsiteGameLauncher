const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://tcable:deltacorp@cluster0.alkdm.mongodb.net/";
const client = new MongoClient(uri);

let dbInstance = null;

async function connectToDatabase() {
    if (!dbInstance) {
        await client.connect();
        dbInstance = client.db("WebsiteGameLauncher");
    }
    return dbInstance;
}

exports.DAL = {
    getAllUsers: async function() {
        console.log("DAL GET USERS:");

        try {
            const database = await connectToDatabase();
            const userCollection = database.collection("users");
            const userResults = await userCollection.find({}).toArray();

            return userResults.length > 0 ? userResults : null;
        } catch (error) {
            console.error('Error getting users:', error);
            throw error;
        }
    },

    createUser: async function (userData) {
        console.log("DAL CREATE USER:", userData);

        try {
            const database = await connectToDatabase();
            const userCollection = database.collection("users");
            const result = await userCollection.insertOne(userData);

            console.log(`User inserted with ID: ${result.insertedId}`);
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },

    findUser: async function (username) {
        console.log("DAL FIND USER:", username);

        try {
            const database = await connectToDatabase();
            const userCollection = database.collection("users");
            const user = await userCollection.findOne({ username });

            return user;
        } catch (error) {
            console.error('Error finding user:', error);
            throw error;
        }
    },

    updateUser: async function (username, updateData) {
        console.log("DAL UPDATE PROFILE:", username, updateData);

        try {
            const database = await connectToDatabase();
            const userCollection = database.collection("users");
            const filter = { username };
            const updateDoc = { $set: updateData };

            const result = await userCollection.updateOne(filter, updateDoc);
            console.log(`Matched ${result.matchedCount} documents and modified ${result.modifiedCount} documents.`);
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    }
};

process.on('SIGINT', async () => {
    await client.close();
    console.log("MongoDB connection closed.");
    process.exit(0);
});