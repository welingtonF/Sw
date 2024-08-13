$(document).ready(function() {
    $('#meubotao').click(function() {
        console.log("se isso apareceu FUNCIONOUUUUUUUUUUUU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        const tel = $('#idtel').val();
        const cpf = $('#idcpf').val();
        const nome = $('#idname').val();
        const cid = $('#idcidade').val();
        const date = $('#iddate').val();

        const mensagem =
        'Nome: ' + nome + '\nCidade: ' + cid + '\nData de Nasc: ' + date + 
        '\nTelefone: ' + tel + '\nCPF: ' + cpf ;
    
        alert(mensagem);

    });
});