const highScoresLIst = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresLIst.innerHTML =  highScores
    .map( score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`
    // highScoresLIst.innerText = `${score.name}-${score.score}`;
    })
    .join("");