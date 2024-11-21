// Sample array to hold user data
let users = [];

// Function to render users

function renderUsers() {
  $('#users').empty(); // Clear previous list
  users.forEach(user => {
    $('#users').append(`
      <li data-id="${user.id}">
        <strong>${user.name}</strong> - ${user.email}
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </li>
    `);
  });
}

// Function to add a user

$('#add').click(function() {
  const name = $('#name').val();
  const email = $('#email').val();
  if (name && email) {
    const user = { id: Date.now(), name, email };
    users.push(user);
    renderUsers();
    $('#name, #email').val(''); // Clear input fields
  } else {
    alert('Please enter name and email');
  }
});

// Function to delete a user

$(document).on('click', '.delete', function() {
  const id = $(this).closest('li').data('id');
  users = users.filter(user => user.id !== id);
  renderUsers();
});

// Function to edit a user

$(document).on('click', '.edit', function() {
  const id = $(this).closest('li').data('id');
  const user = users.find(user => user.id === id);
  const newName = prompt('Enter new name:', user.name);
  if (newName !== null) {
    user.name = newName;
    renderUsers();
  }
});
