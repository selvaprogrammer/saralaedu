import React, { useState } from "react";
import toast from "react-hot-toast";
import {
    Panel,
    Button,
    RadioGroup,
    Radio,
    Progress,
} from "rsuite";
import Completed from "./Completed";
import AppHeader from "../AppHeader";
interface Props {
    questions: any;
}
export default function Questionare(props: Props) {
    const { questions } = props;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const current = questions[currentQuestion];
    const handleNext = () => {
        if (!selectedAnswer) return toast.error("Please select an answer")
        let isCorrect = false;
        if (selectedAnswer === current.answer) {
            isCorrect = true;
            setCorrectCount(prev => prev + 1);
        } else {
            setWrongCount(prev => prev + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer("");
        }
        else setQuizFinished(true);
    };
    const percentage = ((correctCount / questions.length) * 100).toFixed(0);
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const retest = () => {
        setQuizFinished(false); setCurrentQuestion(0); setWrongCount(0); setCorrectCount(0);
    }
    if (quizFinished) {
        return <Completed correctCount={correctCount} count={questions.length} onRetest={retest}
            percentage={percentage} wrongCount={wrongCount} />
    }
    return (
        <div style={{ maxWidth: 700, margin: "40px auto" }}>
            <AppHeader label="Self Evaluation" link="/eval" title="Quiz" />
            <Panel bordered shaded>
                <h4> Question {currentQuestion + 1} / {questions.length}</h4>
                <Progress.Line percent={progress} status="active" />
                <h5 style={{ marginTop: 20 }}>  {current.question}</h5>
                <RadioGroup name="quiz" value={selectedAnswer} onChange={(value: any) => setSelectedAnswer(value)}>
                    {current.options.map((option:any, index:number) => (
                        <Radio key={index} value={option} style={{ marginTop: 10 }}>
                            {option}
                        </Radio>
                    ))}
                </RadioGroup>
                <div style={{ marginTop: 25 }}>
                    <Button appearance="primary" onClick={handleNext} >
                        {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                    </Button>
                </div>
            </Panel>
        </div>
    );
}