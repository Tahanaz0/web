import Image from "next/image"

function About() {
    return (
        <>
    <div className="flex justify-center items-center gap-x-8 mx-auto" style={{ width: '80%' }}>
    <div style={{ width: '48%', textAlign: 'left' }}>
        <h1 className="font-bold text-4xl">Our Story</h1><br />
        <p>Launched in 2015, Exclusive is South {`Asia’s`} premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.</p>
        <p>Exclusive has more than 1 million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer goods and beyond.</p>
    </div>

    <div style={{ width: '45%' }}>
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

<div className="flex justify-center text-center w-[100%] gap-10 mt-28">
  
<Image src='/fram10k.png' alt="" width={0} height={0}   sizes="100vw"
            style={{ width: '15%' }}></Image>
<Image src='/fram33k.png' alt="" width={0} height={0}   sizes="100vw"
            style={{ width: '15%' }}></Image>
<Image src='/fram45k.png' alt="" width={0} height={0}   sizes="100vw"
            style={{ width: '15%' }}></Image>
<Image src='/fram25k.png' alt="" width={0} height={0}   sizes="100vw"
            style={{ width: '15%' }}></Image>
</div>
 <div className="flex justify-center my-20 gap-10">
    <div> <Image src='/boy.png' width={0} height={0} alt="b" sizes='100vw' style={{ width: '100%' }}></Image></div>
    <div> <Image src='/girls.png' width={0} height={0} alt="b" sizes='100vw' style={{ width: '100%' }}></Image></div>
    <div> <Image src='/men.png' width={0} height={0} alt="b" sizes='100vw' style={{ width: '100%' }}></Image></div>
 </div>

 <div className='flex justify-evenly'>
  <div className='  m-9 '><Image src="/trans.png" width={90} height={20} alt="star icon"  className='ml-14'/>
<div className='mt-5'>  <h1  className='font-bold  '>FREE AND FAST DELIVERY</h1>
<h1>Free delivery for all orders over $140</h1></div> </div>

<div className='  m-9 '><Image src="/headphones.png" width={90} height={20} alt="star icon" className='ml-14' />
 <div className='mt-5'> <h1  className='font-bold  text-center '>24/7 CUSTOMER SERVICE</h1>
 <h1>Friendly 24/7 customer support</h1></div></div>

<div className='  m-9 '><Image src="/tick.png" width={90} height={20} alt="star icon" className='ml-14'/>
 <div className='mt-5'> <h1  className='font-bold ' >MONEY BACK GUARANTEE</h1>
 <p>We reurn money within 30 days</p></div>
  </div>
</div>




        </>
    )
}
export default About