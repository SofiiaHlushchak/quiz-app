
import { useRef } from "react";

const Answers = ({
    answers,
    userAnswers,
    answerState,
    handleSelectedAnswer,
}) => {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = answers.sort(() => Math.random() - 0.5);
    }
    return (
        <ul id="answers">
            {shuffledAnswers.current?.map((answer) => {
                const isSelected =
                    userAnswers[userAnswers.length - 1] === answer;
                let cssClass = "";

                if (answerState === "answered" && isSelected) {
                    cssClass = "selected";
                }
                console.log("answerState", answerState);
                console.log(
                    "",
                    (answerState === "correct" || answerState === "wrong") &&
                        isSelected,
                );
                if (
                    (answerState === "correct" || answerState === "wrong") &&
                    isSelected
                ) {
                    cssClass = answerState;
                }

                return (
                    <li key={answer} className="answer">
                        <button
                            onClick={() => {
                                handleSelectedAnswer(answer);
                            }}
                            className={cssClass}
                        >
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Answers;
