
import './App.css'
import { DayCountdown } from './components/Timer'


const GranCamino = () => {
  return(
    <h1>
      Gran Camino! Berlin Edition
    </h1>
  )
}

function App() {

  return (
    <>
      <div className='page-wrapper'>
        <GranCamino/>
        <DayCountdown/>
      </div>
    </>
  )
}

export default App
