const pino = require('pino')
const pretty = require('pino-pretty')
const stream = pretty({
  prettyPrint: { colorize: true }
})
const log = pino(stream)

export default log;