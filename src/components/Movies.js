import axios from 'axios';
import React,{useState,useEffect} from 'react';
// import Image from '../banner.jpg'
import { Oval } from  'react-loader-spinner'

function Movies() {

    const [movies,setMovies] = useState([])

    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=937b0e0e24f227ed89cd973ffa048054&page=2").then((res)=> setMovies(res.data.results))

    })
    
    return <>
        <div className="mb-8">
            <div className="mt-8 mb-8 font-bold text-2xl text-center">Trending Movies</div>
            {
                movies.length == 0 ?
                <div className='flex justify-center'>
                    <Oval
                height="100"
                width="100"
                color='grey'
                secondaryColor='grey'
                ariaLabel='loading'
              />
              </div>:
            <div className="flex flex-wrap justify-center">
                {
                    movies.map((movie)=>(
                        <div className={`
                        bg-[url(https://image.tmdb.org/t/p/w500/${movie.poster_path})] 
                        md:h-[30vh] md:w-[250px] 
                        h-[25vh] w-[150px]
                        bg-center bg-cover
                        rounded-xl
                        flex items-end
                        m-4
                        hover:scale-110
                        ease-out duration-300
                    `} >
                            <div className="w-full bg-gray-900 text-white py-2 font-bold text-center rounded-b-xl">{movie.title} </div>
                        </div>
                    ))
                }
            </div>
}
        </div>
    </>
}

export default Movies;
