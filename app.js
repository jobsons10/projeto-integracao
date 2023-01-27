fetch('https://api-grupootg.onrender.com/user')
.then((res) => res.json())
.then((data) => console.log(data))

// animacao apos fazer login
function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)
    const gameSection = document.querySelector('.game')
    const loginSection = document.querySelector('.login')
    console.log(data);
    if (data) {
        if((data.email).includes('@grupootg') || (data.email).includes('@compayz')){
            const buttonDiv = document.querySelector('#buttonDiv')
            const logoTc = document.querySelector('.logo-tc')
            const logoR10 = document.querySelector('.logo-r10')
            const logoUmb = document.querySelector('.logo-umb')
            const logoCpz = document.querySelector('.logo-cpz')
            const bgCpz = document.querySelector('.bg-cpz')
            logoCpz.classList.add('logo-active')
            buttonDiv.classList.add("hide-me")
            setTimeout(() => {
                bgCpz.classList.add('active')
                setTimeout(() => {
                    loginSection.classList.add('hide-me')
                    gameSection.classList.remove('hide-me')
                    setTimeout(() => {
                        logoCpz.classList.add('hide-me');
                    },2400)
                },2500)
            },2500)
            


            // loginSection.classList.add("hide-me")
            // gameSection.classList.remove('hide-me')

        }else{
            console.log('Por favor, entre com seu e-mail corporativo!')
        }
    }
}








// Adicionar as class de animation na bola
const ball = document.querySelector('#ball-img');

