$(document).ready(() => {
    $('#container').hide()
    $('#signOutButton').hide()
    $('.navbar-toggler').attr('disabled', true)
    const showAll = () => {
        $.ajax({
            type: 'GET',
            url: "http://localhost:3000"
        })
        .done(repositories => {
            repositories.forEach(repository => {
                const name = repository.name
                $('#AllRepo').append(`<li>${name}</li>`)
            })
        })
        .fail(console.log)
    }

    const showAllStarred = () => {
        $.ajax({
            type: 'GET',
            url: "http://localhost:3000/starred"
        })
        .done(repositories => {
            repositories.forEach(repository => {
                const name = repository.name
                $('#AllRepo').prepend(`<li>${name}</li>`)
            })
        })
        .fail(console.log)
    }

    const findByUsername = () => {
        let data = {
            username : $('#username').val()
        }
        $.ajax({
            type: 'POST',
            url: `http://localhost:3000/user`,
            data,
            dataType: 'json'
        })
        .done(repositories => {
            $('#username').val('')
            $('#FoundResult').empty()
            repositories.forEach(repository => {
                console.log(repository)
                $('#FoundResult').prepend(
                    `<div class="card">
                    <li class="list-group-item"><button type="button" class="btn btn-primary btn-sm" id="repoName">${repository.name}</button>
                    <p>${repository.description || 'No Description'}</p>
                    <p>${repository.language}</p>
                    <span class="badge badge-primary badge-pill">${repository.stargazers_count} Stars</span></li>
                    </div>`)
            })
        })
        .fail(console.log)
    }

    $('#FindUsernameForm').on('submit', () => {
        event.preventDefault()
        findByUsername()
    })

    $('#show').on('click', () => {
        $('#AllRepo').empty()
        showAll()
        $('#ViewAll').show()
    })

    $('#show_starred').on('click', () => {
        $('#AllRepo').empty()
        showAllStarred()
        $('#ViewAll').show()
    })

    $('#hide').on('click', () => {
        $('#ViewAll').hide()
    })
    showAll()

    $('#container2').append(
        `<div class="text-center">
        <h1>Welcome to HacktivGit!
        <br>
        Please Log In!</h1>
        </div>`)

    $('#NewForm').on('submit', (e) => {
        e.preventDefault()
        const name = $('#name').val()
        const description = $('#description').val()
        $.ajax({
            type: 'post',
            url: 'http://localhost:3000',
            data: {
                name,
                description
            }
        })
        .done(() => {
            $('#container3').append(`
            <div class="alert alert-success" role="alert" id="success">
            <strong>Success!</strong> Repository created successfully!</div>`)
            $('#name').html('')
            $('#description').html('')
            $('#success').hide(1500)
        })
        .fail(console.log)
    })
})