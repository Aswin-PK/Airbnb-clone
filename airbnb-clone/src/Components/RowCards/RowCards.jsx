import React from 'react'

function RowCards(props) {
  return (
    <div className='w-full pt-4 flex flex-wrap md:gap-6 lg:gap-7 px-6 md:px-[2.5rem] lg:px-[5.5rem]'>

      <div className="w-full md:w-[24rem] lg:w-[22.5rem] rounded-xl overflow-hidden">
          <a href="#">
              <div className="w-full h-[20rem] lg:h-[21.5rem] bg-red-500 slider rounded-xl overflow-hidden relative">
                <div className="w-[1.4rem] h-[1.4rem] likebtn absolute right-4 top-4 z-10">
                  <span className="like text-xl">
                    <svg width="100%" height="100%" viewBox="0 -3.71 75.17 75.17" xmlns="http://www.w3.org/2000/svg">
                      <path id="Path_1" data-name="Path 1" d="M117.606,280.375s22.263-15.459,31.959-30.318c9.6-14.708.354-31.054-10.533-33.8-14.457-3.65-21.426,10.478-21.426,10.478s-6.968-14.128-21.425-10.478c-10.888,2.748-20.132,19.094-10.534,33.8C95.343,264.916,117.606,280.375,117.606,280.375Z" transform="translate(-80.021 -214.131)" fill="
                      #555" stroke="#fff" stroke-linejoin="round" stroke-width="5"/>
                    </svg>
                  </span>
                </div>
                <img className="w-full h-full object-cover absolute" src={props.imageUrl} alt="" />
              </div>
              <div className="pt-2 text-left">
                  <div className="flex justify-between">
                    <h5 className=" text-md font-medium text-gray-900 dark:text-black">Karnataka, India</h5>
                    <h5 className=" text-md font-light text-gray-900 dark:text-black">4.93</h5>
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-500">199 kilometer's away</p>
                  <p className="font-normal text-gray-700 dark:text-gray-500">1-6 Sep</p>
                  <p className="font-normal text-gray-900 dark:text-black"><span className='text-md font-medium'>7076</span> night</p>
              </div>
          </a>
      </div>

      <div className="w-full md:w-[24rem] lg:w-[22.5rem] rounded-xl overflow-hidden">
          <a href="#">
              <div className="w-full h-[20rem] lg:h-[21.5rem] bg-red-500 slider rounded-xl overflow-hidden relative">
                <div className="w-[1.4rem] h-[1.4rem] likebtn absolute right-4 top-4 z-10">
                  <span className="like text-xl">
                    <svg width="100%" height="100%" viewBox="0 -3.71 75.17 75.17" xmlns="http://www.w3.org/2000/svg">
                      <path id="Path_1" data-name="Path 1" d="M117.606,280.375s22.263-15.459,31.959-30.318c9.6-14.708.354-31.054-10.533-33.8-14.457-3.65-21.426,10.478-21.426,10.478s-6.968-14.128-21.425-10.478c-10.888,2.748-20.132,19.094-10.534,33.8C95.343,264.916,117.606,280.375,117.606,280.375Z" transform="translate(-80.021 -214.131)" fill="
                      #555" stroke="#fff" stroke-linejoin="round" stroke-width="5"/>
                    </svg>
                  </span>
                </div>
                <img className="w-full h-full object-cover absolute" src={props.imageUrl} alt="" />
              </div>
              <div className="pt-2 text-left">
                  <div className="flex justify-between">
                    <h5 className=" text-md font-medium text-gray-900 dark:text-black">Karnataka, India</h5>
                    <h5 className=" text-md font-light text-gray-900 dark:text-black">4.93</h5>
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-500">199 kilometer's away</p>
                  <p className="font-normal text-gray-700 dark:text-gray-500">1-6 Sep</p>
                  <p className="font-normal text-gray-900 dark:text-black"><span className='text-md font-medium'>7076</span> night</p>
              </div>
          </a>
      </div>

      <div className="w-full md:w-[24rem] lg:w-[22.5rem] rounded-xl overflow-hidden">
          <a href="#">
              <div className="w-full h-[20rem] lg:h-[21.5rem] bg-red-500 slider rounded-xl overflow-hidden relative">
                <div className="w-[1.4rem] h-[1.4rem] likebtn absolute right-4 top-4 z-10">
                  <span className="like text-xl">
                    <svg width="100%" height="100%" viewBox="0 -3.71 75.17 75.17" xmlns="http://www.w3.org/2000/svg">
                      <path id="Path_1" data-name="Path 1" d="M117.606,280.375s22.263-15.459,31.959-30.318c9.6-14.708.354-31.054-10.533-33.8-14.457-3.65-21.426,10.478-21.426,10.478s-6.968-14.128-21.425-10.478c-10.888,2.748-20.132,19.094-10.534,33.8C95.343,264.916,117.606,280.375,117.606,280.375Z" transform="translate(-80.021 -214.131)" fill="
                      #555" stroke="#fff" stroke-linejoin="round" stroke-width="5"/>
                    </svg>
                  </span>
                </div>
                <img className="w-full h-full object-cover absolute" src={props.imageUrl} alt="" />
              </div>
              <div className="pt-2 text-left">
                  <div className="flex justify-between">
                    <h5 className=" text-md font-medium text-gray-900 dark:text-black">Karnataka, India</h5>
                    <h5 className=" text-md font-light text-gray-900 dark:text-black">4.93</h5>
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-500">199 kilometer's away</p>
                  <p className="font-normal text-gray-700 dark:text-gray-500">1-6 Sep</p>
                  <p className="font-normal text-gray-900 dark:text-black"><span className='text-md font-medium'>7076</span> night</p>
              </div>
          </a>
      </div>

      <div className="w-full md:w-[24rem] lg:w-[22.5rem] rounded-xl overflow-hidden">
          <a href="#">
              <div className="w-full h-[20rem] lg:h-[21.5rem] bg-red-500 slider rounded-xl overflow-hidden relative">
                <div className="w-[1.4rem] h-[1.4rem] likebtn absolute right-4 top-4 z-10">
                  <span className="like text-xl">
                    <svg width="100%" height="100%" viewBox="0 -3.71 75.17 75.17" xmlns="http://www.w3.org/2000/svg">
                      <path id="Path_1" data-name="Path 1" d="M117.606,280.375s22.263-15.459,31.959-30.318c9.6-14.708.354-31.054-10.533-33.8-14.457-3.65-21.426,10.478-21.426,10.478s-6.968-14.128-21.425-10.478c-10.888,2.748-20.132,19.094-10.534,33.8C95.343,264.916,117.606,280.375,117.606,280.375Z" transform="translate(-80.021 -214.131)" fill="
                      #555" stroke="#fff" stroke-linejoin="round" stroke-width="5"/>
                    </svg>
                  </span>
                </div>
                <img className="w-full h-full object-cover absolute" src={props.imageUrl} alt="" />
              </div>
              <div className="pt-2 text-left">
                  <div className="flex justify-between">
                    <h5 className=" text-md font-medium text-gray-900 dark:text-black">Karnataka, India</h5>
                    <h5 className=" text-md font-light text-gray-900 dark:text-black">4.93</h5>
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-500">199 kilometer's away</p>
                  <p className="font-normal text-gray-700 dark:text-gray-500">1-6 Sep</p>
                  <p className="font-normal text-gray-900 dark:text-black"><span className='text-md font-medium'>7076</span> night</p>
              </div>
          </a>
      </div>

      <div className="w-full md:w-[24rem] lg:w-[22.5rem] rounded-xl overflow-hidden">
          <a href="#">
              <div className="w-full h-[20rem] lg:h-[21.5rem] bg-red-500 slider rounded-xl overflow-hidden relative">
                <div className="w-[1.4rem] h-[1.4rem] likebtn absolute right-4 top-4 z-10">
                  <span className="like text-xl">
                    <svg width="100%" height="100%" viewBox="0 -3.71 75.17 75.17" xmlns="http://www.w3.org/2000/svg">
                      <path id="Path_1" data-name="Path 1" d="M117.606,280.375s22.263-15.459,31.959-30.318c9.6-14.708.354-31.054-10.533-33.8-14.457-3.65-21.426,10.478-21.426,10.478s-6.968-14.128-21.425-10.478c-10.888,2.748-20.132,19.094-10.534,33.8C95.343,264.916,117.606,280.375,117.606,280.375Z" transform="translate(-80.021 -214.131)" fill="
                      #555" stroke="#fff" stroke-linejoin="round" stroke-width="5"/>
                    </svg>
                  </span>
                </div>
                <img className="w-full h-full object-cover absolute" src={props.imageUrl} alt="" />
              </div>
              <div className="pt-2 text-left">
                  <div className="flex justify-between">
                    <h5 className=" text-md font-medium text-gray-900 dark:text-black">Karnataka, India</h5>
                    <h5 className=" text-md font-light text-gray-900 dark:text-black">4.93</h5>
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-500">199 kilometer's away</p>
                  <p className="font-normal text-gray-700 dark:text-gray-500">1-6 Sep</p>
                  <p className="font-normal text-gray-900 dark:text-black"><span className='text-md font-medium'>7076</span> night</p>
              </div>
          </a>
      </div>

      <div className="w-full md:w-[24rem] lg:w-[22.5rem] rounded-xl overflow-hidden">
          <a href="#">
              <div className="w-full h-[20rem] lg:h-[21.5rem] bg-red-500 slider rounded-xl overflow-hidden relative">
                <div className="w-[1.4rem] h-[1.4rem] likebtn absolute right-4 top-4 z-10">
                  <span className="like text-xl">
                    <svg width="100%" height="100%" viewBox="0 -3.71 75.17 75.17" xmlns="http://www.w3.org/2000/svg">
                      <path id="Path_1" data-name="Path 1" d="M117.606,280.375s22.263-15.459,31.959-30.318c9.6-14.708.354-31.054-10.533-33.8-14.457-3.65-21.426,10.478-21.426,10.478s-6.968-14.128-21.425-10.478c-10.888,2.748-20.132,19.094-10.534,33.8C95.343,264.916,117.606,280.375,117.606,280.375Z" transform="translate(-80.021 -214.131)" fill="
                      #555" stroke="#fff" stroke-linejoin="round" stroke-width="5"/>
                    </svg>
                  </span>
                </div>
                <img className="w-full h-full object-cover absolute" src={props.imageUrl} alt="" />
              </div>
              <div className="pt-2 text-left">
                  <div className="flex justify-between">
                    <h5 className=" text-md font-medium text-gray-900 dark:text-black">Karnataka, India</h5>
                    <h5 className=" text-md font-light text-gray-900 dark:text-black">4.93</h5>
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-500">199 kilometer's away</p>
                  <p className="font-normal text-gray-700 dark:text-gray-500">1-6 Sep</p>
                  <p className="font-normal text-gray-900 dark:text-black"><span className='text-md font-medium'>7076</span> night</p>
              </div>
          </a>
      </div>
      
    </div>
  )
}

export default RowCards





{/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a> */}