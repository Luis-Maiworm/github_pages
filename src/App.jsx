
import './App.css'
import { DayCountdown } from './components/Timer'


const GranCamino = () => {
  return(
    <>
      <div className='full-width'>
        <h1>
          *#d/ Camino!
        </h1>
        <h2>
          Berlin Edition
        </h2>
      </div>
    </>
  )
}

function App() {

  return (
    <>
      <div className='page-wrapper'>
        <div className='content-wrapper'>

        <GranCamino/>
        <DayCountdown/>
        </div>
      </div>
    </>
  )
}

export default App
