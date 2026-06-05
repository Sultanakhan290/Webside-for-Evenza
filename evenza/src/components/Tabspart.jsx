import * as React from 'react'
import PropTypes from 'prop-types'
import { IoLocationOutline } from 'react-icons/io5'
import f1 from '../assets/f1.png'
import f2 from '../assets/f2.png'

const eventDays = [
  {
    label: 'Day 01',
    items: [
      ['9:00 AM - 5:30 PM', '22 March 2025', 'Professional Skills Development Workshop', f1],
      ['10:00 AM - 4:00 PM', '05 May 2025', 'Leadership & Growth Conference', f2],
      ['8:30 AM - 6:00 PM', '20 June 2025', 'Digital Marketing Masterclass', f1],
      ['11:00 AM - 3:00 PM', '10 April 2025', 'Annual Innovation Summit 2025', f2],
    ],
  },
  {
    label: 'Day 02',
    items: [
      ['9:00 AM - 5:30 PM', '22 March 2025', 'Professional Skills Development Workshop', f1],
      ['10:00 AM - 4:00 PM', '05 May 2025', 'Leadership & Growth Conference', f2],
      ['8:30 AM - 6:00 PM', '20 June 2025', 'Digital Marketing Masterclass', f1],
      ['11:00 AM - 3:00 PM', '10 April 2025', 'Annual Innovation Summit 2025', f2],
    ],
  },
  {
    label: 'Day 03',
    items: [
      ['9:30 AM - 2:30 PM', '18 July 2025', 'Creative Strategy Bootcamp', f2],
      ['12:00 PM - 5:00 PM', '25 July 2025', 'Startup Networking Forum', f1],
      ['6:00 PM - 9:00 PM', '04 August 2025', 'Product Launch Showcase', f2],
      ['10:00 AM - 1:30 PM', '16 August 2025', 'Business Growth Roundtable', f1],
    ],
  },
]

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const ScheduleItem = ({ item }) => {
  const [time, date, title, image] = item

  return (
    <div className="grid gap-5 border-b border-white/10 py-7 last:border-b-0 md:grid-cols-[68px_160px_1fr_180px] md:items-center md:gap-7">
      <img
        src={image}
        alt=""
        className="h-[66px] w-[66px] rounded-full object-cover"
      />

      <div>
        <h4 className="font-onest text-lg font-bold leading-6 text-white">{time}</h4>
        <p className="mt-2 font-onest text-sm text-white/70">{date}</p>
      </div>

      <div>
        <h3 className="font-onest text-lg font-bold leading-6 text-white">{title}</h3>
        <p className="mt-2 max-w-[520px] font-onest text-sm leading-6 text-white/70">
          Unlock your potential and elevate your career with our Professional Skills
          Development designed students, working professionals.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white">
          <IoLocationOutline />
        </span>
        <p className="font-onest text-sm leading-6 text-white/80">
          Street, Block 12
          <br />
          Sector 4, Ipsum City
        </p>
      </div>
    </div>
  )
}

ScheduleItem.propTypes = {
  item: PropTypes.array.isRequired,
}

const Tabspart = () => {
  const [value, setValue] = React.useState(1)

  const handleChange = (index) => {
    setValue(index)
  }

  return (
    <div className="container mt-12 max-w-[1040px] px-4 md:mt-14">
      <div className="mx-auto mb-10 flex w-fit rounded-full bg-white/12 p-2">
        {eventDays.map((day, index) => (
          <button
            key={day.label}
            type="button"
            onClick={() => handleChange(index)}
            className={`rounded-full px-7 py-3 font-onest text-sm font-bold transition-colors ${
              value === index
                ? 'bg-white text-[#111427]'
                : 'text-white hover:bg-white/10'
            }`}
            {...a11yProps(index)}
          >
            {day.label}
          </button>
        ))}
      </div>

      {eventDays.map((day, index) => (
        <CustomTabPanel key={day.label} value={value} index={index}>
          <div>
            {day.items.map((item) => (
              <ScheduleItem key={`${item[1]}-${item[2]}`} item={item} />
            ))}
          </div>
        </CustomTabPanel>
      ))}
    </div>
  )
}

export default Tabspart
