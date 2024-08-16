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

document.getElementById('book-select').addEventListener('change', function(event) {
    const quizContainer = document.getElementById('quiz-container');
    if (event.target.value) {
        quizContainer.style.display = 'block';
    } else {
        quizContainer.style.display = 'none';
    }
});

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const resultDiv = document.getElementById('quiz-result');

    if (selectedOption) {
        const answer = selectedOption.value;
        const correctAnswer = 'D'; // Resposta correta
        let resultText = '';

        if (answer === correctAnswer) {
            resultText = 'Parabéns! Você acertou!';
            showResultMessage('correct', resultText);
            playSound('correct');
        } else {
            resultText = 'Que pena! Você errou!';
            showResultMessage('incorrect', resultText);
            playSound('incorrect');
        }

        resultDiv.textContent = resultText;
    } else {
        resultDiv.textContent = 'Por favor, selecione uma opção.';
    }
});

function showResultMessage(type, message) {
    const resultMessage = document.getElementById('result-message');
    const resultText = document.getElementById('result-text');

    resultMessage.className = '';
    resultMessage.classList.add(type);
    resultText.textContent = message;

    if (type === 'correct') {
        launchConfetti();
    }

    resultMessage.style.display = 'block';
    document.querySelector('.content').classList.add('blurred');

    setTimeout(() => {
        resultMessage.style.display = 'none';
        document.querySelector('.content').classList.remove('blurred');
    }, 3500);
}

function launchConfetti() {
    var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
    confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
    });
    }

    fire(0.25, {
    spread: 26,
    startVelocity: 55,
    });
    fire(0.2, {
    spread: 60,
    });
    fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
    });
    fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
    });
    fire(0.1, {
    spread: 120,
    startVelocity: 45,
    });
}

function playSound(type) {
    const sound = document.getElementById(type + '-sound');
    sound.play();
}
