/* ELEMENTOS */
const slider = document.getElementById('slider');
const valor = document.getElementById('valor');
const unidades = document.getElementById('unidades');
const porte = document.getElementById('porte');
const alerta = document.getElementById('alerta');
const toqueBox = document.getElementById('toqueBox');

/* VALOR TOQUE BOX */
const valorToqueBox = 33.90;

/* CALCULAR */
function calcularValor(qtd) {
    let total = 89.90;

    // ATÉ 25
    if (qtd <= 25) {
        total = 89.90;
    }
    // 26 A 35
    else if (qtd <= 35) {
        total = 89.90 + ((qtd - 25) * 2.90);
    }
    // 36 A 99
    else if (qtd <= 99) {
        total = 89.90 + (10 * 2.90) + ((qtd - 35) * 3.50);
    }
    // 100 A 200
    else {
        total = 89.90 + (10 * 2.90) + (64 * 3.50) + ((qtd - 99) * 3.15);
    }

    // TOQUE BOX
    if (toqueBox.checked) {
        total += valorToqueBox;
    }

    return total;
}

/* ATUALIZAR */
function atualizar() {
    const qtd = parseInt(slider.value);

    // NÚMERO
    unidades.innerText = qtd;

    // VALOR
    const total = calcularValor(qtd);
    valor.innerText = total.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    // PORTE
    let tipo = '';
    if (qtd <= 35) {
        tipo = 'Pequeno';
    } else if (qtd <= 99) {
        tipo = 'Médio';
    } else {
        tipo = 'Grande';
    }

    porte.innerHTML = `Porte: <span>${tipo}</span>`;

    // ALERTA
    if (qtd >= 200) {
        alerta.style.display = 'block';
    } else {
        alerta.style.display = 'none';
    }
}

/* EVENTOS */
slider.addEventListener('input', atualizar);
toqueBox.addEventListener('change', atualizar);

/* INICIAR */
atualizar();