import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import DaisyNav from './components/daisyNav/DaisyNav'

function App() {

  return (
    <>
    <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}

      <h1 className='text-7xl bg-rose-200'>Vite + React</h1>
      <PriceOptions></PriceOptions>


    </>
  )
}

export default App
