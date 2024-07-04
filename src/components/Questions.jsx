
import { PHASES } from "./context";
import { useState, useEffect } from "react";


export const Questions = () => {
    const [currentPhase, setPhase] = useState(
        JSON.parse(localStorage.getItem('phase')) || 0
    ); 

    useEffect(() => {
        localStorage.setItem('phase', JSON.stringify(currentPhase))
    }, [currentPhase])
    

    const toggleNext = () => {
        if(currentPhase + 1 < PHASES.length) {
            setPhase(currentPhase + 1)
            setAnswered(false);
        } else {
            //FINISHED
        }
    }
    const [isAnswered, setAnswered] = useState(false);
    const [answerId, setAnswerId] = useState(0);
    const togglePrevious = () => {
        if(isAnswered) {
            setAnswered(false);
        }
        else if(currentPhase > 0) {
            setPhase(currentPhase-1);
        }
    }
    
    
    const CurrentAnswer = ({answer, index}) => {


        
        return(
            <>
                <img src={answer.answers_gif[answerId]} alt="" />
                <div>
                    {answer.answers[answerId]}
                </div>
                <a onClick={toggleNext}>Weiter</a>
            </>
        )
    }

    const CurrentQuestion = ({question, index}) => {
        const toggleClickAnswer = (index) => {
            setAnswered(true);
            setAnswerId(index);
        }
        return(
            <>
                <h1>
                    {currentPhase+1}. {question.title} 
                </h1>

                <h2>
                    {question.subtitle}
                </h2>
                <div className="answer-wrapper">
                    {
                        question.questions.map(
                            (question, i) => 
                                <a className="answer-button" onClick={() => toggleClickAnswer(i)}>
                                    {question}
                                </a>
                        )
                    }
                </div>
            </>    
        )
    }


    return(
        <>
            {
                !isAnswered ?
                <CurrentQuestion question={PHASES[currentPhase]} index={currentPhase}/>
                :
                <CurrentAnswer answer={PHASES[currentPhase]} index={currentPhase}/>

            }
            
            <a onClick={togglePrevious}>Previous</a>
            <h3>{currentPhase+1}/{PHASES.length}</h3>
        </>
    )

}