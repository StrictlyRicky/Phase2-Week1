const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://apis.paralleldots.com/v5',
  
})


module.exports = instance