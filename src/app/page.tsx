// import Responsive from '@/responsive/page'
import React from 'react'
import Header from '@/components/Header'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Header/>
      <Cards/>
      <Footer/>
      {/* <Responsive/> */}
    </div>
  )
}

export default page