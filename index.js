const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.get('/', (req, res) => {
  return res.json({ mensagem: 'api a' })
})

app.use(bodyParser.json())

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body
  const result = num1 + num2
  res.json({ result })
})

app.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body
  const result = num1 - num2
  res.json({ result })
})

app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body
  const result = num1 * num2
  res.json({ result })
})

app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body
  const result = num1 / num2
  res.json({ result })
})

app.listen(port, () => {
  console.log(`Calculator API listening at http://localhost:${port}`)
})
