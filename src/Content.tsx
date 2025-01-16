import React,{ReactNode} from 'react'

interface ContentProps {
    title:string;
    description:ReactNode;
    titleColor?:string;
    fontWeight?:string;
    textShadow?:string;
}


const Content:React.FC<ContentProps> = ({title,description,titleColor = "black",fontWeight="",textShadow=""}:ContentProps) => {
  return (
    <div className='outline outline-red-300 w-[874px] mr-[24px]'>
        <div className="mb-[24px] text-4xl"  style={{ color: `${titleColor}`, fontWeight:`${fontWeight}`,textShadow:`${textShadow}`}}>
            {title}
        </div>
        <div>
            {description}
        </div>
    </div>
  )
}

export default Content