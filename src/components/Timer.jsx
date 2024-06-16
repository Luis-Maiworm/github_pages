import { useState } from "react"
import Countdown from "react-countdown"

const date_str = "2024-07-13T10:00:00"

const Completionist = () => {
    <span>
        Leggo
    </span>
}


const renderer = ({days, hours, minutes, seconds, completed}) => {
    const TimeContainer = ( {time} ) => {
        return(
            <>
                <div className="timer-box-wrapper">
                    {time}
                </div>
            </>
        )
    }

    if (completed) {
        return <Completionist/>
    } else {
        return (
        <div className="timer-wrapper">
            <TimeContainer time={days}/>
            <TimeContainer time={hours}/>
            <TimeContainer time={minutes}/>
            <TimeContainer time={seconds}/>
        </div>
        )
    }
}

export const DayCountdown = () => {
    return(
        <>
            <Countdown 
                date={date_str}
                renderer={renderer}
            />
        </>
    )
}