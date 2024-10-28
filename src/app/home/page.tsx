
import Image from 'next/image'
import "../style/style.css"

function Homepage() {
  return (
    <div>
      <div className='flex justify-around relative'>
        <div className='w-75   px-16  border-r-2 border-black-500 '>
          <ul className=''>
            <li>{`Woman's Fashion`}</li>
            <li>{`Men's Fashion`}</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>{`Baby's & Toys`}</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul></div>
        <div className=''>
          <Image src='/mainn.png ' width={850} alt="main" height={100} />
    

        </div>
      
        
      </div>

<div className='w-full h-48 relative'>
    <Image src='/iphone.png ' width={400} alt="main" height={400}  className='absolute right-24 object-contain top-[-20%]'/>
</div>

      <div className=' border-b-2 border-black-500'>
 
      <div className='flex justify-between items-center'>
  <div>
    <h1 className='font-bold text-2xl'>Flash Sale</h1>
  </div>

  {/* Countdown Timer */}
  <div className="flex gap-2">
    <div className=" p-2 rounded">
      <span className="font-bold text-xl">02</span>
      <p className="text-sm">Days</p>
    </div>
    <div className=" p-2 rounded">
      <span className="font-bold text-xl">12</span>
      <p className="text-sm">Hours</p>
    </div>
    <div className=" p-2 rounded">
      <span className="font-bold text-xl">30</span>
      <p className="text-sm">Minutes</p>
    </div>
    <div className=" p-2 rounded">
      <span className="font-bold text-xl">45</span>
      <p className="text-sm">Seconds</p>
    </div>
  </div>

  <div className='flex gap-2'>
    <div>
      <Image src='/Arrow.png' width={40} height={50} alt='arrow left' />
    </div>
    <div>
      <Image src='/arrowr.png' width={40} height={50} alt='arrow right' />
    </div>
  </div>
</div>

<div className='flex justify-evenly text-center gap-4'>
  <div>
    <div className="bg-[#F5F5F5] h-72 w-60 py-5 relative flex justify-center items-cente hover:translate-x-2" >
      <Image src="/game.png" width={200} height={200} alt='HAVIT HV-G92 Gamepad'  />
      <Image src="/heart.png" width={24} height={24} className="absolute top-4 right-4" alt="heart icon"  />
      <Image src="/Eye.png" width={24} height={24} className="absolute top-12 right-4" alt="eye icon"  />
      <button className='bg-red-500 text-white py-1 px-3 text-sm absolute top-3 left-3 rounded-md'>JS -40%</button>
    </div>
    
    <p>HAVIT HV-G92 Gamepad</p>
    <p>$120</p>
    <p className="text-light-blue-600"> $160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
    </div>
  </div>

  <div>
    <div className="bg-[#F5F5F5] h-64 w-60 py-5 relative flex justify-center items-center">
      <Image src="/keyboard.png" width={200} height={200} alt='AK-900 Wired Keyboard' />
      <Image src="/heart.png" width={24} height={24} className="absolute top-4 right-4" alt="heart icon" />
      <Image src="/Eye.png" width={24} height={24} className="absolute top-12 right-4" alt="eye icon" />
      <button className='bg-red-500 text-white py-1 px-3 text-sm absolute top-3 left-3 rounded-md'>JS -40%</button>
    </div>
    <button className='bg-black text-white w-60 h-10 rounded-sm'>Add to cart</button>
    <p>AK-900 Wired Keyboard</p>
    <p>$960</p>
    <p className="text-light-blue-600"> $160</p> {/* Change color of this tag */}
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
    </div>
  </div>

  <div>
    <div className="bg-[#F5F5F5] h-72 w-60 py-5 relative flex justify-center items-center">
      <Image src="/tv.png" width={200} height={200} alt='IPS LCD Gaming Monitor' />
      <Image src="/heart.png" width={24} height={24} className="absolute top-4 right-4" alt="heart icon" />
      <Image src="/Eye.png" width={24} height={24} className="absolute top-12 right-4" alt="eye icon" />
      <button className='bg-red-500 text-white py-1 px-3 text-sm absolute top-3 left-3 rounded-md'>JS -40%</button>
    </div>
    <p>IPS LCD Gaming Monitor</p>
    <p>$120</p>
    <p className="text-light-blue-600"> $160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
    </div>
  </div>

  <div>
    <div className="bg-[#F5F5F5] h-72 w-60 py-5 relative flex justify-center items-center">
      <Image src="/chair.png" width={100} height={100} alt='S-Series Comfort Chair' />
      <Image src="/heart.png" width={24} height={24} className="absolute top-4 right-4" alt="heart icon" />
      <Image src="/Eye.png" width={24} height={24} className="absolute top-12 right-4" alt="eye icon" />
      <button className='bg-red-500 text-white py-1 px-3 text-sm absolute top-3 left-3 rounded-md'>JS -40%</button>
    </div>
    <p>S-Series Comfort Chair</p>
    <p>$120</p>
    <p className="text-light-blue-600"> $160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
    </div>
  </div>
</div>




        <div className='text-center m-5'>
          <button className='bg-red-500 text-center  w-52 h-16 text-white rounded-md'>view All product</button></div>
      </div>
      <div>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-2xl'>Browse By Category</div>
          <div className='flex gap-2'>
            <div><Image src='/Arrow.png' width={40} height={50} alt='aero'></Image></div>
            <div> <Image src='/arrowr.png' width={40} height={50} alt='aero'></Image> </div>
          </div>
        </div>
        <div className='flex justify-evenly  border-b-2 border-black-500 p-10 text-center '>
          <div className='border border-black-600 w-40  '> <Image src='/mbl.png' width={100} height={100} alt='3rd' className='m-6'></Image>
            <h1>Phone</h1></div>
          <div className='border border-black-600 w-40'> <Image src='/comp.png' width={100} height={100} alt='3rd' className='m-6'></Image>
            <h1>Computer</h1></div>
          <div className='border border-black-600 w-40'> <Image src='/SmartWatch.png' width={100} height={100} alt='3rd' className='m-6'></Image>
            <h1>Smart Watch</h1></div>
          <div className='bg-red-500 text-white w-40'> <Image src='/Camera.png' width={100} height={100} alt='3rd' className='m-6'></Image>
            <h1>Camera</h1></div>
          <div className='border border-black-600 w-40'> <Image src='/Headphone.png' width={100} height={100} alt='3rd' className='m-6'></Image>
            <h1>Head Phone</h1></div>
          <div className='border border-black-600 w-40'> <Image src='/plus.png' width={100} height={100} alt='3rd' className='m-6'></Image>
            <h1>Game</h1></div>
        </div>
      </div>

      <div>
        <div className='flex justify-between'> <h1 className='font-bold text-2xl m-5'>Best Selling Products</h1>
          <div className='text-center m-5'> <button className='bg-red-500 text-center  w-48 h-16 text-white rounded-md'>view All </button></div>

        </div>
        <div className='flex justify-evenly   '>

          <div ><div className="bg-[#F5F5F5] h-56 w-52 py-5 "> <Image src="/jacket.png" width={200} height={200} alt='chair' ></Image></div>
            <p>HAVIT HV-G92 Gamepad</p>
            <p>$120</p>
            <p>$160</p>
            <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
    </div></div>
          <div ><div className="bg-[#F5F5F5] h-52 w-52 py-5"><Image src="/bag.png" width={200} height={500} alt='chair'></Image></div>
            
            <p>AK-900 Wired Keyboard</p>
            <p>$960</p>
            <p>$160</p>  <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
    </div></div>
          <div ><div className="bg-[#F5F5F5] h-56 w-52 py-10"><Image src="/sound.png" width={200} height={200} alt='chair'></Image></div>
            <p>IPS LCD Gaming Monitor</p>
            <p>$120</p>
            <p>$160</p>
            <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
    </div></div>
          <div> <div className="bg-[#F5F5F5] h-56 w-52 p-7  ">  <Image src="/table.png" width={100} height={100} alt='chair'></Image> </div>
            <p>S-Series Comfort Chair </p>
            <p>$120</p>
            <p>$160</p>
            <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
    </div>
          </div>

        </div>
      </div>
      <div>
        <div className=' border-b-2 border-black-500'>



        <div className='flex flex-wrap justify-evenly'>
  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-56 relative flex justify-center items-center">
      <Image src="/milk.png" width={100} height={100} alt='HAVIT HV-G92 Gamepad' />
      <Image src="/heart.png" width={24} height={24} className="absolute top-2 right-2" alt="heart icon" />
      <Image src="/Eye.png" width={24} height={24} className="absolute top-10 right-2" alt="eye icon" />
    </div>
    <p>HAVIT HV-G92 Gamepad</p>
    <p>$120</p>
    <p>$160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
    </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-52 relative flex justify-center items-center">
      <Image src="/cam.png" width={150} height={150} alt='AK-900 Wired Keyboard' />
      <Image src="/heart.png" width={24} height={24} className="absolute top-2 right-2" alt="heart icon" />
      <Image src="/Eye.png" width={24} height={24} className="absolute top-10 right-2" alt="eye icon" />
    </div>
    <button className='bg-black text-white w-72 h-10 rounded-sm'>Add to cart</button>
    
    <p>AK-900 Wired Keyboard</p>
    <p>$960</p>
    <p>$160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
    </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-56 relative flex justify-center items-center">
      <Image src="/lap.png" width={150} height={150} alt='IPS LCD Gaming Monitor' />
      <Image src="/heart.png" width={24} height={24} className="absolute top-2 right-2" alt="heart icon" />
      <Image src="/Eye.png" width={24} height={24} className="absolute top-10 right-2" alt="eye icon" />
    </div>
    <p>IPS LCD Gaming Monitor</p>
    <p>$120</p>
    <p>$160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
    </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-56 relative flex justify-center items-center">
      <Image src="/lap.png" width={100} height={100} alt='S-Series Comfort Chair' />
      <Image src="/heart.png" width={24} height={24} className="absolute top-2 right-2" alt="heart icon" />
      <Image src="/Eye.png" width={24} height={24} className="absolute top-10 right-2" alt="eye icon" />
    </div>
    <p>S-Series Comfort Chair</p>
    <p>$120</p>
    <p>$160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
    </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-56 relative flex justify-center items-center">
      <Image src="/car.png" width={150} height={150} alt='HAVIT HV-G92 Gamepad' />
      <Image src="/heart.png" width={24} height={24} className="absolute top-2 right-2" alt="heart icon" />
      <Image src="/Eye.png" width={24} height={24} className="absolute top-10 right-2" alt="eye icon" />
      <button className='bg-green-500 text-white py-1 px-3 text-sm absolute top-3 left-3 rounded-md'>JS -40%</button>

    </div>
    <p>HAVIT HV-G92 Gamepad</p>
    <p>$120</p>
    <p>$160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
    </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-52 relative flex justify-center items-center">
      <Image src="/shoes.png" width={150} height={150} alt='AK-900 Wired Keyboard' />
      <Image src="/heart.png" width={24} height={24} className="absolute top-2 right-2" alt="heart icon" />
      <Image src="/Eye.png" width={24} height={24} className="absolute top-10 right-2" alt="eye icon" />
    </div>
    
    <p>AK-900 Wired Keyboard</p>
    <p>$960</p>
    <p>$160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
    </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-56 relative flex justify-center items-center">
      <Image src="/rem.png" width={150} height={150} alt='IPS LCD Gaming Monitor' />
      <Image src="/heart.png" width={24} height={24} className="absolute top-2 right-2" alt="heart icon" />
      <Image src="/Eye.png" width={24} height={24} className="absolute top-10 right-2" alt="eye icon" />
      <button className='bg-green-500 text-white py-1 px-3 text-sm absolute top-3 left-3 rounded-md'>JS -40%</button>

    </div>
    <p>IPS LCD Gaming Monitor</p>
    <p>$120</p>
    <p>$160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
    </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-56 relative flex justify-center items-center">
      <Image src="/jack.png" width={100} height={100} alt='S-Series Comfort Chair' />
      <Image src="/heart.png" width={24} height={24} className="absolute top-2 right-2" alt="heart icon" />
      <Image src="/Eye.png" width={24} height={24} className="absolute top-10 right-2" alt="eye icon" />
    </div>
    <p>S-Series Comfort Chair</p>
    <p>$120</p>
    <p>$160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
    </div>
  </div>
 <div> <button className='bg-red-500 text-center  w-52 h-16 text-white rounded-md'>view All product</button></div>
</div>
 </div>

</div>
   
      
<div> <div className='flex justify-center gap-5 my-5'>
      <div>   <Image src="/frame1.png" width={500} height={400} alt="star icon" /></div>
      <div>  <Image src="/frame.png" width={500} height={400} alt="star icon" /></div>
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



</div>


    </div>







  )
}
export default Homepage