import { useState } from 'react'

import './css/base.css'
import './css/exc1.css'
import './css/exc2.css'
import './css/exc3.css'


function App() {
  const [headingToggled, setHeadingToggled] = useState(false)
  const [ballToggled, setBallToggled] = useState(true)
  const [visible, setVisible] = useState(false)

  const handleHeadingToggle = () => setHeadingToggled(!headingToggled)

  const handleBallToggle = () => setBallToggled(!ballToggled)

  return (
    <>

      <h1 className={!headingToggled ? "heading" : "heading toggled"}>Text</h1>
      <button
        className="heading-button"
        onClick={handleHeadingToggle}>
        Klicka mig
      </button>

      <div className='ball-container'>
        <div className={!ballToggled ? "ball" : "ball rendered"}></div>
        <button className='ball-button' onClick={handleBallToggle}> Rendera om </button>
      </div>


      <div className='visible-container'>
        <button
          className='visibility-toggle'
          onClick={() => setVisible(!visible)}>
          Visa element
        </button>

        {visible ?
          <div className='visible'>Elementet ska bli synligt när det mountas</div>
          : null}
      </div>
    </>
  )
}

export default App
