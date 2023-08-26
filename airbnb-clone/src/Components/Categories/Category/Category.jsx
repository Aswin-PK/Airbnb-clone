import React from 'react'


const display = () =>{
    console.log("clicked")
}

function Category(props) {
  return (
    <div className='category-container min-w-fit'>
        <div className="category relative">
            <input type="radio" name="category" onChange={display} className="focusing z-10 absolute w-full h-full appearance-none" />
            <div className="category-content text-gray-500 w-full h-full flex items-center justify-center">
                <span className='flex flex-col items-center'>
                    <img src={props.imageUrl} alt="" className='w-7 aspect-[24/24]' />
                    <span className='text-sm md:text-[0.7rem] lg:text-[0.8rem]'>{props.name}</span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Category
