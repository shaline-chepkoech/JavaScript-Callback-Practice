const interactions = [];
function trackInteraction(action, callback) {
   interactions.push(action);
setTimeout(function() {
    console.log('Sending interaction data:', interactions);

    callback(interactions);

    interactions.length = 0;
}, 3000);
}

function sendToServer(data) {
    console.log('Data sent to server:', data);
}


trackInteraction('button click', sendToServer);
trackInteraction('page view', sendToServer);
trackInteraction('form submission', sendToServer);
  