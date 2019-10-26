const dotaAPI = require('../apis/dotaApi')
const emotionAPI = require('../apis/emotionApi')
const pd = require('paralleldots')
pd.apiKey = 'qdjyIpk7YfLmjrkrDTBFD4ZijXkrikJUfwwojF3e4v0'

class DotaController {
  static getHeroes(req, res) {
    dotaAPI
      .get('/heroes')
      .then(heroes => {
        res.status(200).json(heroes.data)
      })
      .catch(console.log)
  }

  static findHeroes(req, res) {
    const { text } = req.body

    let sentiment
    pd.sentiment(text, 'en')
      .then((response) => {
        sentiment = JSON.parse(response).sentiment
        return dotaAPI.get('/heroes')
      })
      .then(heroes => {
        console.log(sentiment)
        let val = Object.values(sentiment)
        const max = Math.max(...val)
        let sense

        for (let key in sentiment) {
          if (sentiment[key] === max) {
            console.log(key)
            if (key === 'negative') {
              sense = key
            }
            if (key === 'neutral') {
              sense = key
            }
            if (key === 'positive') {
              sense = key
            }
          }
        }
        let arr = []
        // console.log(heroes)
        if (sense === 'negative') {
          heroes.data.forEach(el => {
            // console.log(el.roles)
            let fill = el.roles.find(role => role === 'Carry' || role === 'Nuker' || role === 'Initiator')
            if (fill) {
              arr.push(el)
            }
          })
        }

        if (sense === 'neutral') {
          heroes.data.forEach(el => {
            // console.log(el.roles)
            let fill = el.roles.find(role => role === 'Durable')
            if (fill) {
              arr.push(el)
            }
          })
        }

        if (sense === 'positive') {
          heroes.data.forEach(el => {
            // console.log(el.roles)
            let fill = el.roles.find(role => role === 'Support' || role === 'Jungler')
            if (fill) {
              arr.push(el)
            }
          })
        }

        const random = Math.floor(Math.random() * arr.length)

        res.status(200).json(arr[random])
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

module.exports = DotaController