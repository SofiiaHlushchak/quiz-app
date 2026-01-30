import { useCallback, useState } from "react";

import QUESTIONS from "../questions.js";
import quizCompletedImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerState, setAnswerState] = useState("");

    const activeQuestionIndex =
        answerState === "" ? userAnswers.length : userAnswers.length - 1;

    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectedAnswer = useCallback(
        (selectedAnswer) => {
            setAnswerState("answered");
            setUserAnswers((prev) => [...prev, selectedAnswer]);

            setTimeout(() => {
                if (
                    selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]
                ) {
                    setAnswerState("correct");
                } else {
                    setAnswerState("wrong");
                }

                setTimeout(() => setAnswerState(""), 2000);
            }, 1000);
        },
        [activeQuestionIndex],
    );

    const handleSkipAnswer = useCallback(() => {
        handleSelectedAnswer(null);
    }, [handleSelectedAnswer]);

    if (quizIsCompleted) {
        return (
            <div id="summary">
                <img src={quizCompletedImg} alt="quiz completed img" />
                <h2>Quiz Completed!</h2>
            </div>
        );
    }

    return (
        <div id="quiz">
            <div id="question">
                <Question
                    key={activeQuestionIndex}
                    question={QUESTIONS[activeQuestionIndex]}
                    selectedAnswer={userAnswers}
                    onSelectedAnswer={handleSelectedAnswer}
                    onSkipAnswer={handleSkipAnswer}
                    answerState={answerState}
                />
            </div>
        </div>
    );
};

export default Quiz;
