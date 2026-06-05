import { IoCalendarClearOutline, IoCopyOutline, IoStar, IoThumbsUpOutline } from 'react-icons/io5'
import Container from './Container'

const features = [
  {
    icon: <IoCopyOutline />,
    title: 'Event Planning Manage',
  },
  {
    icon: <span className='block h-8 w-8 rounded-[8px] bg-white'></span>,
    title: 'Conference Coordination',
  },
  {
    icon: <IoCalendarClearOutline />,
    title: 'Venue Booking & Setup',
  },
  {
    icon: <IoThumbsUpOutline />,
    title: 'Post-Event Analytics',
  },
]

const Core = () => {
  return (
    <section className='bg-[#17162d] py-25 font-onest text-white'>
      <Container>
        <div className='mx-auto max-w-[650px] text-center'>
          <div className='mb-3 flex items-center justify-center gap-2'>
            <span className='h-1.5 w-1.5 rounded-full bg-white'></span>
            <span className='text-[14px] font-medium'>Core Feature</span>
          </div>

          <h2 className='text-[42px] font-semibold leading-[48px]'>
            Core features that power our exceptional services
          </h2>
        </div>

        <div className='mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {features.map((feature) => (
            <div
              className={`group rounded-[12px] p-8 transition duration-300 hover:bg-primary ${
                feature.active ? 'bg-primary' : 'bg-white/10'
              }`}
              key={feature.title}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-[8px] text-[22px] transition duration-300 group-hover:bg-white group-hover:text-primary ${
                  feature.active ? 'bg-white text-primary' : 'bg-primary text-white'
                }`}
              >
                {feature.icon}
              </span>

              <h3 className='mt-18 text-[18px] font-bold'>{feature.title}</h3>

              <p className='mt-3 text-[14px] leading-[22px] text-white/80'>
                Deliver seamless virtual experience with high-quality streaming and interactive tools.
              </p>

              <div className='my-7 h-px bg-white/15'></div>

              <button className='flex items-center gap-2 text-[14px] font-bold text-white' type='button'>
                Read More
                <span className='text-[#B8F34C]'>+</span>
              </button>
            </div>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <p className='text-[14px] text-white/80'>
            Join our team and help weave innovation, quality, and success together worldwide.
          </p>

          <div className='mt-5 flex items-center justify-center gap-3 text-[16px] font-bold'>
            <span>4.9/5</span>
            <span className='flex text-primary'>
              {[...Array(5)].map((_, index) => (
                <IoStar key={index} />
              ))}
            </span>
            <span>Our 4200 Review</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Core
