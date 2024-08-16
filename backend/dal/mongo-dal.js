const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://tcable:deltacorp@cluster0.alkdm.mongodb.net/";
const client = new MongoClient(uri);

exports.DAL = {
    getAllUsers: async function () {
        console.log("DAL GET USERS:");

        try {
            await client.connect();

            const database = await client.db("WebsiteGameLauncher");
            const userCollection = await database.collection("users");
            const userResults = await userCollection.find({}).toArray();

            if (userResults.length > 0) {
                return userResults;
            } else {
                return null;
            }
        } finally {
            await client.close();
        }
    },

    createUser: async function (userData) {
        console.log("DAL CREATE USER:", userData);

        try {
            await client.connect();

            const database = client.db("WebsiteGameLauncher");
            const userCollection = database.collection("users");
            const result = await userCollection.insertOne(userData);

            console.log(`Documents were inserted`);
        } finally {
            await client.close();
        }
    },

    findUser: async function (username) {
        console.log("DAL FIND USER:", username);

        try {
            await client.connect();

            const database = client.db("WebsiteGameLauncher");
            const userCollection = database.collection("users");
            const user = await userCollection.findOne({ username: username });

            return user;
        } finally {
            await client.close();
        }
    },

    updateProfile: async function (username, updateData) {
        console.log("DAL UPDATE PROFILE:", username, updateData);

        try {
            await client.connect();

            const database = client.db("WebsiteGameLauncher");
            const userCollection = database.collection("users");
            const filter = { username: username };
            const updateDoc = {
                $set: updateData
            };

            await userCollection.updateOne(filter, updateDoc);
        } finally {
            await client.close();
        }
    }
};