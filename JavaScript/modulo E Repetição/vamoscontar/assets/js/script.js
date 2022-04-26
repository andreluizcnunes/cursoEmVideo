function gocontar(){
  let inicio = document.getElementById('start');
  let fim = document.getElementById('end');
  let numpass = document.getElementById('passo');
  let result = document.getElementById('resultado');

  if (inicio.value.length == 0 || fim.value.length == 0 || numpass.value.length == 0) {
    result.innerHTML = 'Impossivel Contar! coloque numero em todos os itens';
  } else {
    result.innerHTML = 'Contando: ';
    
    let inicioStart = Number(inicio.value);
    let fimEnd = Number(fim.value);
    let numPasso = Number(numpass.value);

    if (inicioStart < fimEnd) {
      
      for (let c = inicioStart; c <= fimEnd; c += numPasso) {
        result.innerHTML += `${c} \u{1F449}`;
      };

    } else {
      for (let c = inicioStart; c >= fimEnd; c -= numPasso) {
        result.innerHTML += ` ${c} \u{1F449}`;
      };
    };

    result.innerHTML += `\u{1f3c1}`;
  };
};
