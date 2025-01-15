import React, {ReactNode}from 'react'

interface Bodyprops {
    children:ReactNode;
}

const Body: React.FC<Bodyprops> = ({children}) => {
  return (
    <div className="bg-gray-100 h-[4328px] w-[2028px] p-[70px] mt-[101px] ">
        {children}
    </div>
  )
}


export default Body
