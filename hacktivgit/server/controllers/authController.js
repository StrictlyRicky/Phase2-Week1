const { OAuth2Client } = require('google-auth-library')

class AuthController {
    static logIn(req, res, next) {
        const client = new OAuth2Client(process.env.CLIENT_ID)
        const { id } = req.body
        client.verifyIdToken({
            idToken: id,
            audience: process.env.CLIENT_ID
        })
        .then(ticket => {
            const payload = ticket.getPayload()
            const { email, name } = payload
            res.status(200).json({ email, name })

        })
        .catch(next)
    }
}

module.exports = AuthController