function submitQuiz() {
    const correctAnswers = {
        q1: 'B',
        q2: 'A',
        q3: 'A',
        q4: 'A',
        q5: 'A',
        q6: 'A',
        q7: 'A',
        q8: 'A',
        q9: 'A',
        q10: 'A',
        q11: 'A',
        q12: 'B',
        q13: 'C',
        q14: 'A',
        q15: 'A',
        q16: 'A',
        q17: 'B',
        q18: 'A',
        q19: 'C',
        q20: 'A',
        q21: 'A',
        q22: 'A',
        q23: 'A',
        q24: 'A',
        q25: 'A',
        q26: 'A',
        q27: 'A',
        q28: 'A',
        q29: 'A',
        q30: 'A'
    };
    

    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    let detailedResult = '';
    

    for (let q in correctAnswers) {
        const userAnswer = document.querySelector(`input[name="${q}"]:checked`);
        
        if (userAnswer && userAnswer.value === correctAnswers[q]) {
            score++;
            detailedResult += `<p>${q}. To'g'ri: ${userAnswer.value}</p>`;
        } else {
            detailedResult += `<p>${q}. Noto'g'ri: ${
                userAnswer ? userAnswer.value : 'Javob berilmagan'
            }, To'g'ri: ${correctAnswers[q]}</p>`;
        }
    }

  
    let percentage = (score / totalQuestions) * 100;

  
    document.getElementById('result').innerHTML = `Sizning natijangiz: ${percentage.toFixed(2)}%`;
    document.getElementById('detailedResult').innerHTML = detailedResult;
}
