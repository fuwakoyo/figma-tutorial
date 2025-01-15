import React,{ReactNode}from 'react'

interface ContainerProps {
    children:ReactNode;
}

const Container:React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='flex outline outline-blue-500 w-[1888px] h-[543px] mb-[70px]'>
        {children}
     
    </div>

 
  )
}


export default Container

