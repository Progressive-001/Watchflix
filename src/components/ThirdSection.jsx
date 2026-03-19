//assets
import { PcIcon, PcIcon1, PcIcon2, PcIcon3 } from './Icons/Icons.jsx'

//styles
import './ThirdSection.css'

export default function ThirdSection() {
  return (
    <div className=' w-[100%] thirdSection flex flex-col gap-3 font-netflix text-body sm:text-body md:text-body lg:text-body font-normal z-[100]'>

       <h2 className='font-netflix font-medium text-title2 sm:text-body md:text-body lg:text-title2 '>More Reasons to Join</h2>
       
       <div className='reasons-container text-justify grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full max-w-full gap-[10px]'>
            <div className='relative box pt-[24px] px-[16px] pb-24 flex flex-col gap-5 h-full'>
                <h2 className='text-body sm: md:text-title2 lg:text-title2 font-medium leading-normal'>Enjoy on your TV</h2>
                <p className='paraContent text-[#B3B3B3]'>Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                <PcIcon2 className='absolute bottom-4 right-4 w-[70px] h-[70px] ' />
            </div>
            <div className='relative box pt-[24px] px-[16px]  pb-24 flex flex-col gap-5 h-full'>
                <h2 className='text-title2 sm: md:text-title2 lg:text-title2 font-medium leading-normal'>Download your shows to watch offline</h2>
                <p className='paraContent text-[#B3B3B3]'>Save your favorites easily and always have something to watch.</p>
                <PcIcon3 className='absolute bottom-4 right-4 w-[70px] h-[70px]' />
            </div>
            <div className='relative box pt-[24px] px-[16px]  pb-24 flex flex-col gap-5 h-full'>
                <h2 className='text-title2 sm: md:text-title2 lg:text-title2 font-medium leading-normal'>Watch everywhere</h2>
                <p className='paraContent text-[#B3B3B3]'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                <PcIcon1 className='absolute bottom-4 right-4 w-[70px] h-[70px]' />
            </div>
            <div className='relative box pt-[24px] px-[11px]  pb-24 flex flex-col gap-5 h-full'>
                <h2 className='text-title2 sm: md:text-title2 lg:text-title2 font-medium leading-normal'>Create profiles for kids</h2>
                <p className='paraContent text-[#B3B3B3]'>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>
                <PcIcon className='absolute bottom-4 right-4 w-[70px] h-[70px]' />
            </div>
        </div> 

    </div>
  )
}
