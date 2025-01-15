import React from 'react'

interface ContentProps {
    title:string;
    description:string;
    titleColor?:string;
    fontWeight?:string;
    textShadow?:string;
}

const Content:React.FC<ContentProps> = ({title,description,titleColor = "black",fontWeight="",textShadow=""}:ContentProps) => {
  return (
    <div className='outline outline-red-300 w-[990px] h-[543px] mr-[24px]'>
        <div className="pb-[24px]" style={{ color: `${titleColor}`, fontWeight:`${fontWeight}`,textShadow:`${textShadow}`}}>
            {title}
        </div>
        <div>
            {description}
        </div>
    </div>
  )
}

export default Content