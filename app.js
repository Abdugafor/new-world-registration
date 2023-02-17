const email = document.querySelector('#email'),
      password = document.querySelector('#password'),
      btn = document.querySelector('.btn'),
      btn2 = document.querySelector('#btn2'),
      theme = document.querySelector('.theme'),
      input = document.querySelectorAll('input'),
      container = document.querySelector('.container'),
      navigator = document.querySelector('.navigator'),
      text = document.querySelector('.text'),
      hello = document.querySelector('.hello'),
      body = document.querySelector('.body'),
      notif = document.querySelector('.alert'),
      closeAlert = document.querySelector('.close-btn'),
      password2 = document.querySelector('#repeatepassword'),
      link = document.querySelector('.loh'),
      footer = document.querySelector('.footer-p')


btn.addEventListener('click', (event) => {
    event.preventDefault()
   

    if (email.value == '') {
        email.classList.add('animation')
        setTimeout(() => {
            email.classList.remove('animation')
        }, 1500)
    }  if (password.value == '') {
        password.classList.add('animation')
        setTimeout(() => {
            password.classList.remove('animation')
        }, 1500)
    }    if (password2.value == '') {
        password2.classList.add('animation')
        setTimeout(() => {
            password2.classList.remove('animation')
        }, 1500)
    } if (password2.value != password.value) {
        password2.classList.add('animation')
        setTimeout(() => {
            password2.classList.remove('animation')
        }, 1500)

        password.classList.add('animation')
        setTimeout(() => {
            password.classList.remove('animation')
        }, 1500)
    } 
    
})

btn2.addEventListener('click', () => {
    btn2.classList.toggle('btnmove')
    theme.classList.toggle('theme2')
    input.forEach((e) => {
        e.classList.toggle('input2')
    })
    navigator.classList.toggle('body2')
    text.classList.toggle('text2')
    hello.classList.toggle('text2')
    body.classList.toggle('body3')  
    link.classList.toggle('text2')
    footer.classList.toggle('text2')
})


// App starting

