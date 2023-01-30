// função após fazer login
function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  const gameSection = document.querySelector(".game");
  const loginSection = document.querySelector(".login");
  const awardSection = document.querySelector(".award");
  console.log(data);

  if (data) {
    // VERIFICAR SE O LOGIN FOI FEITO
    if (data.email.includes("@grupootg") || data.email.includes("@compayz")) { // VERIFICAR SE O O EMAIL LOGADO É CORPRATIVO
      fetch(`https://api-grupootg.onrender.com/user/${data.email}`)
      .then((response) => response.json())
        .then((data) => {
            if(data.company === "tylty company"){
                const buttonDiv = document.querySelector("#buttonDiv"); //PEGANDO O BOTÃO DE LOGIN DO GOOGLE
                const logoTc = document.querySelector(".logo-tc"); // PEGANDO A LOGO DA TYLTY COMPANY
               const bg = document.querySelector(".bg-tc"); // PEGANDO O BG DA TYLTY COMPANY
               logoTc.classList.add("logo-active"); // COLOCANDO A LOGO DA COMPAY Z COMO ATIVA
               buttonDiv.classList.add("hide-me"); // ESCONDENDO O BOTÃO DE LOGIN DO GOOGLE
               setTimeout(() => {
                // TIMEOUT PARA AS ANIMAÇÕES
                bg.classList.add("active"); // COLOCANDO O BG DA COMPAY Z COMO ATIVO
                setTimeout(() => {
                  // MAIS UM TIMEOUT PARA AS ANIMAÇÕES
                  loginSection.classList.add("hide-me"); // ESCONDENDO A SEÇÃO DE LOGIN
                  if(data.chances === 1){
                      gameSection.classList.remove("hide-me"); // MOSTRANDO A TELA DO JOGO
                  }
                  else{
                    awardSection.classList.remove("hide-me");
                  }
                  setTimeout(() => {
                    // OUTRO TIMEOUT PRA DELAY DE ANIMAÇÃO
                    logoTc.classList.add("hide-me"); // ESCONDENDO A LOGO DA COMPAY Z
                  }, 2400); // FECHAMENTO DO PRIMEIRO TIMEOUT
                }, 2500); // FECHAMENTO DO SEGUNDO TIMEOUT
              }, 2500); // FECHAMENTO DO TERCEIRO TIMEOUT
            }

            else if(data.company === "r10"){
                const buttonDiv = document.querySelector("#buttonDiv"); //PEGANDO O BOTÃO DE LOGIN DO GOOGLE
                const logoR10 = document.querySelector(".logo-r10"); // PEGANDO A LOGO DA TYLTY COMPANY
               const bg = document.querySelector(".bg-r10"); // PEGANDO O BG DA TYLTY COMPANY
               logoR10.classList.add("logo-active"); // COLOCANDO A LOGO DA COMPAY Z COMO ATIVA
               buttonDiv.classList.add("hide-me"); // ESCONDENDO O BOTÃO DE LOGIN DO GOOGLE
               setTimeout(() => {
                // TIMEOUT PARA AS ANIMAÇÕES
                bg.classList.add("active"); // COLOCANDO O BG DA COMPAY Z COMO ATIVO
                setTimeout(() => {
                  loginSection.classList.add("hide-me"); // ESCONDENDO A SEÇÃO DE LOGIN
                  if(data.chances === 1){
                      gameSection.classList.remove("hide-me"); // MOSTRANDO A TELA DO JOGO
                  }
                  else{
                    awardSection.classList.remove("hide-me");
                  }
                  setTimeout(() => {
                    // OUTRO TIMEOUT PRA DELAY DE ANIMAÇÃO
                    logoR10.classList.add("hide-me"); // ESCONDENDO A LOGO DA COMPAY Z
                  }, 2400); // FECHAMENTO DO PRIMEIRO TIMEOUT
                }, 2500); // FECHAMENTO DO SEGUNDO TIMEOUT
              }, 2500); // FECHAMENTO DO TERCEIRO TIMEOUT
            }

            else if(data.company === "compay-z"){
                const buttonDiv = document.querySelector("#buttonDiv"); //PEGANDO O BOTÃO DE LOGIN DO GOOGLE
                const logoCpz = document.querySelector(".logo-cpz"); // PEGANDO A LOGO DA TYLTY COMPANY
               const bg = document.querySelector(".bg-cpz"); // PEGANDO O BG DA TYLTY COMPANY
               logoCpz.classList.add("logo-active"); // COLOCANDO A LOGO DA COMPAY Z COMO ATIVA
               buttonDiv.classList.add("hide-me"); // ESCONDENDO O BOTÃO DE LOGIN DO GOOGLE
               setTimeout(() => {
                // TIMEOUT PARA AS ANIMAÇÕES
                bg.classList.add("active"); // COLOCANDO O BG DA COMPAY Z COMO ATIVO
                setTimeout(() => {
                  loginSection.classList.add("hide-me"); // ESCONDENDO A SEÇÃO DE LOGIN
                  if(data.chances === 1){
                      gameSection.classList.remove("hide-me"); // MOSTRANDO A TELA DO JOGO
                  }
                  else{
                    awardSection.classList.remove("hide-me");
                  }
                  setTimeout(() => {
                    // OUTRO TIMEOUT PRA DELAY DE ANIMAÇÃO
                    logoCpz.classList.add("hide-me"); // ESCONDENDO A LOGO DA COMPAY Z
                  }, 2400); // FECHAMENTO DO PRIMEIRO TIMEOUT
                }, 2500); // FECHAMENTO DO SEGUNDO TIMEOUT
              }, 2500); // FECHAMENTO DO TERCEIRO TIMEOUT
            }

            else if(data.company === "umbrella"){
                const buttonDiv = document.querySelector("#buttonDiv"); //PEGANDO O BOTÃO DE LOGIN DO GOOGLE
                const logoUmb = document.querySelector(".logo-umb"); // PEGANDO A LOGO DA TYLTY COMPANY
               const bg = document.querySelector(".bg-umb"); // PEGANDO O BG DA TYLTY COMPANY
               logoUmb.classList.add("logo-active"); // COLOCANDO A LOGO DA COMPAY Z COMO ATIVA
               buttonDiv.classList.add("hide-me"); // ESCONDENDO O BOTÃO DE LOGIN DO GOOGLE
               setTimeout(() => {
                // TIMEOUT PARA AS ANIMAÇÕES
                bg.classList.add("active"); // COLOCANDO O BG DA COMPAY Z COMO ATIVO
                setTimeout(() => {
                    loginSection.classList.add("hide-me"); // ESCONDENDO A SEÇÃO DE LOGIN
                    if(data.chances === 5){
                        gameSection.classList.remove("hide-me"); // MOSTRANDO A TELA DO JOGO
                    }
                    else{
                      awardSection.classList.remove("hide-me");
                    }
                  setTimeout(() => {
                    // OUTRO TIMEOUT PRA DELAY DE ANIMAÇÃO
                    logoUmb.classList.add("hide-me"); // ESCONDENDO A LOGO DA COMPAY Z
                  }, 2400); // FECHAMENTO DO PRIMEIRO TIMEOUT
                }, 2500); // FECHAMENTO DO SEGUNDO TIMEOUT
              }, 2500); // FECHAMENTO DO TERCEIRO TIMEOUT
            }
            const dados = data
            gameAnimation(dados);
        })
    } else {
      const loginError = document.querySelector(".login-error");
      const buttonLoginError = document.querySelector("#button-login-error");
      loginError.classList.remove("hide-me");
      buttonLoginError.onclick = function(){
        loginError.classList.add("hide-me");
      }
    }

  }
}

// Adicionar as class de animation na bola
const gameAnimation = (dados) => {
    const ball = document.querySelector("#ball-img");
    ball.onclick = async function(){
        fetch('https://api-grupootg.onrender.com/award')
        .then(response => response.json())
        .then(data => {
            const awards = data.award
            const award = awards[Math.floor(Math.random()*awards.length)]
            const awardAmount = award.amount
            const awardAmountUpdated = (awardAmount - 1)
            ball.classList.add(`${award.type}`);
            if (awardAmountUpdated === 0) {
              fetch(`https://api-grupootg.onrender.com/award/${award.name}`, {
                method: "DELETE",
              })
            }
            else{
              fetch(`https://api-grupootg.onrender.com/award/${award.name}`,{
              method: "PATCH",
              headers: { "content-type": "application/json"},
              body: JSON.stringify(awardAmountUpdated),
              mode: 'no-cors'
            }
            )
            .catch(err => console.log(err))
            }
        })
    }
}

