const answersJson = `{
    "answers": [
        "Ja, auf jeden Fall!",
        "Frag später noch einmal.",
        "Das sieht nicht gut aus.",
        "Ja, definitiv.",
        "Ich bin mir nicht sicher.",
        "Nein, das ist nicht möglich.",
        "Vielleicht, aber nicht jetzt.",
        "Klar, warum nicht?",
        "Du kannst darauf wetten!",
        "Es ist höchst unwahrscheinlich."
    ]
}`;

const answers = JSON.parse(answersJson).answers;

function shakeBall(question) {
    if (question.trim() === "") {
        return "Bitte stelle eine Frage!";
    }
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

// Beispiel zur Verwendung
const userQuestion = "Werde ich heute Glück haben?";
const response = shakeBall(userQuestion);
console.log("Antwort: " + response);
