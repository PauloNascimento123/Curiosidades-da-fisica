// Array contendo objetos com os links e suas URLs correspondentes
const links = [
    { element: document.getElementById('lattes'), url: 'http://lattes.cnpq.br/3585506331737815' },
    { element: document.getElementById('linkedin'), url: 'https://www.linkedin.com/in/paulo-henrique-do-nascimento-095318292/' },
    { element: document.getElementById('github'), url: 'https://github.com/PauloNascimento123' }
];

// Adiciona os event listeners usando um loop
for (const link of links) {
    link.element.addEventListener('click', function() {
        window.location.href = link.url;
    });
}

/* Efeito de expansão. */
document.querySelectorAll('.header').forEach(header => {
    header.addEventListener('click', () => {
        header.parentElement.classList.toggle('open');
    });
});


/** Calculadora */
document.getElementById('calculator').addEventListener('click', () => {
    const unidades = document.getElementsByName('tempo');
    let unidadeSelecionada = unidades.value;

    for (const unidade of unidades) {
        if (unidade.checked) {
            unidadeSelecionada = unidade.value;
            break;
        }
    }
    
    if(unidadeSelecionada == 'horas') {
        document.getElementById('unidadeTempo').textContent = 'Horas.'
        const tempoViajante = parseFloat(document.getElementById('num1').value);
        let velocidade = parseFloat(document.getElementById('num2').value);
        
        if(velocidade >= 300000) {
            alert('A velocidade deve ser menor que 300000 km/s.')
            return;
        } else {
            velocidade = velocidade*3600;
        }
        const c = 300000*3600; // Velocidade da Luz em Km/h.
        
        if (isNaN(tempoViajante) || isNaN(velocidade)) {
            document.getElementById('result1').textContent = `00 Horas.`;
            document.getElementById('result2').textContent = `00 Horas.`;
            return;
        };

        let tempoTerra = tempoViajante/(Math.sqrt(1-(velocidade**2/c**2)));

        if (Number.isInteger(tempoTerra)) {
            document.getElementById('result1').textContent = `${tempoTerra} Horas.`;    
        } else {
            document.getElementById('result1').textContent = tempoTerra.toFixed(6).replace('.',',') + ' Horas.';
        }
        
        document.getElementById('result2').textContent = `${tempoViajante} Horas.`;
    }

    if(unidadeSelecionada == 'dias') {
        document.getElementById('unidadeTempo').textContent = 'Dias.'
        const tempoViajante = parseFloat(document.getElementById('num1').value);
        let velocidade = parseFloat(document.getElementById('num2').value);
        
        if(velocidade >= 300000) {
            alert('A velocidade deve ser menor que 300000 km/s.')
            return;
        } else {
            velocidade = velocidade*3600*24;
        }
        const c = 300000*3600*24; // Velocidade da Luz em Km/d.
        
        if (isNaN(tempoViajante) || isNaN(velocidade)) {
            document.getElementById('result1').textContent = `00 Dias.`;
            document.getElementById('result2').textContent = `00 Dias.`;
            return;
        };

        let tempoTerra = tempoViajante/(Math.sqrt(1-(velocidade**2/c**2)));

        if (Number.isInteger(tempoTerra)) {
            document.getElementById('result1').textContent = `${tempoTerra} Dias.`;    
        } else {
            document.getElementById('result1').textContent = tempoTerra.toFixed(6).replace('.',',') + ' Dias.';
        }
        
        document.getElementById('result2').textContent = `${tempoViajante} Dias.`;
    }

    if(unidadeSelecionada == 'anos') {
        document.getElementById('unidadeTempo').textContent = 'Anos.'
        const tempoViajante = parseFloat(document.getElementById('num1').value);
        let velocidade = parseFloat(document.getElementById('num2').value);
        
        if(velocidade >= 300000) {
            alert('A velocidade deve ser menor que 300000 km/s.')
            return;
        } else {
            velocidade = velocidade*3600*24*365;
        }
        
        const c = 300000*3600*24*365; // Velocidade da Luz em Km/ano.
        
        if (isNaN(tempoViajante) || isNaN(velocidade)) {
            document.getElementById('result1').textContent = `00 Anos.`;
            document.getElementById('result2').textContent = `00 Anos.`;
            return;
        };

        let tempoTerra = tempoViajante/(Math.sqrt(1-(velocidade**2/c**2)));

        if (Number.isInteger(tempoTerra)) {
            document.getElementById('result1').textContent = `${tempoTerra} Anos.`;    
        } else {
            document.getElementById('result1').textContent = tempoTerra.toFixed(6).replace('.',',') + ' Anos.';
        }
        
        document.getElementById('result2').textContent = `${tempoViajante} Anos.`;
    }

});

/** LIMPAR A CALCULADORA */
document.getElementById('limpar').addEventListener('click', () => {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    return;
})


/** SELECIONAR AS PÁGINAS */
document.addEventListener('DOMContentLoaded', function() {
    // Inicialmente, exiba apenas a seção "pagina_inicial"
    document.getElementById('boxdualiade_onda_particula').style.display = 'none';
    document.getElementById('boxquem_chega_primeiro').style.display = 'none';
    document.getElementById('viagem_no_tempo').style.display = 'none';
    document.getElementById('pagina_inicial').style.display = 'block';

    // Adicione um ouvinte de clique para cada botão
    document.getElementById('foton').addEventListener('click', function() {
        document.getElementById('pagina_inicial').style.display = 'none';
        document.getElementById('boxdualiade_onda_particula').style.display = 'block';
    });

    document.getElementById('galileu').addEventListener('click', function() {
        document.getElementById('pagina_inicial').style.display = 'none';
        document.getElementById('boxquem_chega_primeiro').style.display = 'block';
    });

    document.getElementById('tempo').addEventListener('click', function() {
        document.getElementById('pagina_inicial').style.display = 'none';
        document.getElementById('viagem_no_tempo').style.display = 'block';
    });

    document.getElementById('retornoPagina').addEventListener('click', function() {
        document.getElementById('boxdualiade_onda_particula').style.display = 'none';
        document.getElementById('boxquem_chega_primeiro').style.display = 'none';
        document.getElementById('viagem_no_tempo').style.display = 'none';
        document.getElementById('pagina_inicial').style.display = 'block';
    });

});