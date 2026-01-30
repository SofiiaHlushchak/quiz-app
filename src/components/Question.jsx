import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

const Question = ({
    question,
    selectedAnswer,
    onSelectedAnswer,
    onSkipAnswer,
    answerState,
}) => {
    return (
        <>
            <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
            <h2>{question.text}</h2>
            <ul id="answers">
                <Answers
                    answers={question.answers}
                    userAnswers={selectedAnswer}
                    answerState={answerState}
                    handleSelectedAnswer={onSelectedAnswer}
                />
            </ul>
        </>
    );
};

export default Question;
