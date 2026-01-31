import { useCallback, useState } from "react";

import QUESTIONS from "../questions.js";

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectedAnswer = useCallback((selectedAnswer) => {
        setUserAnswers((prev) => [...prev, selectedAnswer]);
    }, []);

    const handleSkipAnswer = useCallback(() => {
        handleSelectedAnswer(null);
    }, [handleSelectedAnswer]);

    if (quizIsCompleted) {
        return <Summary userAnswers={userAnswers} />;
    }

    return (
        <div id="quiz">
            <div id="question">
                <Question
                    questionIndex={activeQuestionIndex}
                    key={activeQuestionIndex}
                    onSelectedAnswer={handleSelectedAnswer}
                    onSkipAnswer={handleSkipAnswer}
                />
            </div>
        </div>
    );
};

export default Quiz;
