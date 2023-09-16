import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

import regression from 'ml-regression'
import bodyParser from 'body-parser'
import fs from 'fs'
import csv from 'csv-parser'

const dataset = [];
fs.createReadStream('veggie.csv')
  .pipe(csv({
    mapHeaders: ({ header }) => header.trim(),
    mapValues: ({ value }) => value.trim()
  }))
  .on('data', (row) => {
    const dateParts = row.Date.split('-');
    const parsedDate = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
    if (!isNaN(parsedDate.getTime())) { // Filter out invalid dates
      dataset.push({
        date: parsedDate,
        carrotPrice: parseFloat(row.Carrot),
        tomatoPrice: parseFloat(row.Tomato),
        broccoliPrice: parseFloat(row.Broccoli),
        avocadoPrice: parseFloat(row.Avocado),
        onionPrice: parseFloat(row.Onion),
        cucumberPrice: parseFloat(row.Cucumber),
        ladyfingerPrice: parseFloat(row.Ladyfinger),
        gingerPrice: parseFloat(row.Ginger),
        mangoPrice: parseFloat(row.Mango),
        cauliflowerPrice: parseFloat(row.Cauliflower)
      });
    }
  })
  .on('end', () => {
    console.log('Dataset loaded and preprocessed.');
  });

app.use(bodyParser.json());

app.post('/predict', (req, res) => {
  const { date, vegName } = req.body;

  // Find the corresponding vegetable prices and dates
  const vegPrices = dataset.map(data => data[`${vegName}Price`]);
  const dates = dataset.map(data => data.date.getTime());

  // Create a linear regression model
  const model = new regression.SimpleLinearRegression(dates, vegPrices);

  // Predict the price for the target date
  const targetDate = new Date(date).getTime();
  const predictedPrice = Math.round(model.predict(targetDate)); // Round to nearest integer

  res.json({ prediction: predictedPrice });

});


const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
