import React,{ReactNode} from 'react'


interface Layoutprops {
    children:ReactNode;
}

const Layout: React.FC<Layoutprops> = ({children}) =>{
    return(
        <div className="bg-gray-50 h-lvh">
        {children}
        </div>
    )
}

export default Layout
