import React from 'react'
import { FiShare2 } from 'react-icons/fi'
import { GoDotFill } from 'react-icons/go'
import link1 from '../assets/link1.png'
import link2 from '../assets/link2.png'
import link3 from '../assets/link3.png'
import small from '../assets/small.png'

const speakers = [
  {
    name: 'Sophia Rodrigues',
    role: 'Global Marketing Director',
    image: link1,
  },
  {
    name: 'Jacob Jones',
    role: 'Lead AI Research Scientist',
    image: link2,
  },
  {
    name: 'Arlene McCoy',
    role: 'Innovation Strategy Expert',
    image: link3,
  },
]

const Speaker = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <GoDotFill className="pointer-events-none absolute left-[9%] top-[62%] text-[10px] text-primary" />

      <div className="container px-4">
        <div className="text-center">
          <p className="inline-flex items-center justify-center gap-1 font-onest text-[10px] font-semibold leading-none text-[#17192f]">
            <GoDotFill className="text-[10px] text-primary" />
            Our Speakers
          </p>
          <h2 className="mx-auto mt-4 max-w-[620px] font-onest text-[28px] font-semibold leading-[1.08] text-[#17192f] sm:text-3xl md:text-[42px]">
            <span className="block whitespace-nowrap">Introducing the expert speakers</span>
            <span className="block whitespace-nowrap">joining our event</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1050px] gap-7 md:mt-16 md:grid-cols-3">
          {speakers.map((speaker, index) => (
            <article
              key={speaker.name}
              className="overflow-hidden rounded-[8px] bg-[#f7f7f9] p-2 shadow-[0_12px_40px_rgba(17,20,39,0.08)]"
            >
              <div className="relative overflow-hidden rounded-[7px]">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="aspect-[1/1.14] w-full object-cover"
                />
                {index === 0 && (
                  <p className="absolute bottom-4 -left-1 font-onest text-sm font-bold text-white">
                    Panel Discussions
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between px-5 py-5">
                <div>
                  <h3 className="font-onest text-base font-bold leading-5 text-[#17192f]">
                    {speaker.name}
                  </h3>
                  <p className="mt-2 font-onest text-sm leading-5 text-[#7b7f8d]">
                    {speaker.role}
                  </p>
                </div>

                <button
                  type="button"
                  aria-label={`Share ${speaker.name}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-[#5f3dc6]"
                >
                  <FiShare2 className="text-[17px]" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-center">
          <div className="flex items-center">
            <img src={small} alt="" className="h-[30px] w-[30px] rounded-full object-cover" />
            <span className="-ml-2 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-primary text-white ring-2 ring-white">
              <FiShare2 className="text-[14px]" />
            </span>
          </div>
          <p className="font-onest text-sm leading-6 text-[#777b88]">
            Join our speaker and help weave innovation, quality, and success together worldwide.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Speaker
