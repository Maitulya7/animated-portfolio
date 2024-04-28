"use client"
import React, { useRef } from 'react'
import { motion, useInView, useScroll } from "framer-motion"
import Image from 'next/image'
import Brain from '@/components/Brain'
const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER  */}
      <div className='h-full overflow-scroll lg:flex no-scrollbar' ref={containerRef}>
        {/* TEXT CONTAINER  */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-44 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2'>
          {/* BIOGRAPHY CONTAINER */}
          <div>
            <div className='flex flex-col gap-12 justify-center'>
              {/* BIOGRAPHY TITLE  */}
              <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
              {/* BIOGRAPHY SUB TITLE  */}
              <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
              {/* BIOGRAPHY QUOTE  */}
              <span className='italic'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
              {/* BIOGRAPHY SIGNATURE  */}
              <div className='self-end'>
                <Image src="/signature.svg" alt="image" width={200} height={2} />
              </div>
              {/* BIOGRAPHY SVG SCROLL  */}
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* SKILLS CONTAINER  */}
          <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
            {/* SKILL TITLE  */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}

            {/* SKILLS LISTS */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black'>HTML 5</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black'>CSS 3</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black'>JavaScript</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black'>ES 6+</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black'>React JS</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black'>Tailwind CSS</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black'>Figma</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black'>Material UI </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black'>Next JS</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black'>Node JS</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black'>Express JS</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black'>MongoDB</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black'>Github</div>

            </motion.div>
            {/* SKILL SVG SCROLL */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className='flex flex-col gap-12 justify-center pb-48' ref={experienceRef}>
            {/* EXPERIENCE TITLE  */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LISTS  */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LISTS ITEMS  */}
              {/*========= 1ST JOB ========= */}
              <div className='flex justify-between h-48'>
                {/* LEFT  */}
                <div className='w-1/3
                '>
                  {/* JOB TITLE  */}
                  <div className='bg-white p-3 rounded-lg font-semibold'>Front End Developer</div>
                  {/* JOB DESCRIPTION  */}
                  <div className='p-3 text-sm italic '>
                    My current job is better then my previous job
                  </div>
                  {/* JOB DATE  */}
                  <div className='p-3 text-red-400 font-semibold text-sm'>
                    2024-present
                  </div>
                  {/* COMPANY NAME  */}
                  <div className='p-2 text-sm font-semibold bg-white rounded w-fit'>
                    Google
                  </div>
                </div>
                {/* CENTER  */}
                <div className='w-1 '>
                  {/* LINE  */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'>
                    </div>
                  </div>
                </div>
                {/* RIGHT  */}
                <div className='w-1/3'>

                </div>
              </div>

              {/*========= 2nd JOB ========= */}
              <div className='flex justify-between h-48'>
                {/* LEFT  */}
                <div className='w-1/3'>

                </div>
                {/* CENTER  */}
                <div className='w-1 '>
                  {/* LINE  */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'>
                    </div>
                  </div>
                </div>
                {/* RIGHT  */}
                <div className='w-1/3'>
                  {/* JOB TITLE  */}
                  <div className='bg-white p-3 rounded-lg font-semibold'>Front End Developer</div>
                  {/* JOB DESCRIPTION  */}
                  <div className='p-3 text-sm italic '>
                    My current job is better then my previous job
                  </div>
                  {/* JOB DATE  */}
                  <div className='p-3 text-red-400 font-semibold text-sm'>
                    2024-present
                  </div>
                  {/* COMPANY NAME  */}
                  <div className='p-2 text-sm font-semibold bg-white rounded w-fit'>
                    Google
                  </div>
                </div>
              </div>
              {/*========= 3RD JOB ========= */}
              <div className='flex justify-between h-48'>
                {/* LEFT  */}
                <div className='w-1/3
                '>
                  {/* JOB TITLE  */}
                  <div className='bg-white p-3 rounded-lg font-semibold'>Front End Developer</div>
                  {/* JOB DESCRIPTION  */}
                  <div className='p-3 text-sm italic '>
                    My current job is better then my previous job
                  </div>
                  {/* JOB DATE  */}
                  <div className='p-3 text-red-400 font-semibold text-sm'>
                    2024-present
                  </div>
                  {/* COMPANY NAME  */}
                  <div className='p-2 text-sm font-semibold bg-white rounded w-fit'>
                    Google
                  </div>
                </div>
                {/* CENTER  */}
                <div className='w-1 '>
                  {/* LINE  */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'>
                    </div>
                  </div>
                </div>
                {/* RIGHT  */}
                <div className='w-1/3'>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage