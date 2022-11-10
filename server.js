const {MongoClient} = require('mongodb');

async function main(){

    const uri = "mongodb+srv://vi5hal:9055084345@pikacluster.wrbvydb.mongodb.net/?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls

        //to insert one data
        await createListing(client,
            {
                username:"adarsh",
                name:"Adarsh",
                password:"bhai"
            }
        );
       
        //to insert multiple data
       /* await createMultipleListings(client, [
            {
                name: "Infinite Views",
                summary: "Modern home with infinite views from the infinity pool",
                property_type: "House",
                bedrooms: 5,
                bathrooms: 4.5,
                beds: 5
            }
        ]);*/

        //to find data
        //await findOneListingByName(client, "ritesh" );

        //too delete one data
        //await deleteListingByName(client, "Cozy Cottage");


 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }   
}

main().catch(console.error);

//insertmany documents function
async function createMultipleListings(client, newListings){
    const result = await client.db("pikaUsers").collection("allusers").insertMany(newListings);

    console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
    console.log(result.insertedIds);       
}

//InseertOne function
async function createListing(client, newListing){
    const result = await client.db("pikaUsers").collection("allusers").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

//findOne function
async function findOneListingByName(client, nameOfListing) {
    const result = await client.db("pikaUsers").collection("allusers").findOne({ username: nameOfListing });

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}

//deleteOne document function
async function deleteListingByName(client, nameOfListing) {
    const result = await client.db("pikaUsers").collection("allusers").deleteOne({ name: nameOfListing });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}