import React from 'react'

const Hero = () => {
  return (
    <div 
    className='container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column' style={{height:"50vh",backgroundImage: 'url("https://png.pngtree.com/background/20230525/original/pngtree-the-world-map-is-rendered-as-a-blue-image-picture-image_2727469.jpg")'}}>
       <h1 style={{ fontWeight: 800,color:"rgb(250, 255, 98)" }}>NEWS</h1>
       <h5 style={{ fontWeight: 900,color:"rgb(250, 255, 98)" }}>One of the leading and latest news</h5>

    </div>
  )
}
//
export default Hero
