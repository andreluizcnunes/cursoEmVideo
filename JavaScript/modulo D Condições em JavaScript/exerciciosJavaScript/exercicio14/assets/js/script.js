function carregar(){
  let msg = window.document.getElementById('msg');
  let img = window.document.getElementById('imagem');
  let data = new Date();
  let hora = data.getHours();

  if (hora >= 0 && hora < 12) {
    msg.innerHTML = `Bom dia! Agora são ${hora} horas`;
    img.src = '/exercicio14/assets/img/morning.png';
    document.body.style.background = '#e2cd9f';
  } else if (hora >= 12 && hora < 18) {
    msg.innerHTML = `Boa Tarde! Agora são ${hora} horas`;
    img.src = '/exercicio14/assets/img/evening.png';
    document.body.style.background = '#b9846f'
  } else {
    msg.innerHTML = `Boa Noite! Agora são ${hora} horas`;
    img.src = '/exercicio14/assets/img/night.png';
    document.body.style.background = '#515154';
  }
}
