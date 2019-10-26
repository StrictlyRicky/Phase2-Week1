const router = require('express').Router()
const hacktivGitController = require('../controllers/hacktivGitController')

router.get('/', hacktivGitController.showAllRepos)
router.get('/starred', hacktivGitController.showAllStarred)
router.post('/', hacktivGitController.create)
router.post('/user/', hacktivGitController.findByUsername)
router.delete('/:owner/:repo', hacktivGitController.delete)
router.post('/filter', hacktivGitController.filter)

module.exports = router