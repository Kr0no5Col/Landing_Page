import React from 'react'

export const ExperiencePage = () => {
  return (
    <div className='text-white text-center mt-20 mb-20'>

      <div className="grid overflow-hidden grid-cols-3 grid-rows-3 gap-2">
        <div className="m-auto">
          <img src="./Images/Tool_.png" alt="" />
        </div>
        <div className="text-4xl text-pink-400">Experience</div>
        <div className="m-auto">
          <img src="./Images/Tool box_.png" alt="" />
        </div>
        <div className="rounded-xl border-blue-400 border-2 w-80 m-auto">
          <h2 className='text-4xl text-blue-400 font-bold my-6'>2022</h2>
          <h3 className='mb-6'>IT SUPPORT ENGINEER | FORTITUDE NICSA GLOBAL </h3>
        </div>
        <div className="rounded-xl border-blue-400 border-2 w-80 m-auto">
          <h2 className='text-4xl text-blue-400 font-bold my-6'>2021</h2>
          <h3 className='mb-6'>IT SUPPORT | MONASH UNIVERSITY </h3>
        </div>
        <div className="rounded-xl border-blue-400 border-2 w-80 m-auto">
          <h2 className='text-4xl text-blue-400 font-bold my-6'>2019</h2>
          <h3 className='mb-6'>HELP DESK SUPPORT | MICROSOFT</h3>
        </div>
        <div className="m-auto">
          <img src="./Images/icon _hammer tool_.png" alt="" />
        </div>
        <div className="box"></div>
        <div className="m-auto">
          <img src="./Images/tool measure_.png" alt="" />
        </div>
      </div>
    </div>

  )
}
