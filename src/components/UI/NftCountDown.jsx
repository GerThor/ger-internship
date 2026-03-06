import React, { useEffect, useState } from 'react'


const NftCountDown = ({ expiryDate }) => {

  const [timer, setTimer] = useState("");
  const [countReached, setCountReached] = useState(false)

    useEffect(() => {
        const cancelId = setInterval(updateExpiryDate, 1000);
        if(countReached) {
          clearInterval(cancelId)
        }
        return () => clearInterval(cancelId);
    }, [updateExpiryDate]); 

  function updateExpiryDate () {
    let milliseconds = expiryDate - Date.now(); 

    let seconds = Math.floor(milliseconds / 1000)
    let secondsText = seconds % 60;


    let minutes = Math.floor(seconds / 60);
    let minutesText = minutes % 60;

    let hoursText = Math.floor(minutes / 60);

    setTimer(`${hoursText}h ${minutesText}m ${secondsText}s`)
    if (milliseconds <= 0) {
      setCountReached(true)
      setTimer("EXPIRED")
    }
  }


  return (
    <div>{timer}</div>
  )
}



export default NftCountDown

