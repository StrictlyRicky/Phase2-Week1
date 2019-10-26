function onSignIn(googleUser) {
    $('.navbar-toggler').removeAttr('disabled')
    $('#container2').hide()
    $('#success').remove()
    $('#signOutButton').show()
    $('#signInButton').hide()
    $('#container').show()
    const id_token = googleUser.getAuthResponse().id_token
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/logIn',
        data: {
            id: id_token
        },
        dataType: 'json'
    })
    .done(() => {
        $('#container').prepend(`<div class="alert alert-success" id="success">
        <strong>Successfully signed in!</strong></div>`)
        $('#success').hide(1500)
    })
    .fail(console.log)
}

function signOut() {
    $('.navbar-toggler').attr('disabled', true)
    $('#navbarToggleExternalContent').removeClass('show')
    $('#container2').show()
    $('#signInButton').show()
    $('#signOutButton').hide()
    $('#success').remove()
    var auth2 = gapi.auth2.getAuthInstance()
    auth2.signOut()
    .then(() => {
        $('#container').hide()
        $('#container2').prepend(`<div class="alert alert-success" id="success">
        <strong>Successfully logged out!</strong></div>`)
        $('#success').hide(1500)
    })
    .catch(console.log)
}
