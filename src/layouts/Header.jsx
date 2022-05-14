import React,{useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {CgSearch } from 'react-icons/cg'

function Header() {
  
  // const fetchApi = async () => {
  //   const data = await axios.get(`https://yts.torrentbay.to/api/v2/list_movies.json`,{
  //     params: {
  //       quality:"3D",
  //     }
  //   })
  //   console.log(data)
  // };
  // useEffect(()=>{
  //   fetchApi()
  // },[])


  return (
    <div className='h-[60px] px-5 bg-primary fixed top-0 left-0 right-0 flex flex-row justify-between items-center z-50'>
      <div className='flex flex-row items-center gap-10'>
        <Link to='/'>
          <div className='w-[180px] h-[17px]'>
            <img src={require('../assets/img/logo-icon_2022-05-12/logo-icon@2x.png')} alt="" />
          </div>
        </Link>
        <ul className='flex flex-row gap-[29px] text-sm text-nav-text'>
          <li className='hover:text-secondary'>
            <Link to='/'>
              Discover
            </Link>
          </li>
          <li className='hover:text-secondary'>
            <Link to='/'>
              Job
            </Link>
          </li>
        </ul>
      </div>

      <div className='max-w-[600px] w-1/2 border-b border-nav-text border-solid'>
        <input
          className='pl-[26px] text-base text-white placeholder:text-sm placeholder:text-white bg-transparent border-none outline-none'
        type="text" placeholder='Search for motion trend......' name="" id="" />
      </div>

      <div className='text-white flex flex-row items-center gap-[30px]'>
        <div className='cursor-pointer hover:text-secondary text-xl'>
          <CgSearch />
        </div>
        <div className='text-sm text-nav-text hover:text-white cursor-pointer'>
          Login
        </div>
        <div className='text-sm text-nav-text hover:text-white cursor-pointer'>
          Sign Up
        </div>
      </div>
    </div>
  )
}

export default Header