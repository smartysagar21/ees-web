import React from 'react'
import EventCard from './EventCard'
import { Link } from 'react-router-dom'

const Event = () => {
    return (
        <div>
            <div className="w-full sm:mt-0 bg-slate-100 pt-10 pb-16">
                <div className='w-full'>
                    <h2 className='w-full text-5xl text-center font-semibold text-orange-600 md:text-5xl pb-20'>Events</h2>
                </div>
                <div className="w-full">
                    <EventCard />
                </div>
                <div className="flex items-center justify-center w-full">
                    <p className="px-2 sm:w-[90vw] text-lg text-center font-semibold md:text-2xl my-12">"Dreams aspirations are not easily obtained but one of the hardest things to do is to keep going is to keep chasing.
                        Being a Predator we will definitely strive for success but we want you to be our support while carrying this responsibility.
                        Contribute to a cause, Be a Predator with us."</p>
                </div>
                <div className="w-full mb-10 text-center">
                    <Link to='/event'
                        className=" px-4 py-2 border-2 border-orange-600 rounded-3xl hover:bg-orange-700 hover:text-white">
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default Event
