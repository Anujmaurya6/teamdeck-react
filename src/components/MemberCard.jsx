import React from 'react'

const MemberCard = ({name,role,img,about,onCardClick}) => {
  return (
    <div onClick={()=>(name)}
    className='bg-white rounded-2xl shadow-md p-6 w-60 
    cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300
     text-center '>
        
        <img src={img}
        alt={name}
        className='w-24 h-24 mx-auto rounded-full object-cover mb-4 border-2 border-gray-300'/>

        <h3 className='text-lg font-semibold text-gray-300'>{name}</h3>
        <p className='text-sm text-blue-500 font-medium'> {role} </p>
        <p className='text-gray-600 text-sm mt-2 italic '>{about} </p>
    </div>
  )
}

export default MemberCard