/**
 * WebAPI Boilerplate
 */

import * as express from 'express'
import * as bodyParser from 'body-parser'
import sqlite from 'ts-sqlite3'
import run from './run'

run(async function() {
  // Create new express application
  const app = express()
  // Create new database connection
  const db = await sqlite('hello.sqlite')
  // Use JSON body parser
  app.use(bodyParser.json())
  // Create new endpoint
  app.get('/', function(req, res) {
    // Create your application logic here
  })
  
  // Start listen to app
  app.listen(3000, function() {
    console.log('WebAPI Application started on port 3000')
  })
})


