import React,{ReactNode}from 'react'

interface ContainerProps {
    children:ReactNode;
    height?:string;
}

const Container:React.FC<ContainerProps> = ({children,height}) => {
  return (
    <div 
      className='flex outline outline-blue-500 w-[1888px] mb-[70px]'
      style={{height}}
      >
        {children}
     
    </div>

 
  )
}


export default Container

