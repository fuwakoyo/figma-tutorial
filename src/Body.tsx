import {ReactNode} from 'react'

interface Bodyprops {
    children:ReactNode;
}

const Body: React.FC<Bodyprops> = ({children}) => {
  return (
    <div className="h-[4188px] w-[1888px] pt-[70px] px-[70px]  ">
        {children}
    </div>
  )
}


export default Body
