import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"
import Skeleton from '@mui/joy/Skeleton';


export default function MovieSection({contents, numbers}) {
  const{ isLoading} = useContext(MovieContext);

  return (
        <>

            <div className="card-container relative hover:cursor-pointer hover:scale-105 transition-transform duration-500 bg-black border border-gray-500 rounded-[8px]">
                <div className="image-container w-[120px] h-[160px] sm:w-[112px] md:w-[150px] lg:w-[224px] sm:h-[152px] md:h-[220px] lg:h-[265px] rounded-[8px] overflow-hidden">
                  {isLoading ? (
                        <Skeleton animation="wave" variant="overlay" className="!rounded-[8px] !bg-gray-300">
                            <img
                                alt=""
                                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                className="object-cover h-full w-full"
                            />
                        </Skeleton>
                       ):(
                        <img
                            src={`https://image.tmdb.org/t/p/w500${contents.poster_path}`}
                            alt=""
                            className="object-cover h-full w-full"
                        />
                       )}
                </div>
                <div className="absolute top-[80px] lg:top-[120px] right-[84%] md:top-[120px] sm:top-[60px] z-[100]">
                    <h3 className="outlined-text text-[50px] font-bold text-[#000000] sm:text-[64px] md:text-[64px] lg:text-[100px]">
                        {numbers + 1}
                    </h3>
                </div>
            </div>

        </>

    )
}
