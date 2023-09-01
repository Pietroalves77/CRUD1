document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('crud-form');
    const tableBody = document.getElementById('table-body');
    let users = [];
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const nomeInput = document.getElementById('nome');
      const emailInput = document.getElementById('email');
      const telefoneInput = document.getElementById('telefone');
      const enderecoInput = document.getElementById('endereco');
  
      const newUser = {
        nome: nomeInput.value,
        email: emailInput.value,
        telefone: telefoneInput.value,
        endereco: enderecoInput.value
      };
  
      users.push(newUser);
      nomeInput.value = '';
      emailInput.value = '';
      telefoneInput.value = '';
      enderecoInput.value = '';
  
      updateTable();
    });
  
    function updateTable() {
      tableBody.innerHTML = '';
  
      for (const user of users) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.nome}</td>
          <td>${user.email}</td>
          <td>${user.telefone}</td>
          <td>${user.endereco}</td>
          <td><button class="btn btn-danger btn-sm delete-button">Excluir</button></td>
        `;
  
        const deleteButton = row.querySelector('.delete-button');
        deleteButton.addEventListener('click', function () {
          users = users.filter(u => u !== user);
          updateTable();
        });
  
        tableBody.appendChild(row);
      }
    }
  });
  