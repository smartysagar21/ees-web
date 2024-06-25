import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const OurTeam = () => {
    return (
        <div>
            <div className="w-full sm:mt-0 bg-slate-50 pb-16 pt-5">
                <div className='w-full'>
                    <h2 className='w-full text-5xl text-center font-semibold text-orange-600 md:text-5xl'>Our Team</h2>
                </div>
                <h2 className='text-3xl font-bold text-center my-10'>Faculty Advisor</h2>
                <div className="w-full flex flex-col md:flex-row justify-center items-center lg:gap-20 gap-10 px-5"

                >
                    <motion.div className='lg:w-[30vw] sm:w-[50vw] w-80 md:h-60 h-52 bg-white rounded-2xl shadow-lg'
                        initial={{ opacity: 0, y: 20, scale: 0.6 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                    >
                        <div className='w-full h-full flex items-center px-3 gap-5 lg:gap-16'>
                            <div className='w-2/5'>
                                <img src="" alt="" className='w-[115px] h-28 md:w-32 md:h-32 shadow-md rounded-[100%]' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h2 className='text-lg font-semibold'>Arvind Prjapati</h2>
                                <p>Associate Professor, Electrical Engineering Department</p>
                                <div className='flex gap-6 text-xl'>
                                    <BsLinkedin />
                                    <MdMail />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='lg:w-[30vw] sm:w-[50vw] w-80 md:h-60 h-52 bg-white rounded-2xl shadow-lg'
                        initial={{ opacity: 0, y: 20, scale: 0.6 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                    >
                        <div className='w-full h-full flex items-center px-3 gap-5 lg:gap-16'>
                            <div className='w-2/5'>
                                <img src="" alt="" className='w-[115px] h-28 md:w-32 md:h-32 shadow-md rounded-[100%]' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h2 className='text-lg font-semibold'>Ravi Bhusan</h2>
                                <p>Associate Professor, Electrical Engineering Department</p>
                                <div className='flex gap-6 text-xl'>
                                    <BsLinkedin />
                                    <MdMail />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <h2 className='text-3xl font-bold text-center my-10'>Team</h2>
                <div className="w-full flex flex-col md:flex-row justify-center items-center lg:gap-20 gap-10 px-5">
                    <motion.div className='lg:w-[30vw] sm:w-[50vw] w-80 md:h-60 h-52 bg-white rounded-2xl shadow-lg'
                        initial={{ opacity: 0, y: 20, scale: 0.6 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                    >
                        <div className='w-full h-full flex items-center px-3 gap-5 lg:gap-16'>
                            <img src="" alt="" className='w-28 h-28 md:w-32 md:h-32 shadow-md rounded-[100%]' />
                            <div className='flex flex-col gap-4'>
                                <h2 className='text-lg font-semibold'>Indrajeet</h2>
                                <p>President</p>
                                <div className='flex gap-6 text-xl'>
                                    <BsLinkedin />
                                    <MdMail />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='lg:w-[30vw] sm:w-[50vw] w-80 md:h-60 h-52 bg-white rounded-2xl shadow-lg'
                        initial={{ opacity: 0, y: 20, scale: 0.6 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                    >
                        <div className='w-full h-full flex items-center px-3 gap-5 lg:gap-16'>
                            <img src="" alt="" className='w-28 h-28 md:w-32 md:h-32 shadow-md rounded-[100%]' />
                            <div className='flex flex-col gap-4'>
                                <h2 className='text-lg font-semibold'>Deepanshu Garg</h2>
                                <p>Wise President</p>
                                <div className='flex gap-6 text-xl'>
                                    <BsLinkedin />
                                    <MdMail />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="w-full my-16 text-center">
                    <Link to='/ourteam'
                        className=" px-4 py-2 border-2 border-orange-600 rounded-3xl hover:bg-orange-700 hover:text-white">
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OurTeam
