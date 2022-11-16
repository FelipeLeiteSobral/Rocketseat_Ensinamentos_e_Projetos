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
