const express = require('express')
const cors = require('cors')
const PORT = 3000
const BOT_TOKEN = '6162392403:AAEoxKUPeB3DeUb4Y5_aVgWsCigrLQHyhP0'
const CHAT_ID = '688839950'
const IGOR_ID = '275901433'
const URL = `https://api.telegram.org/bot${BOT_TOKEN}`
const TIMEOUT = 10;
const app = express()

const clients = []

app.use(express.json())
app.use(cors())


app.post('/sendLead', (req, res) => {
  clients.push(req.hostname)

  const body = {...req.body, chat_id: CHAT_ID}
  console.log(body)
  fetch(URL + '/sendMessage', { 
    method: 'POST',
    headers: {"Content-Type": "application/json"}, 
    body: JSON.stringify(body)
  }).then((e) => {
    console.log(e);
    if (e.status === 200) {
      res.send({ message: 'success', error: undefined})
    } else {
      res.send({ message: 'fail', error: e})
    }
  })
})
app.listen(PORT, () => {})