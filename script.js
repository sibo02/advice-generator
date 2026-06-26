function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice?timestamp=' + new Date().getTime())
        .then(response => response.json())
        .then(data => {
            document.getElementById('advice-id').textContent = data.slip.id
            document.getElementById('advice-text').textContent = data.slip.advice
        })
}

fetchAdvice()

document.getElementById('dice-btn').addEventListener('click', fetchAdvice)