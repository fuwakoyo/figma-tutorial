import React,{ReactNode} from 'react'


interface Layoutprops {
    children:ReactNode;
}

const Layout: React.FC<Layoutprops> = ({children}) =>{
    return(
        <div className="bg-gray-50 h-[5576px] w-[2028px]">
        {children}
        </div>
    )
}

export default Layout
