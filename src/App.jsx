import React from 'react'
import MemberCard from './components/MemberCard'
const App = () => {

  const team=[
    {
      name:"Anuj maurya",
      Age:14,
      role:"Full Stack developer",
      about:"Tradtional thinker,forward dreamer", 
    },
    {
      name: "Priya Sharma",
      role: "Frontend Developer",
      img: "https://via.placeholder.com/150/FFB6C1/000000",
      about: "Loves crafting clean and minimal UI ✨"
    },
    {
      name: "Ravi Kumar",
      role: "AI/ML Enthusiast",
      img: "https://via.placeholder.com/150/87CEFA/000000",
      about: "Finds patterns where others see chaos 🤖"
    },
    {
      name: "Priya Sharma",
      role: "Frontend Developer",
      img: "https://via.placeholder.com/150/FFB6C1/000000",
      about: "Loves crafting clean and minimal UI ✨"
    },
    {
      name: "Ravi Kumar",
      role: "AI/ML Enthusiast",
      img: "https://via.placeholder.com/150/87CEFA/000000",
      about: "Finds patterns where others see chaos 🤖"
    }
  ]

  const handleClick=(name)=>{
alert("You have clicked in the ${name} card");
  }


  return (
   <div>
    <div className='min-h-screen bg-grey-500 flex flex-col items-center py-10'>  
      <h1 className='text-3xl font-bold text-gray-800 mb-7'>Our Teams</h1>
      <div className='flex flex-wrap justify-center gap-6'>
    {team.map((member,index)=>(
     <MemberCard
       key={index}
            name={member.name}
            role={member.role}
            img={member.img}
            about={member.about}
            onCardClick={handleClick}
      />
    ))}

      </div>
    </div>
   </div>
  );
}

export default App