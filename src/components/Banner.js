import React,{useState,useEffect} from 'react';
import axios from 'axios';
function Banner() {

    const [movie,setMovie] = useState({})

    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=937b0e0e24f227ed89cd973ffa048054&page=1").then((res)=> setMovie(res.data.results[0]))

    },[])
    

    return <>
        <div className=
        {`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[40vh] md:h-[60vh] 
        bg-center bg-cover
        flex items-end  
    `}>
        <div className=" text-xl md:text-3xl text-white
            p-6 
            bg-gray-900 bg-opacity-50
            w-full
            flex justify-center
        ">
                {movie.title}
                </div>
        </div>
    </>;
}

export default Banner;


// import React,{useState,useEffect} from 'react';
// import axios from 'axios';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';

// function Banner(){

//     const [movies,setMovies] = useState({})

//     useEffect(()=>{
//         axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=937b0e0e24f227ed89cd973ffa048054&page=1").then((res)=> setMovies(res.data.results))
//     },[])

//     return (
//       <CarouselProvider
//         naturalSlideWidth={100}
//         naturalSlideHeight={125}
//         totalSlides={movies.length}
//       >
//         <Slider>
//             {
//                 movies.map((movie,i)=>{
//                     <Slide index={i}>
//                         <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end`}>
//                             <div className=" text-xl md:text-3xl text-white
//                                 p-6 
//                                 bg-gray-900 bg-opacity-50
//                                 w-full
//                                 flex justify-center
//                             ">{movie.title}
//                             </div>
//                         </div>
//                     </Slide>
//                 })
//             }
//         </Slider>
//         <ButtonBack>Back</ButtonBack>
//         <ButtonNext>Next</ButtonNext>
//       </CarouselProvider>
//     );

// }

// export default Banner;