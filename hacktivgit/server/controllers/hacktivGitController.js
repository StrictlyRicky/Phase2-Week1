const githubAPI = require('../apis/github')

class HactivGitController {
    static showAllRepos(req, res, next) {
        githubAPI.get('/user/repos?sort=updated&affiliation=owner')
        .then(( { data } ) => {
            if (data) {
                res.status(200).json(data)
            } else {
                next({
                    status: 401,
                    msg: 'User Not Found'
                })
            }
        })
        .catch(err => {
            next({
                msg: err.message
            })
        })
    }
    static showAllStarred(req, res, next) {
        githubAPI.get('/user/starred')
        .then(( { data } ) => {
            if (data) {
                res.status(200).json(data)
            } else {
                next({
                    status: 401,
                    msg: 'Starred Not Found'
                })
            }
        })
        .catch(err => {
            next({
                msg: err.message
            })
        })
    }
    static create(req, res, next) {
        const { name } = req.body
        console.log(name)
        if (!req.body || !name) {
            next({
                status: 401,
                msg: 'Name Is Required'
            })
        } else {
            let obj = {}
            for (let prop in req.body) {
                if (req.body[prop]) {
                    obj[prop] = req.body[prop]
                }
            }
            console.log(obj)
            githubAPI.post('/user/repos', obj)
            .then(( { data } ) => {
                if (data) {
                    res.status(201).json(data)
                } else {
                    next({
                        status: 401,
                        msg: 'Create Unsuccessful'
                    })
                }
            })
            .catch(err => {
                next({
                    msg: err.message
                })
            })
        }
    }
    static findByUsername(req, res, next) {
        const { username } = req.body
        if (!username) {
            next({
                status: 401,
                msg: `Username Is Required`
            })
        } else {
            githubAPI.get(`/users/${username}/repos`)
            .then(( { data } ) => {
                if (data) {
                    res.status(200).json(data)
                } else {
                    next({
                        status: 401,
                        msg: 'User Not Found'
                    })
                }
            })
            .catch(err => {
                next({
                    msg: err.message
                })
            })
        }
    }
    static delete(req, res, next) {
        const { owner, repo } = req.params
        if (req.params.length < 2) {
            next({
                status: 401,
                msg: 'Owner And Repo Is Required'
            })
        } else {
            githubAPI.delete(`/user/starred/${owner}/${repo}`)
            .then(() => {
                res.status(200).json({
                    message: `Repo ${repo} Successfully Unstarred`
                })
            })
            .catch(err => {
                next({
                    msg: err.message
                })
            })
        }
    }
    static filter(req, res, next) {
        const { name, isPrivate } = req.body
        if (!name && !isPrivate) {
            next({
                status: 401,
                msg: 'Filter Field Must Not Be Empty'
            })
        }
        else {
            githubAPI.get('/user/starred')
            .then(( { data } ) => {
                let result = []
                data.forEach(repo => {
                    if (!name && String(repo.private) === isPrivate) {
                        result.push(repo)
                    } else if (!isPrivate && name === repo.name) {
                        result.push(repo)
                    } else if (name === repo.name && String(repo.private) === isPrivate){
                        result.push(repo)
                    }
                })
                if (result.length === 0) {
                    next({
                        status: 401,
                        msg: 'Current Search Returned 0'
                    })
                } else {
                    res.status(200).json(result)
                }
            })
            .catch(err => {
                next({
                    msg: err.message
                })
            })
        }
    }
}


module.exports = HactivGitController