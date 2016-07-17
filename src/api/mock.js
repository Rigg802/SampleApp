/**
 * Mocking client-server processing
 */
var _monitors = require('!json./monitors.json');

const TIMEOUT = 100

export default {
  getMonitors(cb, timeout) {
    setTimeout(() => cb(_monitors), timeout || TIMEOUT)
  },
}