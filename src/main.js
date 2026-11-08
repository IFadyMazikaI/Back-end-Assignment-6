//const express = require('express')
import express from 'express'
import { authorsController, booksController, logsController } from './modules/index.js'
import { globalErrorHandler } from './middleware/index.js'
import { PORT } from './config.js'
const app = express()
const port = PORT
app.use(express.json())

app.get('/', (req, res) => res.status(200).json({message: 'Hello World!'})) 



app.use(booksController)
app.use(authorsController)
app.use(logsController)


app.all('{/*dummy}', (req, res) => {return res.status(404).json({message: 'Route not found!'})})
app.use(globalErrorHandler)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))