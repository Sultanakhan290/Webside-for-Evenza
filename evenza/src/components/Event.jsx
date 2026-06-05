import SecHead from './SecHead'
import Tabspart from './Tabspart'

const Event = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#111427] bg-[radial-gradient(circle_at_50%_8%,rgba(115,75,223,0.5),transparent_34%)] py-18 md:py-24"
    >
      <div className="pointer-events-none absolute left-10 top-12 h-12 w-12 rounded-full border border-white/10 opacity-50" />
      <div className="pointer-events-none absolute bottom-12 right-12 h-20 w-20 rounded-full border border-dashed border-white/10 opacity-60" />

      <SecHead
        text="Our Event Schedule"
        heading="Explore the complete schedule for our event"
      />
      <Tabspart />
    </section>
  )
}

export default Event
