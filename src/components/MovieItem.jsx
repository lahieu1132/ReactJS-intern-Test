import React,{useState, useRef, useEffect} from 'react'
import {AiFillHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Button from './Button';
import {AiOutlineHeart} from 'react-icons/ai'
import {FaUser, FaPlay, FaBars} from 'react-icons/fa'
import {TiCancel} from 'react-icons/ti'
import {HiOutlineFolderAdd} from 'react-icons/hi'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function MovieItem({movie}) {
  const [isOpen, setOpen] = useState(false);
  const modalRef = useRef(null)
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const [showBtn, setShowBtn] = useState(true)

  const checkMovieTitle = (title) => {
    return title.split(" ").length < 5 ? title : title.split(" ").slice(0,5).join(' ') + '...'
  }
  const lastMovies = new Set([1,2,3,4,5])

  useEffect(()=>{
    const resize = () => {
      if(window.innerWidth > 768) setShowBtn(true) 
      else setShowBtn(false)
    }

    window.addEventListener('resize', resize)

    return ()=> window.removeEventListener('resize', resize)
  },[])

  // console.log(movie)
  return (
    <div className='movie-item relative' >
      <div className='movie-item__img h-[204px] mb-3 relative overflow-hidden'
        onClick={(e) => {
          e.stopPropagation()
          setOpen(true)
        }}
      >
        <div className='movie-item__bg'></div>
        <div className='movie-item__badge'>
          TZ
        </div>
        <img className='w-full h-full object-fill' src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} alt="" />
      </div>
      <div className='flex flex-col items-start sm:flex-row sm:items-center justify-between'>
        <div className='flex flex-row items-center gap-[5px]'>
          <div className='w-4 h-4'>
            <img src={require('../assets/icon/profile-img-2_2022-05-12/profile-img-2@2x.png')} alt="" />
          </div>
          <h3 className='text-xs text-primary'>{checkMovieTitle(movie.title)}</h3>
        </div>
        <div className='flex flex-row items-center gap-4'>
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
      <Modal isOpen={isOpen} close={() => setOpen(false)} >
            <div ref={modalRef} onClick={(e)=> e.stopPropagation()} className='movie-modal bg-white h-screen w-[90%] max-w-[1540px] mx-auto overflow-x-hidden overflow-y-scroll'>
            <div className=' pt-10 mb-[70px] px-[50px]'>
              <div className='flex flex-col  md:flex-row justify-between items-start md:items-end mb-[52px]'>
                <div className='flex flex-col items-center md:flex-row gap-[31px]'>
                  <div className='w-[109px] h-[109px] overflow-hidden rounded-full'>
                    <img src={require('../assets/img/upload-my-profile-1_2022-05-14/upload-my-profile-1.png')} alt="" />
                  </div>
                  <div className='flex flex-col justify-between'>
                    <h2 className='mb-[9px] text-primary text-3xl leading-5 font-medium'>
                      The first portfolio movement.
                    </h2>
                    <div className='mb-5 flex flex-col md:flex-row gap-3 md:gap-[31px]'>
                      <h3 className='text-primary text-base font-light'>Kim Aeyong</h3>
                      <p className='text-small text-base font-light ' >Design, Music Video, Advertising</p>
                    </div>
                    <div className='md:hidden h-10 w-10 flex justify-center items-center rounded-full text-3xl hover:bg-slate-200'
                      onClick={(e)=>{
                        setShowBtn(!showBtn)
                      }}
                    >
                      <FaBars />
                    </div>
                    <div className={`${!showBtn && 'hidden'} flex flex-col md:flex-row gap-1`}>
                      <Button >
                        <AiOutlineHeart  />
                        Like
                      </Button>
                      <Button >
                        <FaUser  />
                        follow
                      </Button>
                      <Button >
                        <HiOutlineFolderAdd  />
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
                <div className={`${!showBtn && 'hidden'} mt-1`}>
                  <Button >
                    Edit project
                  </Button>
                </div>
              </div>

              <div className='relative mb-10'>
                <video className='w-full h-full' src="https://www.w3schools.com/html/mov_bbb.mp4"></video>
                <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
                text-white md:text-3xl text-xl w-20 h-12 md:w-[129px] md:h-[78px] flex justify-center items-center bg-[rgba(0,0,0,0.7)] cursor-pointer'>
                  <FaPlay />
                </div>
              </div>
              <p className='text-small text-sm font-extralight mb-[99px]'>
                {movie.overview}
              </p>
              <div className='flex flex-col items-center gap-[70px] mb-[50px]'>
                <div>
                  <img src={`http://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
                </div>
                <div>
                  <img src={`http://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
                </div><div>
                  <img src={`http://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
                </div>
              </div>

              <div className='mb-[50px] flex flex-col items-center'>
                <h2 className='text-center text-primary text-3xl mb-5'>The first portfolio movement.</h2>
                <div className='flex flex-row gap-[19px] mb-[29px]'>
                  <div className='flex flex-row items-center gap-1'>
                    <AiFillHeart />
                    <span className='text-xs text-primary'>18</span>
                  </div>
                  <div className='flex flex-row items-center gap-1'>
                    <AiFillHeart />
                    <span className='text-xs text-primary'>18</span>
                  </div>
                  <div className='flex flex-row items-center gap-1'>
                    <AiFillHeart />
                    <span className='text-xs text-primary'>18</span>
                  </div>
                </div>
                <div className='text-small flex flex-row items-center mb-10'>
                  Publishing date: <p>2020.10.15</p>
                </div>
                <div className='flex flex-row gap-[10px]'>
                  <Button>
                    <AiOutlineHeart  />
                        Like
                  </Button>
                  <Button>
                    <HiOutlineFolderAdd  />
                        Add
                  </Button>
                </div>
              </div>

            </div>
              <div className="bg-[#efefef] px-[50px] pt-[50px] pb-[53px]">
                <div className='flex flex-row items-center gap-4 mb-[15px]'>
                  <div className='w-[70px] h-[70px] overflow-hidden rounded-full'>
                    <img src={require('../assets/img/upload-my-profile-1_2022-05-14/upload-my-profile-1.png')} alt="" />
                  </div>
                  <h3 className='text-primary text-lg font-medium'>Kim Aeyong</h3>
                </div>

                <Swiper
          slidesPerView={1}
          spaceBetween={15}
          slidesPerGroup={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            }
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
              // lastMovies?.map((item, index) => (
              //   <SwiperSlide key={index}>
              //       <MovieItem movie={item} />
              //   </SwiperSlide>
              // ))
              
            }
            <SwiperSlide >
                <MovieItem movie={movie} />
                </SwiperSlide>
                <SwiperSlide >
                <MovieItem movie={movie} />
            </SwiperSlide>
            <SwiperSlide >
            <MovieItem movie={movie} />
            </SwiperSlide>
            <div className='w-[43px] h-[43px] hover:brightness-75 absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer' ref={navigationNextRef}>
              <img src={require('../assets/icon/r-black-circle-arrow_2022-05-14/r-black-circle-arrow.png')} alt="" />
            </div>
            <div className='w-[43px] h-[43px] hover:brightness-75 absolute top-1/2 -translate-y-1/2 right-4 z-10 cursor-pointer' ref={navigationNextRef}>
              <img src={require('../assets/icon/r-black-circle-arrow_2022-05-14/r-black-circle-arrow.png')} alt="" />
            </div>
                </Swiper>
              </div>
              <div className=' flex flex-col-reverse md:flex-row '>
                  <div className='w-full md:w-[75%] pt-[50px] px-[50px] border-r border-solid border-divide pb-[85px]'>
                    <div>
                      <p className='text-black-three text-xl font-medium mb-5'>Comments</p>
                      <form className='mb-10 border border-primary border-solid h-10 flex flex-row items-center '>
                        <input className='outline-none border-none w-full pl-3 placeholder:text-primary placeholder:text-xs font-light' type="text" placeholder='Write a comment now......'/>
                        <button className='bg-primary w-[70px] h-full flex justify-center items-center'>
                          <img src={require('../assets/icon/enter-comments-icon_2022-05-14/enter-comments-icon.png')} alt="" />
                        </button>
                      </form>
                    </div>
                    <ul className='flex flex-col gap-[39px] mb-[49px]'>
                      <li>
                        <div className='flex flex-row items-center gap-[15px] mb-[13px]'>
                          <div className='w-[70px] h-[70px] overflow-hidden rounded-full'>
                            <img src={require('../assets/img/upload-my-profile-1_2022-05-14/upload-my-profile-1.png')} alt="" />
                          </div>
                          <div>
                            <h3 className='text-black-three'>Kim Aeyong</h3>
                            <p className='text-[#888] text-xs font-light'>2020. 07. 26</p>
                          </div>
                        </div>
                        <p className='text-black-three text-xs font-extralight'>Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much
                          saturation.. love it!</p>
                      </li>
                      <li>
                        <div className='flex flex-row items-center gap-[15px] mb-[13px]'>
                          <div className='w-[70px] h-[70px] overflow-hidden rounded-full'>
                            <img src={require('../assets/img/upload-my-profile-1_2022-05-14/upload-my-profile-1.png')} alt="" />
                          </div>
                          <div>
                            <h3 className='text-black-three'>Kim Aeyong</h3>
                            <p className='text-[#888] text-xs font-light'>2020. 07. 26</p>
                          </div>
                        </div>
                        <p className='text-black-three text-xs font-extralight'>Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much
                          saturation.. love it!</p>
                      </li>
                      <li>
                        <div className='flex flex-row items-center gap-[15px] mb-[13px]'>
                          <div className='w-[70px] h-[70px] overflow-hidden rounded-full'>
                            <img src={require('../assets/img/upload-my-profile-1_2022-05-14/upload-my-profile-1.png')} alt="" />
                          </div>
                          <div>
                            <h3 className='text-black-three'>Kim Aeyong</h3>
                            <p className='text-[#888] text-xs font-light'>2020. 07. 26</p>
                          </div>
                        </div>
                        <p className='text-black-three text-xs font-extralight'>Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much
                          saturation.. love it!</p>
                      </li>
                      <li>
                        <div className='flex flex-row items-center gap-[15px] mb-[13px]'>
                          <div className='w-[70px] h-[70px] overflow-hidden rounded-full'>
                            <img src={require('../assets/img/upload-my-profile-1_2022-05-14/upload-my-profile-1.png')} alt="" />
                          </div>
                          <div>
                            <h3 className='text-black-three'>Kim Aeyong</h3>
                            <p className='text-[#888] text-xs font-light'>2020. 07. 26</p>
                          </div>
                        </div>
                        <p className='text-black-three text-xs font-extralight'>Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much
                          saturation.. love it!</p>
                      </li>
                      <li>
                        <div className='flex flex-row items-center gap-[15px] mb-[13px]'>
                          <div className='w-[70px] h-[70px] overflow-hidden rounded-full'>
                            <img src={require('../assets/img/upload-my-profile-1_2022-05-14/upload-my-profile-1.png')} alt="" />
                          </div>
                          <div>
                            <h3 className='text-black-three'>Kim Aeyong</h3>
                            <p className='text-[#888] text-xs font-light'>2020. 07. 26</p>
                          </div>
                        </div>
                        <p className='text-black-three text-xs font-extralight'>Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much
                          saturation.. love it!</p>
                      </li>
                    </ul>
                    <div className='h-10 border border-solid border-primary flex flex-row items-center justify-center'>
                      More comments
                    </div>
                  </div>
                  <div className='w-full md:w-[439px]'>
                      <div className='pb-10  pt-[50px] px-[50px] border-b border-solid border-divide '>
                        <p className='text-small text-xs font-light'>Owner</p>
                        <div className='flex flex-row items-center gap-4'>
                          <div className='w-[50px] h-[50px] overflow-hidden rounded-full'>
                            <img src={require('../assets/img/upload-my-profile-1_2022-05-14/upload-my-profile-1.png')} alt="" />
                          </div>
                          <div className='flex flex-col items-start  gap-[6px] '>
                            <h3 className='text-sm text-black-three font-medium '>Kim Aeyong</h3>
                            <div className='flex flex-row items-center gap-2'>
                              <img src={require('../assets/icon/location-gray-icon_2022-05-14/location-gray-icon.png')} alt="" />
                              <p className='text-xs font-light text-small'>Korea, Republic of</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='py-10 px-[50px] border-b border-solid border-divide '>
                        <div className='flex flex-col items-start  gap-[6px] '>
                          <h3 className='text-sm text-black-three font-medium mb-3'>The first portfolio movement.</h3>
                          <div className='flex flex-row items-center gap-2 mb-4'>
                            <div className='flex flex-row items-center gap-1'>
                              <AiFillHeart />
                              <span className='text-xs text-primary'>18</span>
                            </div>
                            <div className='flex flex-row items-center gap-1'>
                              <img src={require('../assets/icon/view-icon_2022-05-12/view-icon.png')} alt="" />
                              <span className='text-xs text-primary'>18</span>
                            </div>
                            <div className='flex flex-row items-center gap-1'>
                              <img src={require('../assets/icon/small-comments-icon_2022-05-14/small-comments-icon.png')} alt="" />
                              <span className='text-xs text-primary'>18</span>
                            </div>
                          </div>
                          <p className='text-small text-xs font-light'>Publishing date : 2020.10.15</p>
                        </div>
                      </div>
                      <div className='pb-10  pt-[50px] px-[50px] border-b border-solid border-divide '>
                        <p className='text-small text-xs font-light mb-4'>Creative field</p>
                        <div className='flex flex-row gap-[5px]'>
                          <Link to=''>
                            <img className='w-[85px] h-[30px]' src="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/B47010E9-2A0D-49E5-BEEF-55F63FEFCDC2.png" alt="" />
                          </Link>
                          <Link to=''>
                            <img className='w-[97px] h-[30px]' src="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/86993C3B-5C68-4005-B6AD-23B9DBD3736C.png" alt="" />
                          </Link>
                          <Link to=''>
                            <img className='w-[89px] h-[30px]' src="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/FBD20B0E-780C-46FD-8314-A5C88AF1ADF9.png" alt="" />
                          </Link>
                        </div>
                      </div>
                      <div className='py-10 px-[50px] border-b border-solid border-divide '>
                        <div className='flex flex-row flex-wrap gap-[5px]'>
                          <div className='cursor-pointer px-[10px] pt-[9px] pb-2 text-secondary text-sm font-medium flex items-center justify-center border border-secondary border-solid  '>
                            Editing
                          </div>
                          <div className='cursor-pointer px-[10px] pt-[9px] pb-2 text-secondary text-sm font-medium flex items-center justify-center border border-secondary border-solid  '>
                          Camera action, Angle
                          </div>
                          <div className='cursor-pointer px-[10px] pt-[9px] pb-2 text-secondary text-sm font-medium flex items-center justify-center border border-secondary border-solid  '>
                          Sound, Beat
                          </div>
                          <div className='cursor-pointer px-[10px] pt-[9px] pb-2 text-secondary text-sm font-medium flex items-center justify-center border border-secondary border-solid  '>
                          Graphical 
                          </div>
                          <div className='cursor-pointer px-[10px] pt-[9px] pb-2 text-secondary text-sm font-medium flex items-center justify-center border border-secondary border-solid  '>
                          Experimental
                          </div>
                          <div className='cursor-pointer px-[10px] pt-[9px] pb-2 text-secondary text-sm font-medium flex items-center justify-center border border-secondary border-solid  '>
                            Editing
                          </div>
                        </div>
                      </div>
                      <div className='pt-[50px] px-[50px] '>
                        <div className='flex flex-row items-center justify-center h-10 border border-solid border-primary cursor-pointer hover:text-white hover:bg-primary transition duration-200 ease-linear'>
                          <TiCancel />
                          Report
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </Modal>
    </div>
  )
}

export default MovieItem