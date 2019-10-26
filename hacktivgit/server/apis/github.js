const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization : `token ${process.env.GITHUB_TOKEN}`
    }
})

module.exports = instance