import openIcon from "/src/assets/landingPage/PlusThin.svg";
import closeIcon from "/src/assets/landingPage/Cross.svg";

import './Faq.css'

export default function Faq({ heading, content1, content2, isOpen, onToggle }) {
  return (
    <div className="font-netflix text-headline1 sm:text-headline1 md:text-headline1 lg:text-title2 font-normal py-1 ">
      <div
        onClick={onToggle}
        className="flex justify-between items-center cursor-pointer  p-[24px] bg-[#2D2D2D] hover:bg-[#393939]"
      >
        <h2>{heading}</h2>
        <img
          src={isOpen ? closeIcon : openIcon}
          alt={isOpen ? "Close" : "Open"}
          className="text-white w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]"
        />
      </div>

      {isOpen && (
        <div className="mt-[0.1rem] text-[#ffff] bg-[#2D2D2D]">
          {content1 && <p className='content text-justify  p-[24px]'>{content1}</p>}
          {content2 && <p className='content text-justify  p-[24px]'>{content2}</p>}
        </div>
      )}
    </div>
  )
}