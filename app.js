$(document).ready(function() {
    // Adiciona uma nova tarefa
    $('#adicionarTarefa button').click(function() {
        let tarefa = $('#adicionarTarefa input').val();
        if(tarefa.trim() !== '') {
            $('#lista ul').append('<li><input type="checkbox">' + tarefa + ' <button class="excluir">X</button></li>');
            $('#adicionarTarefa input').val('');
        } 
    });

    // Riscar a tarefa quando clicada
    $('#lista ul').on('click', 'li', function() {
        $(this).toggleClass('riscada');
    });

    // Excluir tarefa quando o botão de exclusão é clicado
    $('#lista ul').on('click', 'li button.excluir', function(event) {
        $(this).parent().remove();
        event.stopPropagation(); // Impede que o evento de clique do item seja acionado
    });
});
