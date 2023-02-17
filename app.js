window.addEventListener('DOMContentLoaded', () => {

    // Theme changer

    const blackTheme = document.querySelectorAll('.theme'),
          themeBtn = document.querySelector('.theme-btn'),
          themeBlock = document.querySelectorAll('.theme-block'),
          themeChanger = document.querySelector('.theme-changer')

    themeBtn.addEventListener('click', changeTheme)

    function changeTheme() {
        themeBtn.classList.toggle('theme-black-block')
        blackTheme.forEach(item => item.classList.toggle('theme-black'))
        themeBlock.forEach(item => item.classList.toggle('theme-black-block'))
        themeChanger.classList.toggle('theme-change')
    }

    // Forms

    const form = document.querySelector('form'),
          password = document.querySelector('#password'),
          password2  = document.querySelector('#repeatepassword')

    form.addEventListener('submit', postData)

    const messages = {
        load: 'Loading...',
        success: 'Successfuly!',
        fail: 'Error...'
    }

    function postData(e) {
        e.preventDefault()

        const pass = password.value
        const secondPassword = password2.value
        const error = document.createElement('div')

        if (pass != secondPassword || pass === '') {
            error.innerHTML = 'Password are not identical!'
            error.classList.add('error')
            form.append(error)
        }else {
            sendData()
            
        }
    }

    function sendData() {
        const statusMessage = document.createElement('div')
        statusMessage.classList.add('status')
        statusMessage.textContent = messages.load
        form.append(statusMessage)


        const request = new XMLHttpRequest()

        request.open('POST', 'server.php')

        const formData = new FormData(form)
        request.send(formData)

        request.addEventListener('load', () => {
            if (request.status === 200) {
                console.log(request.response)
                form.innerHTML = `
                <img src="success.png" alt="" width="100" class="imgS">
                ` 
                statusMessage.textContent = messages.success
                statusMessage.classList.add('green')
                form.append(statusMessage)
            }else {
                statusMessage.textContent = messages.fail
            }
        })
    }
})




