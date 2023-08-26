import React from 'react'


const display = () =>{
    console.log("clicked")
}

function Category(props) {
  return (
    <div className='category-container min-w-[4.2rem]'>
        <div className="category relative">
            <input type="radio" name="category" onChange={display} className="focusing z-10 absolute w-full h-full appearance-none" />
            <div className="category-content text-gray-500">
                <span className='flex flex-col items-center '>
                    <img src={props.imageUrl} alt="" className='w-7 aspect-[24/24]' />
                    <span className='whitespace-nowrap text-sm lg:text-[0.8rem]'>{props.name}</span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Category
