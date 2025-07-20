// main.js
const Apify = require('apify');

Apify.main(async () => {
    // This is the main function of your Apify Actor.
    // It's executed when the Actor starts.

    console.log('Hello from my GitHub Actor!');

    // Optionally, you can get input from the user (if defined in INPUT_SCHEMA.json)
    const input = await Apify.getInput();
    if (input && input.message) {
        console.log(`Received input message: ${input.message}`);
    } else {
        console.log('No specific input message provided.');
    }

    // You can also push data to the default dataset
    await Apify.pushData({
        message: 'This is some data from the actor.',
        timestamp: new Date().toISOString(),
        randomNumber: Math.random() * 100
    });

    console.log('Actor finished successfully!');
});
