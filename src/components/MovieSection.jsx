//Hooks
import { useContext, useState } from "react"
import { MovieContext } from "../context/MovieContext"

//components
import MovieModal from "./MovieModal";


export default function MovieSection({isAnimating}) {
  const{ popular} = useContext(MovieContext);
  const [openModalIndex, setOpenModalIndex] = useState(null);
  console.log(popular);

  const handleClick = (index) => {
    console.log("Card clicked:", index);
    setOpenModalIndex(openModalIndex === index ? null : index);
  }
  

  return (
    <div className="relative">

        <div className={` ${isAnimating ? 'transition -translate-x-[1090px] duration-1000 max-x1:-translate-x-[1300px] max-x2:-translate-x-[1195px] sm:-translate-x-[750px] md:-translate-x-[1090px] lg:-translate-x-[1190px] xl:-translate-x-[1010px]': 'translate-x-[0px] duration-1000'} flex p-0 my-[20px] gap-[25px] sm:gap-[20px] md:gap-[30px] lg:gap-[36px]`}>

            {popular && popular.slice(0,10).map((contents, index)=>
                
            
                <div onClick={() => handleClick(index)} key={index} className="card-container relative hover:cursor-pointer hover:scale-105 transition-transform duration-500 bg-black border border-gray-500 rounded-[8px]">
                    <div className="image-container w-[120px] h-[160px] sm:w-[112px] md:w-[150px] lg:w-[180px] sm:h-[152px] md:h-[220px] lg:h-[252px] rounded-[8px] overflow-hidden">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${contents.poster_path}`}
                                alt=""
                                className="object-cover h-full w-full"
                                loading="lazy"
                            />
                    </div>
                    <div className={`absolute top-[80px] lg:top-[120px] md:top-[120px] sm:top-[60px] z-[100] ${index === 9 ? 'right-[60%]':'right-[84%]'}`}>
                        <h3 className="outlined-text text-[50px] font-bold text-[#000000] sm:text-[64px] md:text-[64px] lg:text-[85px]">
                            {index + 1}
                        </h3>
                    </div>
                </div>
            )}

        </div>

        
        {popular && popular.slice(0,10).map((pop, index)=>
            <MovieModal 
              key={`modal-${index}`}
              pop={pop} 
              index={index} 
              isOpen={openModalIndex === index}
              onClose={() => setOpenModalIndex(null)}
              handleClick={handleClick}  
            />
        )}

    </div>
    
    )
}
