import React, { useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi";
import {RxCross2} from "react-icons/rx";
import {BsFillBookmarkHeartFill} from "react-icons/bs";

const Nav = () => {

  const NavSm = () => {
    const [isActive, setIsActive] = useState(false);
    const Extra = () => {
      return (
        <>
          <div className="flex flex-col items-start h-64 px-2 bg-white drop-shadow">
            <form>
              <input type='text' className='border-2 border-gray-900' />
              <button className='mx-3 rounded-md bg-[#03449d] hover:bg-[#034caf]   px-4 py-1 text-white'>Search</button>
            </form>
            <button className='mt-1 rounded-md bg-[#b4d3fe] hover:bg-[#842029] px-3 py-1 text-[#03449d] hover:text-white'>Surprise me!</button>
            <button className='text-lg font-medium'>Favourites</button>
          </div>
        </>
      )
    }
    return(
        <div>
            <div className='md:hidden flex justify-between items-center'>
                <h3 className="text-[#0F172A] text-xl font-bold px-4 py-2">FlavorFinder</h3>
                <span className='px-1'>
                  {isActive ? 
                  <RxCross2 onClick={() => setIsActive(!isActive)} className='text-xl font-bold' /> : <GiHamburgerMenu onClick={() => setIsActive(!isActive)}/>}</span>
            </div>
            <div>
              {isActive && 
                <Extra />}
            </div>
        </div>
    )
  }

  const NavLg = () => {
    const [count, setCount] = useState(0);
    return(
        <div className='drop-shadow'>
          <div className='mt-6 flex items-center justify-between mx-4 text-3xl'>
            <h3 className="text-[#0F172A] px-4 py-2">FlavorFinder</h3>
            <div>
              <BsFillBookmarkHeartFill className='' />
              <p className='text-sm text-center absolute top-0 right-2 h-5 w-5 bg-[#b4d3fe] rounded-full'>{count}</p>
            </div>
          </div>
          <div className='my-4 mx-24 flex items-center'>
            <form>
              <input type='text' className='px-2 py-1 bg-[#f1f5f9]' placeholder='search a meal'/>
              <button className='mx-3 rounded-md bg-[#03449d] hover:bg-[#034caf] px-3 py-1 text-white'>Search</button>
            </form>
            <button className='mt-1 rounded-md bg-[#b4d3fe] hover:bg-[#842029] px-3 py-1 text-[#03449d] hover:text-white'>Surprise me!</button>
          </div>
        </div>
    )
  }


  return (
    <div className=''>
        <NavSm />
        <NavLg />
    </div>
  )
}

export default Nav;