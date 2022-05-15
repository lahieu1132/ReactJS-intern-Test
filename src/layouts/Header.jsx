import React,{useEffect, useRef, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {CgSearch } from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'
import Modal from '../components/Modal'

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
  const [isOpen, setOpen] = useState(false);
  const [isInputShow, setInputShow] = useState(false)
  const menuRef = useRef()
  const InputSearchRef = useRef()

  const handleSearch = (e) => {
    e.stopPropagation()
    setInputShow(!isInputShow)
  }
  useEffect(() => {
    if (!isInputShow) return;

    function listener(evt) {
      if (InputSearchRef.current?.contains(evt.target)) return;
      setInputShow(false);
    }

    window.addEventListener("click", listener);

    return () => {
      window.removeEventListener("click", listener);
    };
  }, [isInputShow]);

  return (
    <div className='h-[60px] px-5 bg-primary fixed top-0 left-0 right-0 flex flex-row justify-between items-center z-20'>
      <div className='flex flex-row items-center gap-10'>
        <Link to='/'>
          <div className={`${isInputShow ? 'hidden' : 'block'} w-[180px] h-[17px]`}>
            <img src={require('../assets/img/logo-icon_2022-05-12/logo-icon@2x.png')} alt="" />
          </div>
        </Link>
        <ul className='hidden lg:flex flex-row gap-[29px] text-sm text-nav-text'>
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

      <div ref={InputSearchRef} className={`lg:block ${isInputShow ? 'block relative right-12' : ' hidden '} max-w-[600px] w-1/2 border-b border-nav-text border-solid overflow-hidden`}
        onClick={(e)=> e.stopPropagation()}
      >
        <input
          className='lg:pl-[26px] w-full text-base text-white placeholder:text-sm placeholder:text-white bg-transparent border-none outline-none'
        type="text" placeholder='Search for motion trend......' name="" id="" />
      </div>

      <div className='text-white flex flex-row items-center gap-[30px]'>
        <div className='cursor-pointer hover:text-secondary text-xl'
          onClick={handleSearch}
        >
          <CgSearch />
        </div>
        <div className='lg:hidden'
          onClick={(e) => {
            e.stopPropagation()
            setOpen(true)
          }}
        >
          <GoThreeBars />
        </div>
        <div className='hidden lg:block text-sm text-nav-text hover:text-white cursor-pointer'>
          Login
        </div>
        <div className='hidden lg:block text-sm text-nav-text hover:text-white cursor-pointer'>
          Sign Up
        </div>
      </div>
      <Modal isOpen={isOpen} close={() => setOpen(false)}>
        <div className={`menu-mobile w-2/3 h-full flex flex-col z-[60] items-center bg-white pt-[60px] ${isOpen && 'active'}`}
          onClick={(e)=> e.stopPropagation()}
        >
          <div className='flex flex-row  gap-10 mb-10 '>
            <div className='text-sm text-nav-text hover:text-white cursor-pointer'>
              Login
            </div>
            <div className='text-sm text-nav-text hover:text-white cursor-pointer'>
              Sign Up
            </div>
          </div>
          <ul className='flex flex-col items-center gap-[29px] uppercase text-sm text-nav-text'>
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
      </Modal>
    </div>
  )
}

export default Header