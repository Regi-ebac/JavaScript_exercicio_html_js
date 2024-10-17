document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagemDiv = document.getElementById('mensagem');

   
    mensagemDiv.classList.remove('sucesso', 'erro');
    mensagemDiv.style.display = 'none';

    if (campoB > campoA) {
        mensagemDiv.textContent = "Validação bem-sucedida! O número B é maior que o número A.";
        mensagemDiv.classList.add('sucesso');
    } else {
        mensagemDiv.textContent = "Validação falhou! O número B deve ser maior que o número A.";
        mensagemDiv.classList.add('erro');
    }

    mensagemDiv.style.display = 'block'; 
});

