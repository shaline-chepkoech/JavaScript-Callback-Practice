// Simulated asynchronous game events with a fixed delay, random failure, and timeout
const encounterEnemy = (callback) => {
    setTimeout(() => {
        console.log("Encountered an enemy!");
        callback(); // Trigger the next event
    }, 2000); // Simulating a 2 second delay
};

const defeatEnemy = (callback) => {
    setTimeout(() => {
        console.log("Defeated the enemy!");
        callback(); // Trigger the next event
    }, 2000); // Simulating a 2 second delay
};

const collectLoot = (retryCallback) => {
    setTimeout(() => {
        // Simulate a 20% chance of failure
        const success = Math.random() > 0.2; // 80% success rate
        if (success) {
            console.log("Collected loot from the enemy!");
            retryCallback(); // Trigger the next event
        } else {
            console.log("Failed to collect loot! Trying again...");
            collectLoot(retryCallback); // Retry collecting loot
        }
    }, 2000); // Simulating a 2 second delay
};

// Function to simulate timeout
const withTimeout = (eventFunction, timeoutDuration) => {
    return new Promise((resolve) => {
        const timer = setTimeout(() => {
            console.log("Event timed out!");
            resolve(false); // Indicate a timeout
        }, timeoutDuration);

        // Call the event function
        eventFunction(() => {
            clearTimeout(timer); // Clear the timeout
            resolve(true); // Indicate success
        });
    });
};

// Function to process events in sequence
const processGameEvents = async (events) => {
    for (const event of events) {
        const success = await withTimeout(event, 5000); // 5 second timeout
        if (!success) {
            console.log("Moving on to the next event due to timeout.");
        }
    }
    console.log("All events processed successfully.");
};

// Array of events in the correct sequence
const gameEvents = [encounterEnemy, defeatEnemy, collectLoot];

// Start processing the game events
processGameEvents(gameEvents);
