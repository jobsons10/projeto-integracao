fetch('https://api-grupootg.onrender.com/user')
.then((res) => res.json())
.then((data) => console.log(data))

// Adicionar as class de animation na bola

const ball = document.querySelector('#ball-img');

