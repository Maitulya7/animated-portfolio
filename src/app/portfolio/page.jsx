"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import Image from 'next/image';
import Link from 'next/link';
const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Commerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Medium Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Vanilla Book App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
];

const PortfolioPage = () => {

  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}

    >
      <div className='h-[600vh] relative' ref={ref}>
        <div className=''>
          <div className=' w-screen h-[calc(100vh-6rem)] flex flex-col gap-40 items-center justify-center text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
            My Works
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
        <div className='sticky top-0 flex  h-screen  items-center gap-4 overflow-hidden no-scrollbar'>
          <motion.div style={{ x }} className='flex'>
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300 " />
            {items.map((item) => (
              <div key={item.id} className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}>
                <div className='flex flex-col gap-8 text-white'>
                  <h1 className='text-xl font-bold md:text-2xl lg:text-4xl xl:text-8xl'>{item.title}</h1>
                  <div className='relative w-80 h-56  lg:w-[600px] lg:h-[350px] xl:w-[700px] xl:h-[420px]'>
                    <Image src={item.img} alt={item.title} fill />
                  </div>
                  <p className='w-80 lg:w-[500px] xl:w-[600px] lg:text-lg'>{item.desc}</p>
                  <div className='flex gap-4'>
                    <Link href={item.link}>
                      <button className='p-2 text-sm md:p-4 md:text-base lg:p-5 lg:text-lg bg-white text-gray-600 rounded font-semibold my-2'>
                        Live Demo
                      </button>
                    </Link>
                    <Link href={item.link}>
                      <button className='p-2 text-sm md:p-4 md:text-base lg:p-5 lg:text-lg bg-white text-gray-600 rounded  font-semibold my-2'>
                        Source Code
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <motion.a
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center transition duration-300 ease-in-out"
            whileHover={{
              backgroundImage: 'linear-gradient(to right, #805ad5, #f56565)',
              transition: { duration: 0.3 }
            }}
            initial={{ backgroundImage: 'linear-gradient(to right, #000000, #000000)' }}
          >
            Hire Me
          </motion.a>

        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioPage