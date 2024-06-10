import React, { useEffect, useState } from 'react'
import './App.css'
import SponsorCrausal from './components/SponerCrausal'
import { BallTriangle } from 'react-loader-spinner';

function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000)
  }, [])
  return (
    <>
      <div>
        {
          loading && (
            <div className='h-screen w-full bg-stone-200 flex justify-center items-center'>
              <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="orange"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          )
        }
        {
          !loading && (
            <div className='transition'>
              <SponsorCrausal/>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App