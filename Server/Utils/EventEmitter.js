const EventEmitter = require('events');
class AppEmitter extends EventEmitter {}
const appEmitter = new AppEmitter();
module.exports = appEmitter;