document.getElementById('login').addEventListener('click', function(e){
    e.preventDefault()
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let alerta = document.getElementById('alerta')
 
    if (username=='admin' && password=='abc123'){
        alerta.innerHTML = "<div class='alert alert-success'> Login com Sucesso </div>"
    }else{
        alerta.innerHTML = "<div class='alert alert-danger'> Username ou Senha inválidos </div>"
    }
})
    