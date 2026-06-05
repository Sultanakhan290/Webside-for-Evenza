import { GoDotFill } from "react-icons/go";


const SecHead = ({text,heading,className}) => {
  return (
    <div className='text-center'>
      <p className='inline-flex items-center justify-center gap-1 text-[10px] font-semibold leading-none text-white'>
        <GoDotFill className={`text-[10px] ${className || ''}`} />
        {text}
      </p>
      <h2 className='mx-auto mt-4 max-w-[650px] font-onest text-[42px] font-semibold leading-[1.08] tracking-0 text-white'>{heading}</h2>
    </div>
  )
}

export default SecHead
