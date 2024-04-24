import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='auth'>
        <div className='root'>
            <div className='root-container'>
                <div className='wrapper'>
                    {children}
                </div>

            </div>

        </div>
    </main>
  )
}

export default Layout