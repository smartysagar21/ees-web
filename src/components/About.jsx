import React from 'react'
import { BiCheckDouble } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const variants = {
    initial: {
        x: -200,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1,
        },
    },
}

const About = () => {
    return (
        <motion.div className='py-16 min-h-[80vh] bg-slate-100 flex flex-col justify-center items-center'
          variants={variants}
          initial='initial'
          whileInView='animate'
        >
            <h3 className='text-4xl font-semibold text-orange-600 mb-10'>ABOUT US</h3>
            <div className='flex w-full flex-col lg:flex-row justify-center items-center px-10 lg:px-20 gap-8 gap-y-14 lg:gap-y-0'>
                <motion.div className='lg:w-2/5 lg:text-lg' variants={variants}>
                    <motion.p variants={variants}>Prodex is a workplace for innovation, technology and research
                        driven activists who aspire to shape their ideas into reality.</motion.p>
                    <motion.p className='my-5' variants={variants}>ProDex provides you a platform to :-</motion.p>
                    <div className='text-base flex flex-col gap-3'>
                        <motion.p className='flex items-center gap-x-3' variants={variants}><span className='text-orange-600 text-xl'><BiCheckDouble/></span> Develop new ideas and shape them into real-worldly models.</motion.p>
                        <motion.p className='flex items-center gap-x-3' variants={variants}><span className='text-orange-600 text-xl'><BiCheckDouble/></span> Work with a team of like minded, tech-savvy, innovation driven people.</motion.p>
                        <motion.p className='flex items-center gap-x-3' variants={variants}><span className='text-orange-600 text-xl'><BiCheckDouble/></span> Represent your team, yourself and the society in various competitions and events.</motion.p>
                    </div>
                </motion.div>
                <motion.div className='lg:w-2/5 lg:text-lg' variants={variants}>
                   <motion.p variants={variants}>ProDex is not just a technical society, it's much more than that. 
                    It provides you an opportunity to be a part of a group which strives 
                    to nurture the innovator in you, so that you understand that it is 
                    time for us to change ourselves, and hence, be the change.</motion.p>

                   <motion.p className='my-6' variants={variants}>Here, you will be exposed to various fields and work with different 
                    technologies spanning various engineering backgrounds, be it electrical 
                    engineering or mechanical engineering, biotech or cse.</motion.p>
                   <Link to='/about'>
                      <motion.button className='px-2 py-1 text-base border-2 rounded-full border-orange-600 hover:bg-orange-500 hover:text-white' variants={variants}>Learn More</motion.button>
                   </Link>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About
