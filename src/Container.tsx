import React,{ReactNode}from 'react'


interface ContainerProps {
    children:ReactNode;
    height?:string;
    marginBottom?:string;
}

const Container:React.FC<ContainerProps> = ({children,height,marginBottom}) => {
  return (
    <div 
      className={`flex w-[1888px] ${marginBottom === "0" ? "mb-[0px]" : `mb-[70px]`}`}
      style={{height}}
      >
        {children}
     
    </div>

 
  )
}


export default Container

