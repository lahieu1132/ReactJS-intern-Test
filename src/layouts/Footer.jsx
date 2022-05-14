import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsYoutube} from 'react-icons/bs'


function Footer() {
  return (
    <div >
        <div className='flex flex-col sm:flex-row gap-2 justify-between items-center min-h-[40px] bg-primary px-5 py-2 sm:py-0'>
            <div className='flex flex-row items-center text-white gap-8'>
                <h3 className='text-sm font-medium'>Contact</h3>
                <p className='text-xs font-extralight'>motiontrend@test.com</p>
            </div>
            <div className='flex flex-row items-center gap-8'>
                <p className='text-[#9b9b9b] text-xs font-extralight'>@ Motiontrend. All rights reserved.</p>
                <div className='flex flex-row items-end text-[#9b9b9b] gap-[15px]'>
                    <a href="/">
                        <FiInstagram />
                    </a>
                    <a href="/">
                        <FaFacebookF />
                    </a>
                    <a href="/">
                        <BsYoutube />
                    </a>
                </div>
            </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-between items-center min-h-[40px] px-5'>
            <div className='flex flex-col items-center sm:flex-row gap-2 sm:gap-10 text-xs text-primary'>
                <Link to='/'>
                    <div>Introduction</div>
                </Link>
                <Link to='/'>
                    <div>Terms of Service</div>
                </Link>
                <Link to='/'>
                    <div>Language</div>
                </Link>
                <Link to='/'>
                    <div>Customer Service</div>
                </Link>
            </div>
            <div className='w-[180px] h-3'>
                <img src={require('../assets/img/black-logo-icon_2022-05-12/black-logo-icon.png')} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer