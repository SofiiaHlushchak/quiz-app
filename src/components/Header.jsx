import headerLogo from "../assets/quiz-logo.png";

const Header = () => {
    return (
        <header>
            <img src={headerLogo} alt="Quiz Logo" />
            <h1>ReactQuiz</h1>
        </header>
    );
};

export default Header;
