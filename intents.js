var close = require('./close');
var utils = require('./utils');


module.exports = {
  bookCar: bookCar,
  bookConferenceRoom: bookConferenceRoom,
  callMe: callMe,
  repairItem: repairItem,
  initiateCheckIn: initiateCheckIn,
  initiateCheckOut: initiateCheckOut
};

            
function bookCar(intentRequest, callback) {
    console.log(`request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    const destination = slots.destination;
    const departureTime = slots.departureTime;
    
    var cabFulfilledResponse = utils.fulfillBookCar();
    console.log(cabFulfilledResponse);
    
    callback(close.close(sessionAttributes, 'Fulfilled',
        {   'contentType': 'PlainText',
            'content': `Booking confirmed for  ${destination} at ${departureTime}.\n 
                        Driver name: ${cabFulfilledResponse.driverName}\n
                        Vehicle number: ${cabFulfilledResponse.vehicleNumber}\n
                        Contact number: ${cabFulfilledResponse.contact}\n` 
        }));
}

function bookConferenceRoom(intentRequest, callback) {
    console.log(`request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    const when = slots.WHEN;
    callback(close.close(sessionAttributes, 'Fulfilled', {
        'contentType': 'PlainText',
        'content': `Regulus is booked at ${when}`
    }));
};

function callMe(intentRequest, callback) {
    console.log(`request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    const when = slots.when || '7am';
    callback(close.close(sessionAttributes, 'Fulfilled', {
        'contentType': 'PlainText',
        'content': `okay ! Call scheduled at ` + when
    }));
};

function repairItem(intentRequest, callback) {
    console.log(`request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    const what = slots.WHAT;
    callback(close.close(sessionAttributes, 'Fulfilled', {
        'contentType': 'PlainText',
        'content': 'Thanks for sharing your valuable feedback !'
    }));
};


function initiateCheckOut(intentRequest,callback) {
    console.log(`request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    const time = slots.time;
    const date = slots.date;
    
    if (time && date) {
        callback(close.close(sessionAttributes, 'Fulfilled',{'contentType': 'PlainText', 'content': `Your checkout request has been received. It has been scheduled for ${time} on ${date}.`}));
    } else if (time) {
        callback(close.close(sessionAttributes, 'Fulfilled',{'contentType': 'PlainText', 'content': `Your checkout request has been received. It has been scheduled for ${time} today. Your outstanding bills are being processed, if any.`}));
    } else {
        callback(close.close(sessionAttributes, 'Failed',{'contentType': 'PlainText', 'content': `Your checkout request was not understood. Kindly try again or contact helpdesk.`}));
    }
};


function initiateCheckIn(intentRequest,callback) {
    console.log(`request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    const sessionAttributes = intentRequest.sessionAttributes;
    callback(close.close(sessionAttributes, 'Fulfilled',{'contentType': 'PlainText', 'content': `Your ID verification is successful !.\nRoom 213 has been alotted to you. \nHave a pleasant stay :-)`}));
};

