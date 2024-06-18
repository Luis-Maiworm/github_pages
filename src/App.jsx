
import './App.css'
import { DayCountdown } from './components/Timer'


const GranCamino = () => {
  return(
    <h1>
      *#d/ Camino! Berlin Edition
    </h1>
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
