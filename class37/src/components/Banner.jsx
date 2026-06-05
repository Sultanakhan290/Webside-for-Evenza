import React, { useEffect, useState } from 'react'
import Container from './Container'
import Btn from './Btn'
import { IoPlay } from "react-icons/io5";
import borderImg from '../assets/Border.png'
import border2Img from '../assets/Border2.png'
import figureImg from '../assets/Figure → author-3.jpg.png'


const CountdownBox = ({number,text}) => {
  return (
                 <div className='w-31.25 h-29.75 flex items-center justify-center flex-col bg-white/10 rounded-[20px]'>
                  <strong className='font-bold text-[40px] text-white'>{number}</strong>
                  <span className='text-white'>{text}</span>
                 </div>
  )
}

const Countdown = ({targetDate}) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if(difference>0){
      return{
        days: Math.floor(difference/(1000*60*60*24)),
        hours: Math.floor(difference/(1000*60*60)%24),
        minutes: Math.floor(difference/(1000*60)%60),
        seconds: Math.floor((difference/1000)%60),
      }
    }
    return{
      days:0, hours:0, minutes:0, seconds:0
    }
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);


  return (  
  <div className='flex items-center justify-center gap-7.5 pt-10'>
                 <CountdownBox number={String(timeLeft.days).padStart(2,"0")} text="Days"/>
                 <CountdownBox number={String(timeLeft.hours).padStart(2,"0")} text="Hours"/>
                 <CountdownBox  number={String(timeLeft.minutes).padStart(2,"0")} text="Minutes"/>
                 <CountdownBox  number={String(timeLeft.seconds).padStart(2,"0")} text="Seconds"/>
                </div>
    )
}


 const Banner = () => {

//   const [time, setTime] = useState({
//       days: 0,
//       hours: 0,
//       minutes: 0,
//       seconds: 0,
//     });
//     let days = 0;
//     let hours = 0;
//     let minutes = 0;
//     let seconds = 0;
//   useEffect(() => {
//     const timeIntervel = setInterval(() => {
//     seconds++;

//    setTime({
//       days,
//       hours,
//       minutes,
//       seconds,
//     })
//   }, 1000);
//   return () => clearInterval(timeIntervel);
//   }, []);
      
  return (
    <div className='bg-[url(./assets/Background.png)] bg-cover bg-center bg-no-repeat py-37.5'>
        <Container>
            <div className='mt-31 mb-2 flex justify-center'>
                <div className='inline-flex items-center gap-2 rounded-full bg-[#5A4A4F]/90 py-3 pl-2.5 pr-2.5 text-white backdrop-blur-md'>
                  <div className='flex -space-x-2'>
                    <img className='h-6 w-6 rounded-full border-2 border-white object-cover' src={borderImg} alt="" />
                    <img className='h-6 w-6 rounded-full border-2 border-white object-cover' src={border2Img} alt="" />
                    <img className='h-6 w-6 rounded-full border-2 border-white object-cover' src={figureImg} alt="" />
                  </div>
                  <h2 className='text-[14px] font-bold'>Ideas that spark change.</h2>
                </div>
            </div>
           <div className='text-center text-white'>
             <h2 className='text-[66px] leading-[1.1] font-extrabold max-w-252 mx-auto tracking-tight'>Connecting Minds to Shape <br /> Tomorrow's Big Ideas</h2>
             <p className='pt-4 pb-13 max-w-175 mx-auto'>Experience a powerful gathering of visionaries, creators, and industry experts united by one goal—
              exchanging ideas that spark growth, innovation, and meaningful change.</p>
              <div className='mt-13.25 mb-20.75 flex items-center justify-center gap-8'>
                <Btn className="text-[16px] text-white px-9 py-6">Explore Schedule</Btn>
                <button className='inline-flex items-center gap-6 text-white' type='button'>
                  <span className='flex h-15 w-15 items-center justify-center rounded-full border-[3px] border-white/40 bg-primary'>
                    <IoPlay className='text-[16px]' />
                  </span>
                  <span className='text-[16px] font-bold'>Watch Video</span>
                </button>
                </div>
                </div>
                <div className='flex items-center justify-center'>
                    <h2 className='text-[20px] font-bold text-white'>Upcoming Speaker Reveal - Don't Miss Out</h2>
                </div>
              <Countdown targetDate="2026-05-31T23:59:59"/>
        </Container>
      
    </div>
  )
}

export default Banner
