const questions = require('../../Data/Questions')

function getRandomQuestions() {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 30);
}
const getQuiz = async (req, res) => {
    const randomQuestions = getRandomQuestions();
    res.json(randomQuestions);
};

module.exports = {
    getQuiz
}