import React from 'react'
const Layout = ({children}) => {
    return(
        <div className='p-5 mx-auto bg-white shadow-lg sm:p-10 mt-10 dark:bg-neutral-900'>
            {children}
        </div>
    )
}
export default Layout
