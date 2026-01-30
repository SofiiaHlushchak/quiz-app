import { useState } from "react";

import QUESTIONS from "../questions.js";
import quizCompletedImg from "../assets/quiz-complete.png";

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectedAnswer = (selectedAnswer) => {
        setUserAnswers((prev) => [...prev, selectedAnswer]);
    };

    if (quizIsCompleted) {
        return (
            <div id="summary">
                <img src={quizCompletedImg} alt="quiz completed img" />
                <h2>Quiz Completed!</h2>
            </div>
        );
    }

    const shuffledAnswers = QUESTIONS[activeQuestionIndex].answers.sort(
        () => Math.random() - 0.5,
    );

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button
                                onClick={() => {
                                    handleSelectedAnswer(answer);
                                }}
                            >
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Quiz;
