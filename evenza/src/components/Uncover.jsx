import { IoCalendarClearOutline, IoCallOutline, IoPeopleOutline } from "react-icons/io5";
import Container from './Container'
import aboutImg from '../assets/Group 2.png'

const Uncover = () => {
  return (
    <section className='bg-white py-25 font-onest'>
      <Container>
        <div className='grid items-start justify-center gap-10 lg:grid-cols-2 xl:grid-cols-[680px_680px]'>
          <div className='w-full max-w-[680px] lg:aspect-square xl:h-[680px] xl:w-[680px]'>
            <img className='h-full w-full' src={aboutImg} alt="About event" />
          </div>

          <div className='min-w-0 w-full max-w-[680px] lg:aspect-square xl:h-[680px] xl:w-[680px]'>
            <div className='mb-2.5 flex items-center gap-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-primary'></span>
              <span className='text-[14px] font-semibold text-black'>About Us</span>
            </div>

            <h2 className='text-[40px] font-semibold leading-[48px] text-[#161A2D] xl:text-[48px] xl:leading-[52px]'>
              <span className='block xl:whitespace-nowrap'>Uncover our mission &amp; purpose</span>
              <span className='block'>behind this event</span>
            </h2>

            <p className='mt-5 text-[16px] leading-[24px] text-[#737681]'>
              Discover the vision that drives this event-a commitment to bringing together innovators,
              leaders, and changemakers to share knowledge, spark inspiration, and create meaningful
              connections.
            </p>

            <div className='mt-8 grid grid-cols-3 rounded-[20px] bg-[#F3F3F5] p-[10px]'>
              <button className='h-[60px] rounded-[10px] text-[16px] font-bold text-black' type='button'>
                Our Mission
              </button>
              <button className='h-[60px] rounded-[10px] bg-white text-[16px] font-bold text-black shadow-sm' type='button'>
                Our Vision
              </button>
              <button className='h-[60px] rounded-[10px] text-[16px] font-bold text-black' type='button'>
                Our Goal
              </button>
            </div>

            <p className='mt-8 text-[16px] leading-[24px] text-[#737681]'>
              Our vision is to build a global community where collaboration fuels innovation we aim encourage
              fresh thinking, spark inspiring dialogues, and create a space.
            </p>

            <div className='mt-8 grid gap-8 sm:grid-cols-2'>
              <div className='flex items-center gap-4'>
                <span className='flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[10px] bg-primary text-white'>
                  <IoCalendarClearOutline className='text-[25px]' />
                </span>
                <h3 className='text-[20px] font-bold leading-[24px] text-black'>
                  Receive real-time event updates.
                </h3>
              </div>

              <div className='flex items-center gap-4'>
                <span className='flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[10px] bg-primary text-white'>
                  <IoPeopleOutline className='text-[25px]' />
                </span>
                <h3 className='text-[20px] font-bold leading-[24px] text-black'>
                  Receive real-time event updates.
                </h3>
              </div>
            </div>

            <div className='my-8 h-px bg-[#E5E7EB]'></div>

            <div className='flex flex-col gap-6 sm:flex-row sm:items-center'>
              <button className='h-[50px] rounded-full bg-primary px-6 text-[14px] font-bold text-white' type='button'>
                Learn More About
              </button>

              <div className='flex items-center gap-4'>
                <span className='flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-primary text-white'>
                  <IoCallOutline className='text-[25px]' />
                </span>
                <div>
                  <h3 className='text-[18px] font-extrabold leading-none text-black'>Call Now!</h3>
                  <p className='mt-2 text-[13px] text-[#6F7280]'>+00 123 456 789</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  )
}

export default Uncover
