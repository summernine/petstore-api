const newman = require('newman');

// Define the path to your Postman collection JSON file
const collectionFile = '../petstore.postman_collection.json';
const environmentFile = '../petstore.environment.json';

// Run the Postman collection using Newman
newman.run({
    collection: require(collectionFile),
    environment: require(environmentFile),
    reporters: 'htmlextra' // You can specify different reporters (e.g., cli, html, json) for output
}, function (err) {
    if (err) {
        console.error('Error:', err);
        process.exit(1); // Exit with error status code
    }
    console.log('Postman tests finished successfully!');
});