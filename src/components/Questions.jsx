
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
    

    const CurrentQuestion = ({question, index}) => {
        return(
            <>
                <h1>
                    {index+1}.{question.title} 
                </h1>
                <h2>
                    {question.subtitle}
                </h2>
                <button onClick={toggleNext}>Weiter</button>
            </>
        )
    }

    const togglePrevious = () => {
        if(currentPhase > 0) {
            setPhase(currentPhase-1);
        }
    }

    return(
        <>
            <CurrentQuestion question={PHASES[currentPhase]} index={currentPhase}/>
            <button onClick={togglePrevious}>Previous</button>
        </>
    )

}