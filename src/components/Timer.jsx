import { useState } from "react"
import Countdown from "react-countdown"
import AlienLims from '../assets/lims_alien.jpeg'

const date_str = "2024-07-13T10:00:00"

const Completionist = () => {
    <span>
        Leggo
    </span>
}

const BackgroundSticker = () => {
    return(
      <>
        <img className='sticker' src={AlienLims} alt="" />
      </>
    )
  }

const renderer = ({days, hours, minutes, seconds, completed}) => {
    const TimeContainer = ( {time, label, sticker} ) => {
        return(
            <>

                <div className="timer-box-wrapper">
                    <span className="timer-box">{time}</span>
                    <h2>{label}</h2>
                    <BackgroundSticker source={sticker}/>
                </div>
            </>
        )
    }

    if (completed) {
        return <Completionist/>
    } else {
        return (
        <div className="timer-wrapper">
            <TimeContainer time={days} label={"Days"} sticker={AlienLims }/>
            <TimeContainer time={hours} label={"Hours"} sticker={AlienLims}/>
            <TimeContainer time={minutes} label={"Minutes"} sticker={AlienLims}/>
            <TimeContainer time={seconds} label={"Seconds"} sticker={AlienLims}/>
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