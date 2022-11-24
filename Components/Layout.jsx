import React from 'react'
import NavBar from './NavBar'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>Shoe store</title>
      </Head>
      <header>
        <NavBar/>
      </header>
      <main className='main-container'>
          {children}
      </main>
    </div>
  )
}

export default Layout;