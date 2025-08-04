/*function enviarMensagem(event) {
    event.preventDefault()


    const nome = document.getElementById('nome').value
    const mensagem = document.getElementById('mensagem').value
    const telefone = (numero de telefone do destinatário)

    const texto = `Ola! Me chamo ${nome}, ${mensagem}`
    const mensagemFormat = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${mensagemFormat}`
    console.log(url)
    window.open(url, '_blank')

}

Com o uso do GetElementById as variaveis nome e mensagem são armazenadas e usadas em uma template string (com o numero de telefone do destinatário e a mensagem que deverá ser enviada) logo após serem formatadas da maneira correta

*/

function openModal(id) {
    document.getElementById(id).style.display = "block";
  }

  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }


  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }





