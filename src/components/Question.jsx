import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from "../questions.js";

const Question = ({ questionIndex, onSelectedAnswer, onSkipAnswer }) => {
    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        isCorrect: null,
    });

    let timer = 10000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    const handleSelectAnswer = (answer) => {
        setAnswer({ selectedAnswer: answer, isCorrect: null });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
            });

            setTimeout(() => {
                onSelectedAnswer(answer);
            }, 2000);
        }, 1000);
    };

    let answerState = "";

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? "correct" : "wrong";
    } else if (answer.selectedAnswer) {
        answerState = "answered";
    }

    return (
        <>
            <QuestionTimer
                key={timer}
                timeout={timer}
                onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
                mode={answerState}
            />
            <h2>{QUESTIONS[questionIndex].text}</h2>
            <ul id="answers">
                <Answers
                    answers={QUESTIONS[questionIndex].answers}
                    selectedAnswer={answer.selectedAnswer}
                    answerState={answerState}
                    handleSelectedAnswer={handleSelectAnswer}
                />
            </ul>
        </>
    );
};

export default Question;
