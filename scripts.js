let chave = 'f3a94003320574a003ca2607658e78a9'

function colocarNaTela(dados){
  console.log(dados)

  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp)  + "°C"
  document.querySelector(".icone").src="https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
  
  document.querySelector(".clima").innerHTML = "Condição Climática: " + dados.weather[0].description

   .split(" ")                      // separa cada palavra
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))  // coloca a primeira letra maiúscula
    .join(" ") + ".";                      // junta tudo de novo

  document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
  

  
}

async function buscarCidade(cidade) {
let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=f3a94003320574a003ca2607658e78a9&units=metric&lang=pt_br").then(resposta => resposta.json())

  // AWAIT = ESPERE
  // FETCH -> Ferramenta do JavaScript para acessar servidores
  // THEN -> ENTÃO
  // JSON -> JAVASCRIPT OBJECT NOTATION (O FORMATO QUE O JAVASCRIPT ENTENDE)

  
 colocarNaTela(dados)

}

document.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const button = document.getElementById('meuBotao');
    button.click();
  }
});

function cliqueiNoBotao() {
  let cidade = document.querySelector('.input-cidade').value
  

  buscarCidade(cidade)
}


