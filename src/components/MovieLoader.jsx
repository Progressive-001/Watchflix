// import { useContext } from "react"
// import { MovieContext } from "../context/MovieContext"
import Skeleton from '@mui/joy/Skeleton';


export default function MovieLoader() {
//   const{ popular} = useContext(MovieContext);
//   console.log(numbers);
  

  return (
        <>

            {[...Array(10)].map((_, index)=>
                    
                <div key={index} className="card-container relative hover:cursor-pointer hover:scale-105 transition-transform duration-500 bg-black border border-gray-500 rounded-[8px]">
                    <div className="image-container w-[120px] h-[160px] sm:w-[112px] md:w-[150px] lg:w-[180px] sm:h-[152px] md:h-[220px] lg:h-[252px] rounded-[8px] overflow-hidden">
        
                        <Skeleton animation="wave" variant="overlay" className="!rounded-[8px] !bg-gray-800">
                            <img
                                alt=""
                                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                className="object-cover h-full w-full"
                            />
                        </Skeleton>
                    
                    </div>
                    <div className={`absolute top-[80px] lg:top-[120px] md:top-[120px] sm:top-[60px] z-[100] ${index === 9 ? 'right-[60%]':'right-[84%]'}`}>
                        <h3 className="outlined-text text-[50px] font-bold text-[#000000] sm:text-[64px] md:text-[64px] lg:text-[85px]">
                            {index + 1}
                        </h3>
                    </div>
                </div>
            )}
        </>
    
    )
}
