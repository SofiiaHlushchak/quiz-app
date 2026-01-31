import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

const Summary = ({ userAnswers }) => {
    const skipperAnswers = userAnswers.filter((answer) => answer === null);
    const correctAnswers = userAnswers.filter(
        (answer, index) => answer === QUESTIONS[index].answers[0],
    );

    const skipperAnswersShare = Math.round(
        (skipperAnswers.length / QUESTIONS.length) * 100,
    );
    const correctAnswersShare = Math.round(
        (correctAnswers.length / QUESTIONS.length) * 100,
    );
    const incorrectAnswersShare =
        100 - skipperAnswersShare - correctAnswersShare;

    return (
        <div id="summary">
            <img src={quizCompletedImg} alt="quiz completed img" />
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skipperAnswersShare}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswersShare}%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{incorrectAnswersShare}%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let className = "user-answer";

                    if (answer === null) {
                        className += " skipped";
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        className += " correct";
                    } else {
                        className += " wrong";
                    }
                    return (
                        <li key={answer}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={className}>{answer ?? "skipped"}</p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};
export default Summary;
