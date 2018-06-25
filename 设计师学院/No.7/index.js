$(function () {
    
    var email = $('#email')
    var password = $('#password')

    var formLabelEmail = $('#form__label__email')
    var formLabelPassword = $('#form__label__password')

    email.focus(function () {
        if (!(email.val().length)) {
            formLabelEmail.addClass('active')
        }
    })

    email.blur(function () {
        if (!(email.val().length)) {
            formLabelEmail.removeClass('active')
        }
    })

    password.focus(function () {
        if (!(password.val().length)) {
            formLabelPassword.addClass('active')
        }
    })

    password.blur(function () {
        if (!(password.val().length)) {
            formLabelPassword.removeClass('active')
        }
    })

    email.change(function(){
        toogleBtn()
    })

    password.change(function(){
        toogleBtn()
    })


    function toogleBtn() {
        if ((email.val().length) && (password.val().length)) {
            $('#btn').addClass('bounceIn')
        } else {
            $('#btn').removeClass('bounceIn')
        }
    }


})