$(document).ready(function() {
    carregarPessoas();

    function carregarPessoas() {
        $.ajax({
            url: '/Pessoas',
            type: 'GET',
            success: function(data) {
                $('#pessoas-table tbody').empty();

                // Adiciona as pessoas à tabela
                data.forEach(function(pessoa) {
                    $('#pessoas-table tbody').append(`
                        <tr>
                            <td>${pessoa.Nome}</td>
                            <td>${pessoa.Email}</td>
                            <td>${pessoa.Telefone}</td>
                            <td class="acoes">
                                <button type="button" class="btn acao editar-btn" data-bs-toggle="modal" data-bs-target="#editarModal" data-pessoa-id="${pessoa._id}"><i class="bi bi-pencil-fill"></i></button>
                                <button type="button" class="btn acao excluir-btn"  data-pessoa-id="${pessoa._id}"><i class="bi bi-trash-fill"></i></button>
                            </td>
                        </tr>
                    `);
                });
            },
            error: function(err) {
                console.error('Erro ao carregar pessoas:', err);
            }
        });
    }

    $(document).on('click', '.excluir-btn', function() {
        var pessoaId = $(this).data('pessoa-id');
        if (confirm('Tem certeza de que deseja excluir esta pessoa?')) {
            $.ajax({
                url: '/pessoas/' + pessoaId,
                type: 'DELETE',
                success: function(response) {
                    carregarPessoas();
                },
                error: function(err) {
                    console.error('Erro ao excluir pessoa:', err);
                }
            });
        }
    });

    $(document).on('click', '.editar-btn', function() {
        var pessoaId = $(this).data('pessoa-id');
        carregarDadosPessoa(pessoaId);
    });

    $('#salvar-editar-btn').click(function() {
        var pessoaId = $('#edit-id-input').val();
        var nome = $('#nome-input-editar').val();
        var email = $('#email-input-editar').val();
        var telefone = $('#telefone-input-editar').val();

        if (nome && email && telefone) {
            var pessoaEditada = {
                Nome: nome,
                Email: email,
                Telefone: telefone
            };

            $.ajax({
                url: '/pessoas/' + pessoaId,
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(pessoaEditada),
                success: function(response) {
                    carregarPessoas();

                    $('#editarModal').modal('hide');
                },
                error: function(err) {
                    console.error('Erro ao editar pessoa:', err);
                }
            });
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });

    function carregarDadosPessoa(pessoaId) {
        $.ajax({
            url: '/pessoas/' + pessoaId,
            type: 'GET',
            success: function(data) {
                $('#edit-id-input').val(data._id);
                $('#nome-input-editar').val(data.Nome);
                $('#email-input-editar').val(data.Email);
                $('#telefone-input-editar').val(data.Telefone);
                $('#editarModal').modal('show');
            },
            error: function(err) {
                console.error('Erro ao obter detalhes da pessoa:', err);
            }
        });
    }

    $('#salvar-btn').click(function() {
        var nome = $('#nome-input').val();
        var email = $('#email-input').val();
        var telefone = $('#telefone-input').val();

        if (nome && email && telefone) {
            var novaPessoa = {
                Nome: nome,
                Email: email,
                Telefone: telefone
            };

            $.ajax({
                url: '/Pessoas',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(novaPessoa),
                success: function(response) {
                    carregarPessoas();

                    $('#staticBackdrop').modal('hide');
                },
                error: function(err) {
                    console.error('Erro ao adicionar pessoa:', err);
                }
            });
        } 
        else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
});