newFunction();

function newFunction() {
    var dispatch = require('./dispatcher');
    exports.handler = (event, context, callback) => {
        dispatch.dispatch(event, (response) => {
            callback(null, response);
        });
    };
}
