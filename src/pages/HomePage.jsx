import React, { useRef, useState, useEffect, useCallback } from 'react'
import Header from '../layouts/Header'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieItem from '../components/MovieItem';
import ScrollMovies from '../components/ScrollMovies';
import Footer from '../layouts/Footer'
import Button from '../components/Button';
import {FaPlay} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'


const CategoryItems = [
  {
    title: 'Editing',
    path: '/editing'
  },
  {
    title: 'Camera Action Angle',
    path: '/camera'
  },
  {
    title: 'Sound, Beat',
    path: '/sound'
  },
  {
    title: 'Graphical',
    path: '/graphical'
  },
  {
    title: 'Experimental',
    path: '/experimental'
  },
  {
    title: 'Car',
    path: '/car'
  },
  {
    title: 'Gun',
    path: '/gun'
  },
  {
    title: 'Doll',
    path: '/doll'
  },
  {
    title: 'Theme',
    path: '/theme'
  },
]

const Options = [
  {
    title: 'Motion trend pick',
    path: '/pick'
  },
  {
    title: 'Latest',
    path: '/latest'
  },
  {
    title: 'Recommended',
    path: '/recommended'
  },
]


function HomePage() {
  const [lastMovies, setLastMovies] = useState([])
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const [optionActive, setOptionActive] = useState(0)
  const itemRef = useRef([])
  const [pageNumber, setPageNumber] = useState(2)
  const {movies, hasMore, loading, error} = ScrollMovies(pageNumber)
  const observer = useRef()
  const videoRef = useRef()

  const fetchApi = async () => {
    const {data} = await axios.get(`${process.env.REACT_APP_BE_URL}/movie/top_rated`,{
      params: {
        api_key: process.env.REACT_APP_BE_API_KEY,
        page: pageNumber + 2,
      }
    })
    await setLastMovies(data.results)
  }
  useEffect(()=>{
    fetchApi()
    
  },[])
  const handleClick = (index) => {
    setOptionActive(index)
  }
  const lastBookElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && pageNumber <= 3 ) {
        setPageNumber(pageNumber+1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])


  return (
    <>
        <Header />
        <div className='mt-[70px]'>        
          <Swiper
          slidesPerView={2}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1424: {
              slidesPerView: 9,
              spaceBetween: 10,
            }}
          }
          loopFillGroupWithBlank={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
       }}
          modules={[Navigation]}
          className="mySwiper"
          >
            {
              CategoryItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link to={item.path}>
                    <div className='bg-primary hover:bg-secondary h-20 text-center text-white text-lg flex justify-center 
                    items-center dropShadow-4xl
                    transition ease-out	duration-300'>  
                      {item.title}
                    </div>
                  </Link>
                </SwiperSlide>
              ))
            }
            <div className='w-[43px] h-[43px] hover:brightness-75 absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer' ref={navigationPrevRef}>
              <img src={require('../assets/icon/l-red-circle-arrow_2022-05-12/l-red-circle-arrow.png')} alt="" />
            </div>
            <div className='w-[43px] h-[43px] hover:brightness-75 absolute top-1/2 -translate-y-1/2 right-4 z-10 cursor-pointer' ref={navigationNextRef}>
              <img src={require('../assets/icon/r-red-circle-arrow_2022-05-12/r-red-circle-arrow.png')} alt="" />
            </div>
          </Swiper>

          <div className='mt-[60px] px-5'>
            <div className='flex flex-row justify-between mb-7'>
              <ul className='flex flex-col md:flex-ro gap-2 md:gap-[31px]'>
                {
                  Options.map((item, index) => (
                    <li key={index} ref={el => itemRef.current[index] = el}
                      onClick={()=>handleClick(index)}
                      
                    >
                      <Link to={item.path} className={`${optionActive == index ? 'font-medium  border-b-[3px] border-solid border-black' : 'font-[300]'} text-lg`}>
                        {item.title}
                      </Link>
                    </li>
                  ))
                }
              </ul>
              <div>
                Selection criteria
              </div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-[15px] gap-y-10 mb-[50px]'>
                {
                  movies?.map((movie, index)=> {
                    if (movies.length === index + 1) {
                      return <div ref={lastBookElementRef} key={movie.title}>
                        <MovieItem movie={movie} />
                      </div>
                    } else {
                      return <div key={movie.title}>
                        <MovieItem movie={movie} />
                      </div>
                    }
                  })
                }
            </div>
            { loading &&
              <div class="balls">
                <div></div>
                <div></div>
                <div></div>
              </div>
            }
            
          </div>
          <div className='flex flex-row flex-wrap justify-around py-[60px]  bg-[#efefef] mb-[70px]'>
                <div className='flex flex-col justify-center w-full sm:w-1/2 lg:w-[33%] max-w-[352px] px-5 sm:px-0 mb-10 sm:mb-0'>
                  <h3 className='text-[#292929] text-center sm:text-left text-lg mb-7'>
                    TUTORIAL
                  </h3>
                  <p className='text-3xl md:text-4xl font-medium mb-10 sm:mb-[70px]'>
                    Let's look at 7 ways
                    to use motion trend
                    more effectively
                    in the first tutorial.
                  </p>
                  <div className='self-center	sm:self-start'>
                    <Button>watch now</Button>
                  </div>
                </div>
                <div className=' w-full sm:w-1/2 lg:w-[33%] max-w-[526px] h-[298px] relative px-5  sm:px-0'>
                    <div className='relative'>
                      <video className='w-full h-full' src="https://www.w3schools.com/html/mov_bbb.mp4"></video>
                      <div className='absolute bottom-8 right-4 text-white w-[63px] h-7 bg-[rgba(0,0,0,0.7)] flex justify-center items-center'>
                        02:33
                      </div>
                      <div className='absolute top-4 -left-4 text-white w-[63px] h-7 flex justify-center items-center'>
                        <img src="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/C2CB378D-0119-40DE-A32F-057DBE5AF810-optimized.png" alt="" />
                      </div>
                      <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
                    text-white w-20 h-[50px] flex justify-center items-center bg-[rgba(0,0,0,0.7)] cursor-pointer'>
                      <FaPlay />
                    </div>
                    </div>
                </div>
                <div className='w-full lg:w-[33%] flex flex-col sm:flex-row justify-center mt-10 lg:mt-0 lg:flex-col gap-[15px] px-5 lg:px-0'>
                  <div className='w-full  flex flex-col lg:flex-row gap-5'>
                    <div className='w-full lg:w-[157px] h-[120px] lg:h-[89px]'>
                      <img className='w-full h-full object-fill' src={require('../assets/img/tutorial-img-2_2022-05-13/tutorial-img-2.png')} alt="" />
                    </div>
                    <div>
                      <h3 className='mb-[14px] leading-4	 text-lg text-primary font-medium'>
                        Tutorial
                      </h3>
                      <p className='w-full max-w-[272px] text-xs font-light mb-6'>
                        A tutorial video with Motion Trend. Let's Learn
                        Motion Trends.
                      </p>
                      <div className='flex flex-row gap-4'>
                        <div className='flex flex-row items-center gap-1'>
                          <AiFillHeart />
                          <span className='text-xs text-primary'>18</span>
                        </div>
                        <div className='flex flex-row items-center gap-1'>
                          <img src={require('../assets/icon/view-icon_2022-05-12/view-icon.png')} alt="" />
                          <span className='text-xs text-primary'>18</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full  flex flex-col lg:flex-row gap-5'>
                    <div className='w-full lg:w-[157px] h-[120px] lg:h-[89px]'>
                      <img className='w-full h-full object-fill' src={require('../assets/img/tutorial-img-2_2022-05-13/tutorial-img-2.png')} alt="" />
                    </div>
                    <div>
                      <h3 className='mb-[14px] leading-4	 text-lg text-primary font-medium'>
                        Tutorial
                      </h3>
                      <p className='w-full max-w-[272px] text-xs font-light mb-6'>
                        A tutorial video with Motion Trend. Let's Learn
                        Motion Trends.
                      </p>
                      <div className='flex flex-row gap-4'>
                        <div className='flex flex-row items-center gap-1'>
                          <AiFillHeart />
                          <span className='text-xs text-primary'>18</span>
                        </div>
                        <div className='flex flex-row items-center gap-1'>
                          <img src={require('../assets/icon/view-icon_2022-05-12/view-icon.png')} alt="" />
                          <span className='text-xs text-primary'>18</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full  flex flex-col lg:flex-row gap-5'>
                    <div className='w-full lg:w-[157px] h-[120px] lg:h-[89px]'>
                      <img className='w-full h-full object-fill' src={require('../assets/img/tutorial-img-2_2022-05-13/tutorial-img-2.png')} alt="" />
                    </div>
                    <div>
                      <h3 className='mb-[14px] leading-4	 text-lg text-primary font-medium'>
                        Tutorial
                      </h3>
                      <p className='w-full max-w-[272px] text-xs font-light mb-6'>
                        A tutorial video with Motion Trend. Let's Learn
                        Motion Trends.
                      </p>
                      <div className='flex flex-row gap-4'>
                        <div className='flex flex-row items-center gap-1'>
                          <AiFillHeart />
                          <span className='text-xs text-primary'>18</span>
                        </div>
                        <div className='flex flex-row items-center gap-1'>
                          <img src={require('../assets/icon/view-icon_2022-05-12/view-icon.png')} alt="" />
                          <span className='text-xs text-primary'>18</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div className='px-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-[15px] gap-y-10 mb-[50px]'>
                {
                  lastMovies?.slice(0,5).map((movie, index)=> {
                      return <div key={movie.title}>
                        <MovieItem movie={movie} />
                      </div>
                  })
                }
            </div>
        </div>

        <Footer />
    </>
  )
}

export default HomePage