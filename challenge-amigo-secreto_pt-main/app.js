// Array para armazenar os nomes dos amigos
let amigos = [];
let amigosRestantes = []; // Lista auxiliar para o sorteio

// Função para adicionar nomes à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome !== '') {
        amigos.push(nome);
        amigosRestantes.push(nome); // Adiciona também à lista de sorteio
        atualizarListaAmigos();
        input.value = '';
        input.focus();
    }
}

// Função para atualizar a lista exibida na página
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para realizar o sorteio individual
function sortearAmigo() {
    if (amigosRestantes.length === 0) {
        alert('Todos os amigos já foram sorteados!');
        return;
    }

    // Sorteia um amigo aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigosRestantes.length);
    const amigoSorteado = amigosRestantes[indiceAleatorio];

    // Remove o amigo sorteado da lista de sorteio (não da lista exibida na tela)
    amigosRestantes.splice(indiceAleatorio, 1);

    // Exibe o resultado do sorteio
    alert(`Você tirou: ${amigoSorteado}!`);
}