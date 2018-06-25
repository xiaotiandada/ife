$(function () {
    
    var email = $('#email')
    var password = $('#password')

    var formLabelEmail = $('#form__label__email')
    var formLabelPassword = $('#form__label__password')


    email.focus(function () {
        if (!(email.val().length)) {
            formLabelEmail.addClass('active')

        }
       $('.form__wrapper:eq(0)').addClass('form__wrapper__active')

    })

    email.blur(function () {
        if (!(email.val().length)) {
            formLabelEmail.removeClass('active')

        }
        $('.form__wrapper:eq(0)').removeClass('form__wrapper__active')

    })

    password.focus(function () {
        if (!(password.val().length)) {
            formLabelPassword.addClass('active')

        }
       $('.form__wrapper:eq(1)').addClass('form__wrapper__active')

    })

    password.blur(function () {
        if (!(password.val().length)) {
            formLabelPassword.removeClass('active')
        }

       $('.form__wrapper:eq(1)').removeClass('form__wrapper__active')

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