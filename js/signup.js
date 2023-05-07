const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // checkeo de ingreso
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = users.find(user => user.email === email);
    if(isUserRegistered){
        return alert('El usuario ya esta registrado')
    } 
    users.push({name :name, email: email, password : password});
    
    localStorage.setItem('usuarios', JSON.stringify(users));
    alert('Registro exitoso');
    // redireccion al alogin
    window.location.href = 'login.html'
})
