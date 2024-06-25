import React, { useState } from 'react'
import Layout from '../../components/Layout'
import TeamCard from './TamCard'
import Data1 from './2k21.json'
import Data2 from './2k22.json'

const Team = () => {
    const [active, setActive] = useState("item1")
    const [item1, setItem1] = useState(Data1)
    const [item2, setItem2] = useState(Data2)

    console.log(active);
    return (
        <Layout>
            <div className='bg-slate-100'>
                <div className='bg-slate-100 flex flex-col justify-center items-center h-full w-full pt-28'>
                    <h2 className='md:text-5xl text-3xl text-black font-semibold'>Team EES</h2>
                </div>
                <div className='flex justify-center flex-wrap w-full mt-10 text-xs sm:text-base'>
                    <button className="sm:w-36 w-32 mx-5 my-2 px-4 py-2 border-2 rounded-full border-orange-700 "
                        onClick={() => {
                            setActive('item1')
                        }} style={{ background: active === 'item1' ? '#e06514' : '', color: active === 'item1' ? 'white' : '' }}>2k21 batch</button>
                    <button className="sm:w-36 w-32 mx-5 my-2 px-4 py- border-2 rounded-full border-orange-700 "
                        onClick={() => {
                            setActive('item2')
                        }} style={{ background: active === 'item2' ? '#e06514' : '', color: active === 'item2' ? 'white' : '' }}>2k22 batch</button>
                </div>

                <div className='w-full '>
                    {active === 'item1' && <TeamCard item={item1} />}
                    {active === 'item2' && <TeamCard item={item2} />}
                </div>

            </div>
        </Layout>
    )
}

export default Team
