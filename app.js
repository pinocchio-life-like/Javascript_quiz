const correctAnswer = ['B', 'B', 'B', 'B']

const form = document.querySelector('.quiz-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let score = 0

    const userAnswer = [
        e.target.q1.value,
        e.target.q2.value,
        e.target.q3.value,
        e.target.q4.value]
    correctAnswer.forEach((answer, i) => {
        if(answer == userAnswer[i]){
            score += 25
        }
    })
    scrollTo(0,0)
    document.querySelector('.result').classList.remove('d-none')

    let counter=0
    const scoreTimer = setInterval(() => {
        if(counter <= score){
            document.querySelector('span').innerText = `${counter++}%`
        }else(
            clearInterval(scoreTimer)
        )
    }, 20)
})