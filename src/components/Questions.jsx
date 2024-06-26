
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
        }
    }

    const togglePrevious = () => {
        if(currentPhase > 0) {
            setPhase(currentPhase-1);
        }
    }

    const CurrentAnswer = ({}) => {


        
        return(
            <>
                <a onClick={toggleNext}>Weiter</a>
            </>
        )
    }

    const CurrentQuestion = ({question, index}) => {
        const [isAnswered, setAnswered] = useState(false);
        const [answerIndex, setAnswerIndex] = useState(0);
        const toggleClickAnswer = (index) => {
            
        }

        

        return(
            <>
                <h1>
                    {currentPhase+1}.{question.title} 
                </h1>
                {
                    !isAnswered ? 
                        <>
                            <h2>
                                {question.subtitle}
                            </h2>
                            {
                                question.questions.map(
                                    (question, i) => 
                                        <a className="answer-button" onClick={toggleClickAnswer(i)}>
                                            {question}
                                        </a>
                                )
                            }
                        </> : <>
                            <div>
                                
                            </div>
                        </>
                }
                
            </> 
        )
    }


    return(
        <>
            <CurrentQuestion question={PHASES[currentPhase]} index={currentPhase}/>
            <a onClick={togglePrevious}>Previous</a>
        </>
    )

}