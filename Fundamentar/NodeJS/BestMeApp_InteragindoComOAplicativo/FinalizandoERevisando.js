/*

*/

process.stdout.write("Alguma coisa")
const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hoje?"
]

const ask = (index = 0) => {
    return process.stdout.write(questions[index] + "\n\n\n")
}

ask()
const answers = []
process.stdin.on("data", (data) => {
    answers.push(data.toString().trim() + "\n")
    if (answers.length < questions.length){
        ask(answers.length);
    }
    else {
    console.log(answers);
    process.exit()
    }
}) 

process.on("exit", () => {
    console.log(`
    Bacana Felipe!
    
    O que voce aprendeu hoje foi:
    ${answers[0]}

    O que te aborreceu e poderia melhorar foi:
    ${answers[1]}

    O que te deixou feliz hoje foi:
    ${answers[2]}

    Você ajudou ${answers[2]} pessoas hoje!!

    Volte amanhã para novas reflexões
    `)
})