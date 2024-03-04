$(document).ready(function() {
    $('#adicionarTarefa button').click(function() {
        let tarefa = $('#adicionarTarefa input').val();
        if(tarefa.trim() !== '') {
            $('#lista ul').append('<li><input type="checkbox">' + tarefa + ' <button class="excluir">X</button></li>');
            $('#adicionarTarefa input').val('');
        } 
    });

    $('#lista ul').on('click', 'li', function() {
        $(this).toggleClass('riscada');
    });

    $('#lista ul').on('click', 'li button.excluir', function(event) {
        $(this).parent().remove();
        event.stopPropagation();
    });
});
