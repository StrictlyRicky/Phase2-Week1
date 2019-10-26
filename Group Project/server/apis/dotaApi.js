const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://api.opendota.com/api'
})


module.exports = instance