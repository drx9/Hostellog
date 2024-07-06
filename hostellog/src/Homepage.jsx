import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();

  const navigateToWardenlogin =()=>  {
    navigate('/wardenLogin')
  };
  const navigateToStudentlogin =()=> {
    navigate('/studentLogin')
  };     
 
  return(
    <div className='N0'>
    <header className='header1'>Hostellog</header>
    <div className='main-content'>
    <div className='N1'>
        <div className='N2'>
      <button onClick={navigateToWardenlogin} className='b1' type='button'>Login As Warden</button>
      <button onClick={navigateToStudentlogin} className='b2' type='button'>Login As Student</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default App;