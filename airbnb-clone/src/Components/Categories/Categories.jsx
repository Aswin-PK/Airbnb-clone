import React from 'react'
import Category from './Category/Category'

function Categories() {
  return (
    <div className='bg-[#f4f4f4] h-[4.5rem] md:h-[6.4rem] lg:h-[6.9rem] flex items-center sticky top-[4.4rem] md:top-[3.9rem] lg:top-[4.1rem] z-20 px-6 md:px-[2.5rem] lg:px-[5.5rem]'>
      <div className="categories flex gap-4 md:gap-8 lg:gap-12 md:mt-5 lg:mt-7 overflow-x-scroll no-scrollbar">
        <Category name='Beachfront' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
        <Category name='Amazing views' imageUrl='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'/>
        <Category name='Farms' imageUrl='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'/>
        <Category name='Amazing pools' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
        <Category name='OMG!' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
        <Category name='Rooms' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
        <Category name='Beachfront' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
        <Category name='Amazing views' imageUrl='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'/>
        <Category name='Farms' imageUrl='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'/>
        <Category name='Amazing pools' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
        <Category name='OMG!' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
        <Category name='Rooms' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
        <Category name='Beachfront' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
        <Category name='Amazing views' imageUrl='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'/>
        <Category name='Farms' imageUrl='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'/>
        <Category name='Amazing pools' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
        <Category name='OMG!' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
        <Category name='Rooms' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
      </div>

{/*..................... filter button................ */}

      <div className="filter-container hidden md:flex lg:flex md:mt-5 md:pl-6 lg:mt-7 w-[12rem] h-[3rem] justify-end">
        <div className="filterbtn w-[5.7rem] h-full">
          <button className="filter w-full h-full rounded-xl border border-gray-400 text-[0.8rem] flex items-center justify-around px-3">
            <span className=''>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height='1rem'>
                <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
              </svg>
            </span>
            <span className='font-bold'>Filters</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories

// Farms - https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg
// Beach front - https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg