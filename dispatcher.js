var intents = require('./intents');

module.exports = {
  dispatch: dispatch
};

function dispatch(intentRequest, callback) {
    console.log(`request received for userId=${intentRequest}, intentName=${intentRequest}`);
    console.log(intentRequest);
    const intentName = intentRequest.currentIntent.name || intentRequest.intentName;
    switch (intentName) {
        case 'BookCar':
            // code
            intents.bookCar(intentRequest, callback);
            break;
            
        case 'BookConferenceRoom':
            // code
            intents.bookConferenceRoom(intentRequest, callback);
            break;

        case 'CallMe':
            // code
            intents.callMe(intentRequest, callback);            
            break;
            
        case 'RepairItem':
            // code
            intents.repairItem(intentRequest, callback);
            break;
            
        case 'InitiateCheckIn':
            // code
            intents.initiateCheckIn(intentRequest, callback);
            break;

        case 'InitiateCheckOut':
            // code
            intents.initiateCheckOut(intentRequest, callback);
            break;

        default:
            // code
            console.log(`Intent with name ${intentName} not specified`)
    }
};



