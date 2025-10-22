import { motion } from "framer-motion";                                    
import React from 'react'

const App = () => {
  return (
<div>
   <motion.div  
   whileHover={{background:"green"}}
   whileTap={{scale:0.7}}
   drag
   whileDrag={{scale:0.8}}
   className="bg-red-500 h-40 w-1/2 mt-10 place-self-center  ">
    subscribe
   </motion.div>

   </div>

  )
}

export default App