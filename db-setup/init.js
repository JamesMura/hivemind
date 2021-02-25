const { resolve } = require('path')
const { config } = require('dotenv')
const { Database } = require('arangojs')

config({ path: resolve(process.cwd(), '.env.local') })

const db = new Database({
  url: `http://${process.env.ARANGO_HOST}:${process.env.ARANGO_PORT}`,
  arangoVersion: 30603,
  databaseName: process.env.ARANGO_DB,
  auth: { username: process.env.ARANGO_USER, password: process.env.ARANGO_PASSWORD.replaceAll('\\', '') },
  precaptureStackTraces: true
})

exports.db = db
exports.rg = db.route(process.env.ARANGO_SVC_MOUNT_POINT)