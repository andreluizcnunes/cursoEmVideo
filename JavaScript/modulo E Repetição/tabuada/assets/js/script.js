function gerador() {
  let num = document.getElementById("numTab");
  let result = document.getElementById("resultado");

  if (num.value.length == 0) {
    window.alert('Por favoor, digitar um número!');
  } else {
    let numero = Number(num.value);
    let contador = 1;
    result.innerHTML = '';

    while (contador <= 10) {
      let item = document.createElement('option');
      item.text = `${numero} x ${contador} = ${numero * contador}`;
      item.value = `tab${contador}`;
      result.appendChild(item);
      contador++;
    };
  };
};
