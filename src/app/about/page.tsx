import Image from "next/image"

function About() {
    return (
        <>
  <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mx-auto" style={{ width: '80%' }}>
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

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-5 mt-10'>
          <div className='border border-black-600   hover:bg-red-500 hover:text-white '>
            <Image src='/Services3.png' width={100} height={100} alt='Phone' className="py-5 ml-28" />
          <h1 className="font-bold text-xl sm:text-xl md:text-2xl ml-32">10.5K</h1>
          <h1 className='text-sm  ml-24'>Sallers active our site</h1>
          </div>

          <div className='border border-black-600  hover:bg-red-500 hover:text-white'>
            <Image src='/dollar.png' width={100} height={100} alt='Computer' className="py-5 ml-28"  />
            <h1 className="font-bold text-xl sm:text-xl md:text-2xl ml-36"> 33K</h1>
            <h1 className='text-sm ml-24'>Mopnthly Produduct Sale</h1>
          </div>

          <div className='border border-black-600  hover:bg-red-500 hover:text-white'>
            <Image src='/Services1.png' width={100} height={100} alt='Smart Watch' className="py-5 ml-28"  />
            <h1 className="font-bold text-xl sm:text-xl md:text-2xl ml-28" >45.5K</h1>
            <h1 className='text-sm ml-20'>Customer active in our site</h1>
          </div>

          <div className='border border-black-600  hover:bg-red-500 hover:text-white'>
            <Image src='/Services2.png' width={100} height={100} alt='Camera' className="py-5 ml-28"  />
            <h1 className="font-bold text-xl sm:text-xl md:text-2xl  ml-32">25K</h1>
            <h1 className='text-sm ml-20'>Anual gross sale in our site</h1>
          </div>

        

          
        </div>

 <div className="flex justify-center my-20 gap-10">
    <div> <Image src='/boy.png' width={0} height={0} alt="b" sizes='100vw' style={{ width: '100%' }}></Image></div>
    <div> <Image src='/girls.png' width={0} height={0} alt="b" sizes='100vw' style={{ width: '100%' }}></Image></div>
    <div> <Image src='/men.png' width={0} height={0} alt="b" sizes='100vw' style={{ width: '100%' }}></Image></div>
 </div>

 <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 mt-16'>
          <div className=' text-center m-5'>
            <Image src="/trans.png" width={100} height={100} alt="transport icon"  className='ml-32' />
            <div className='mt-10'>
              <h1 className='text-xl md:text-[1.5vw] font-bold py-4'>FREE AND FAST DELIVERY</h1>
              <h1 className="text-xl md:text-[1.5vw]  ">Free delivery for all orders over $140</h1>
            </div>
          </div>

          <div className=' text-center  m-5'>
            <Image src="/headphones.png" width={100} height={100} alt="headphone icon"  className='ml-32' />
            <div className='mt-10'>
              <h1 className='text-2xl md:text-[1.5vw] font-bold py-4'>24/7 CUSTOMER SERVICE</h1>
              <h1 className="text-2xl md:text-[1.5vw]  "> Friendly 24/7 customer support</h1>
            </div>
          </div>

          <div className=' m-5'>
            <Image src="/tick.png" width={100} height={100} alt="tick icon"  className='ml-32 ' />
            <div className='mt-10'>
              <h1 className='text-xl md:text-[1.5vw] font-bold p-4 ' >MONEY BACK GUARANTEE</h1>
              <p className="text-xl md:text-[1.5vw]  ">We reurn money within 30 days</p></div>
          </div>
        </div>





        </>
    )
}
export default About