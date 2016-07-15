/**
 * Mocking client-server processing
 */
import _monitors from './monitors.json'

const TIMEOUT = 100

export default {
  getMonitors(cb, timeout) {
    setTimeout(() => cb(_monitors), timeout || TIMEOUT)
  },
}