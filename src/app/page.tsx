import React from 'react'

import Home from '@/components/home/Home'
import Header from '@/components/header/Header'
import Philosophy from '@/components/philosophy/Philosophy'
import SilhouetteGrid from '@/components/silhouetteGrid/SilhouetteGrid'
import ProductDetails from '@/components/productDetails/ProductDetails'
import ProductAccordion from '@/components/accordion/ProductAccordion'
import TestimonialSection from '@/components/testimonialSection/TestimonialSection'
import Footer from '@/components/footer/Footer'




const page = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Philosophy/>
      <SilhouetteGrid/>
      <ProductDetails/>
      <ProductAccordion/>
      <TestimonialSection/>
      <Footer/>

      

    </div>
  )
}

export default page