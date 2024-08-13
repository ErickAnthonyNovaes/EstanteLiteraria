document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('username', username);
        document.querySelectorAll('.restricted').forEach(link => link.style.display = 'block');
        document.getElementById('login-section').style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.querySelectorAll('.restricted').forEach(link => link.style.display = 'block');
        document.getElementById('login-section').style.display = 'none';
    } else {
        document.querySelectorAll('.restricted').forEach(link => link.style.display = 'none');
    }
});

document.getElementById('logout').addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.removeItem('username');
    document.querySelectorAll('.restricted').forEach(link => link.style.display = 'none');
    document.getElementById('login-section').style.display = 'block';
});