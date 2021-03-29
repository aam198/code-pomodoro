import React, { useState, useEffect } from 'react'

export default function Pomodoro() {

    const [minutes, setMinutes] = useState(2)
    const [seconds, setSeconds] = useState(0)
    const [displayMessage, setDisplayMessage] = useState(false)

    // Setting trackers to display message or not
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds


    useEffect(() => {
        let interval = setInterval( () => {
            clearInterval(interval)

            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59)
                    setMinutes(minutes -1)
                }
                else {
                    let minutes = displayMessage ? 24 : 4
                    let seconds = 59

                    setSeconds(seconds)
                    setMinutes(minutes)
                    setDisplayMessage(!displayMessage)
                }
            } else {
                setSeconds(seconds -1) 
            }
            
        }, 1000)
    }, [seconds])

    return (
        <div className="pomodoro">
            <div className="message">
                {displayMessage && <div> Take a break! New sessions starts in: </div> }
            </div>

            <div className="timer">
                {timerMinutes}:{timerSeconds}
            </div>
        </div>
    )
}
