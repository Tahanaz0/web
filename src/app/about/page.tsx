import Image from "next/image"

function About() {
    return (
        <>
  <div className="flex flex-col lg:flex-row justify-center items-center gap-x-8 mx-auto" style={{ width: '80%' }}>
  <div className="lg:w-1/2 w-full text-left px-4">
  <h1 className="font-bold text-3xl sm:text-4xl md:text-[2vw] lg:text-[2vw]">Our Story</h1><br />
  <p className="text-base sm:text-lg md:text-[1.5vw] lg:text-[1.5vw]">
    Launched in 2015, Exclusive is South {`Asia’s`} premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
  </p>
  <p className="text-base sm:text-lg md:text-[1.5vw] lg:text-[1.5vw]">
    Exclusive has more than 1 million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer goods and beyond.
  </p>
</div>


  <div className="lg:w-1/2 w-full">
    <Image
      src="/Side.png"
      width={0}
      height={400}
      alt="sign"
      sizes="100vw"
      style={{ width: '100%' }}
    />
  </div>
</div>

<div className="flex flex-wrap justify-around text-center mt-28 gap-4">
  <Image 
    src='/fram10k.png' 
    alt="" 
    width={0} 
    height={0} 
    sizes="100vw" 
    className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6"
  />
  <Image 
    src='/fram33k.png' 
    alt="" 
    width={0} 
    height={0} 
    sizes="100vw" 
    className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6"
  />
  <Image 
    src='/fram45k.png' 
    alt="" 
    width={0} 
    height={0} 
    sizes="100vw" 
    className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6"
  />
  <Image 
    src='/fram25k.png' 
    alt="" 
    width={0} 
    height={0} 
    sizes="100vw" 
    className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6"
  />
</div>

 <div className="flex justify-center my-20 gap-10">
    <div> <Image src='/boy.png' width={0} height={0} alt="b" sizes='100vw' style={{ width: '100%' }}></Image></div>
    <div> <Image src='/girls.png' width={0} height={0} alt="b" sizes='100vw' style={{ width: '100%' }}></Image></div>
    <div> <Image src='/men.png' width={0} height={0} alt="b" sizes='100vw' style={{ width: '100%' }}></Image></div>
 </div>

 <div className='flex justify-around ml-1'>
  <div className=' text-center'><Image src="/trans.png" width={0} height={0} alt="transport icon" sizes="100%" className='ml-[25%] w-[40%]'/>
<div className='mt-5 pb-3'>  <h1  className='font-bold  text-[1vw]'>FREE AND FAST DELIVERY</h1>
<h1 className="text-[1vw]">Free delivery for all orders over $140</h1></div> 
</div>

<div className=' text-center'><Image src="/headphones.png" width={0} height={0} alt="headphone icon" sizes="100%" className='ml-[25%] w-[40%]' />
 <div className='mt-5'> <h1  className='font-bold    text-[1vw]'>24/7 CUSTOMER SERVICE</h1>
 <h1 className="text-[1vw]"> Friendly 24/7 customer support</h1></div>
 </div>

<div className='text-center '><Image src="/tick.png" width={0} height={0} alt="tick icon" sizes="100%" className='ml-[25%] w-[40%]'/>
 <div className='mt-5'> <h1  className='font-bold text-[1vw]' >MONEY BACK GUARANTEE</h1>
 <p className="text-[1vw]">We reurn money within 30 days</p></div>
  </div>
</div>




        </>
    )
}
export default About