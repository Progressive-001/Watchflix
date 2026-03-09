//assets
import sideControl from "../assets/landingPage/Signup Arrow.svg" 

export default function SideBarControl({ variant, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        absolute top-[48.5px]
        w-[47px] h-[190px]
        sm:h-[180px] md:h-[250px] lg:h-[290px]
        flex justify-center items-center
        bg-black
        ${variant === 'leftHand' ? 'left-[-37px] rotate-180' : 'right-[-37px]'}
        ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      <div
        className={`
          h-[120px] w-[24px]
          rounded-[8px]
          flex justify-center items-center
          bg-[#232323]
          ${disabled ? 'pointer-events-none' : 'hover:bg-[#2D2D2D]'}
        `}
      >
        <img src={sideControl} alt="" />
      </div>
    </button>
  )
}
