import { useState } from "react";

const Quiz = () => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    return <p>Currently active question</p>;
};

export default Quiz;
