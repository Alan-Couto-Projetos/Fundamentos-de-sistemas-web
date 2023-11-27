function iniciarTemporizadorInatividade() {
    let temporizadorInatividade;

    function exibirMensagemInatividade() {
        // Exibir um pop-up usando alert
        alert("Você está inativo por um tempo, caso tenha surgido dúvidas entre em contato conosco\
 pelo e-mail o telefone no final da pagina");
    }

    temporizadorInatividade = setTimeout(exibirMensagemInatividade, 60000); // Configurado para 1 minuto

    document.addEventListener('mousemove', function() {
        // Reiniciar o temporizador quando houver movimento do mouse
        clearTimeout(temporizadorInatividade);
        temporizadorInatividade = setTimeout(exibirMensagemInatividade, 60000); // Configurado para 1 minuto
    });
}

// Chamando a função para iniciar o temporizador
iniciarTemporizadorInatividade();