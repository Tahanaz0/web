
import Image from 'next/image'
import "../style/style.css"

function Homepage() {
  return (
    <div>
      <div className='flex justify-around relative mt-8'>
      <div className='w-[35%] px-[5%] border-r-2 border-black-500'>
  <ul>
    <li className='text-[1.5vw] mb-3'>{`Woman's Fashion`}</li>
    <li className='text-[1.5vw] mb-3'>{`Men's Fashion`}</li>
    <li className='text-[1.5vw] mb-3'>Electronics</li>
    <li className='text-[1.5vw] mb-3'>Home & Lifestyle</li>
    <li className='text-[1.5vw] mb-3'>Medicine</li>
    <li className='text-[1.5vw] mb-3'>Sports & Outdoor</li>
    <li className='text-[1.5vw] mb-3'>{`Baby's & Toys`}</li>
    <li className='text-[1.5vw] mb-3'>Groceries & Pets</li>
    <li className='text-[1.5vw]'>Health & Beauty</li>
  </ul>
</div>

        <div className=' pl-[5%]'>
          <Image src='/mainn.png' width={0} alt="main" height={0}     sizes="100vw"
     style={{ width: '100vw' }} />
    

        </div>
      
        
      </div>

      {/* <div className='w-full h-48 relative'>
    <Image 
        src='/iphone.png' 
        width={0} 
        height={0}  
        alt="main" 
        className='absolute right-24 object-contain top-[-20%] hidden sm:block'
        sizes="100vw"
        style={{ width: '30%' }} 
    />
</div> */}


      <div className=' border-b-2 border-black-500'>
 
      <div className=' flex justify-between items-center p-10'>
  <div>
    <h1 className='font-bold text-[2vw]'>Flash Sale</h1>
  </div>

  
  <div className="flex gap-2">
    <div className=" p-2 rounded"> 
      <p className="text-[1vw]">Days</p>
      <span className="font-bold text-[2vw]">03</span>
     
    </div>
    <div className=" p-2 rounded">
      <p className="text-[1vw]">Hours</p>
      <span className="font-bold text-[2vw]">23</span>
      
    </div>
    <div className=" p-2 rounded"> 
      <p className="text-[1vw]">Minutes</p>
      <span className="font-bold text-[2vw]">19</span>
     
    </div>
    <div className=" p-2 rounded">
      <p className="text-[1vw]">Seconds</p>
      <span className="font-bold text-[2vw]">56</span>
      
    </div>
  </div>

  <div className=' sm:flex-wrap flex gap-2'>
    <div>
      <Image src='/Arrow.png' width={0} height={0} alt='arrow left'  
        sizes="100vw"
        style={{ width: '100%' }}/>
    </div>
    <div>
      <Image src='/arrowr.png' width={0} height={0} alt='arrow right'
     sizes="100vw"
     style={{ width: '100%' }} />
    </div>
  </div>
</div>

<div className='flex flex-row sm:flex-col md:flex-row justify-evenly  gap-4 sm:gap-2 sm:text-sm'>
  <div className="flex flex-col  sm:w-[40vw] md:w-[20vw]">
    <div className="bg-[#F5F5F5] sm:h-[30vw] md:h-[70%] w-full py-5 relative flex justify-center  hover:translate-x-2">
      <Image src="/game.png" width={0} height={0} alt='HAVIT HV-G92 Gamepad' sizes="100vw" style={{ width: '80%' }} />
      <Image src="/heart.png" width={0} height={0} className="absolute top-4 right-1" alt="heart icon" sizes="100vw" style={{ width: '8%' }} />
      <Image src="/Eye.png" width={0} height={0} className="absolute top-9 right-1" alt="eye icon" sizes="100vw" style={{ width: '8%' }} />
      <button className='bg-red-500 text-white   absolute text-[1vw] h-[10%] w-[7vw] top-3 left-3 rounded-md'>JS -40%</button>
    </div>
    <p className='text-[1.5vw] py-4 sm:text-base '> HAVIT HV-G92 Gamepad</p>
    <div className='flex gap-3 '><p className='text-[1.5vw] sm:text-base text-red-600'>$120</p>
    <p className="text-light-blue-600 text-[1.5vw] sm:text-base"> $160</p></div>
    <div className="flex space-x-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '8%' }} />
      ))}
    </div>
  </div>

  <div className="flex flex-col  sm:w-[40vw] md:w-[20vw]">
    <div className="bg-[#F5F5F5] sm:h-[25vw] md:h-[60%] w-full py-5 relative flex justify-center items-center hover:translate-x-2">
      <Image src="/keyboard.png" width={0} height={0} alt='AK-900 Wired Keyboard' sizes="100vw" style={{ width: '75%' }} />
      <div className='flex flex-col justify-between'><Image src="/heart.png" width={0} height={0} className="absolute top-4 right-1" alt="heart icon" sizes="100vw" style={{ width: '8%' }} />
      <Image src="/Eye.png" width={0} height={0} className="absolute top-9 right-1" alt="eye icon" sizes="100vw" style={{ width: '8%' }} /></div>
      <button className='bg-red-500 text-white   absolute text-[1vw] h-[10%] w-[7vw] top-3 left-3 rounded-md'>JS -40%</button>
    </div>
    <button className='bg-black text-white h-[10%] w-full text-[1vw] sm:text-sm rounded-sm '>Add to cart</button>
    <p className='text-[1.5vw] py-4 sm:text-base'> AK-900 Wired Keyboard</p>
    <div className='flex gap-3 '><p className='text-[1.5vw] sm:text-base text-red-600'>$960</p>
    <p className="text-light-blue-600 text-[1.5vw] sm:text-base"> $160</p></div>
    <div className="flex space-x-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '8%' }} />
      ))}
    </div>
  </div>

  <div className="flex flex-col  sm:w-[40vw] md:w-[20vw]">
    <div className="bg-[#F5F5F5] sm:h-[30vw] md:h-[70%] w-full py-5 relative flex justify-center items-center hover:translate-x-2">
      <Image src="/tv.png" width={0} height={0} alt='IPS LCD Gaming Monitor' sizes="100vw" style={{ width: '65%' }} />
      <Image src="/heart.png" width={0} height={0} className="absolute top-4 right-1" alt="heart icon" sizes="100vw" style={{ width: '8%' }} />
      <Image src="/Eye.png" width={0} height={0} className="absolute top-9 right-1" alt="eye icon" sizes="100vw" style={{ width: '8%' }} />
      <button className='bg-red-500 text-white  absolute text-[1vw] h-[10%] w-[7vw] top-3 left-3 rounded-md'>JS -40%</button>
    </div>
    <p className='text-[1.5vw] sm:text-base py-4'>IPS LCD Gaming Monitor</p>
    <div className='flex gap-3 '><p className='text-[1.5vw] sm:text-base text-red-600'>$120</p>
    <p className="text-light-blue-600 text-[1.5vw] sm:text-base "> $160</p></div>
    <div className="flex space-x-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '8%' }} />
      ))}
    </div>
  </div>

  <div className="flex flex-col  sm:w-[40vw] md:w-[20vw]">
    <div className="bg-[#F5F5F5] sm:h-[30vw] md:h-[70%] w-full py-5 relative flex justify-center items-center hover:translate-x-2">
      <Image src="/chair.png" width={0} height={0} alt='S-Series Comfort Chair' sizes="100vw" style={{ width: '45%' }} />
      <Image src="/heart.png" width={0} height={0} className="absolute top-4 right-1" alt="heart icon" sizes="100vw" style={{ width: '8%' }} />
      <Image src="/Eye.png" width={0} height={0} className="absolute top-9 right-1" alt="eye icon" sizes="100vw" style={{ width: '8%' }} />
      <button className='bg-red-500 text-white  absolute text-[1vw] h-[10%] w-[7vw] top-3 left-3 rounded-md'>JS -40%</button>
    </div>
    <p className='text-[1.5vw] sm:text-base py-4'>S-Series Comfort Chair</p>
    <div className='flex gap-3 '><p className='text-[1.5vw] sm:text-base text-red-600'>$120</p>
    <p className="text-light-blue-600 text-[1.5vw] sm:text-base"> $160</p>
    </div>
    <div className="flex space-x-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '8%' }} />
      ))}
    </div>
  </div>
</div>
 <div className='text-center  my-16'>
          <button className='bg-red-500   text-[1vw] h-[3vw] w-[14vw] text-white rounded-md  hover:bg-red-600'>view All product</button></div>
      </div>
      <div>
        <div className='flex justify-between text-[1.5vw] items-center p-7'>
          <div className='font-bold text-[2vw] mt-5'>Browse By Category</div>
          <div className='flex gap-2'>
            <div><Image src='/Arrow.png' width={0} height={0} alt='aero'  sizes="100vw"
     style={{ width: '100%' }} ></Image></div>
            <div> <Image src='/arrowr.png' width={40} height={50} alt='aero'  sizes="100vw"
     style={{ width: '100%' }} ></Image> </div>
          </div>
        </div>
        <div className='flex justify-evenly border-b-2 border-black-500 p-10 text-center gap-3 '>
  <div className='border border-black-600  w-[15%] hover:bg-red-500 hover:text-white'>
    <Image src='/mbl.png' width={0} height={0} alt='Phone' className='pl-5 sm:m-5' sizes="100vw" style={{ width: '60%' }} />
    <h1 className=' text-[1vw] '>Phone</h1>
  </div>

  <div className='border border-black-600 w-[15%] hover:bg-red-500 hover:text-white '>
    <Image src='/comp.png' width={0} height={0} alt='Computer' className='pl-5 sm:m-5' sizes="100vw" style={{ width: '60%' }} />
    <h1 className=' text-[1vw]'>Computer</h1>
  </div>

  <div className='border border-black-600 w-[15%] hover:bg-red-500 hover:text-white'>
    <Image src='/SmartWatch.png' width={0} height={0} alt='Smart Watch' className='pl-5 sm:m-5' sizes="100vw" style={{ width: '60%' }} />
    <h1 className=' text-[1vw]'>Smart Watch</h1>
  </div>

  <div className=' border border-black-600 w-[15%] hover:bg-red-500 hover:text-white'>
    <Image src='/caam.webp' width={0} height={0} alt='Camera' className='pl-5 sm:m-5' sizes="100vw" style={{ width: '60%' }} />
    <h1 className=' text-[1vw]'>Camera</h1>
  </div>

  <div className='border border-black-600 w-[15%] hover:bg-red-500 hover:text-white'>
    <Image src='/Headphone.png' width={0} height={0} alt='Head Phone' className='pl-5 sm:m-5' sizes="100vw" style={{ width: '60%' }} />
    <h1 className=' text-[1vw]'>Head Phone</h1>
  </div>

  <div className='border border-black-600 w-[15%] hover:bg-red-500 hover:text-white'>
    <Image src='/plus.png' width={0} height={0} alt='Game' className='pl-5 sm:m-5' sizes="100vw" style={{ width: '60%' }} />
    <h1 className=' text-[1vw]'>Game</h1>
  </div>
</div>

      </div>

      <div>
        <div className='flex justify-between p-10'> 
          <h1 className='font-bold text-[2vw] m-5'>Best Selling Products</h1>
          <div className='text-center m-5'> <button className='bg-red-500 text-center  text-[1vw] h-[2.5vw] w-[9vw] text-white rounded-md hover:bg-red-600'>view All </button></div>

        </div>
        <div className='flex justify-center gap-5  mb-5   '>

          <div ><div className="bg-[#F5F5F5] w-[20vw] h-[65%] pt-7 pl-8 hover:translate-x-2 "> <Image src="/jacket.png" width={0} height={0} alt='chair'  sizes="100vw"
     style={{ width: '68%' }}  ></Image></div>
            <p className='text-[1.5vw] py-4'>HAVIT HV-G92 Gamepad</p>
            <div className='flex gap-3 '><p className='text-[1.5vw] text-red-600'>$120</p>
            <p className='text-[1.5vw] '>$160</p></div>
            <div className="flex space-x-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '8%' }} />
      ))}
    </div>
    </div>
          <div ><div className="bg-[#F5F5F5] w-[20vw] h-[65%] pt-7 pl-8 hover:translate-x-2 "><Image src="/bag.png" width={0} height={0} alt='chair'sizes="100vw"
     style={{ width: '68%' }}></Image></div>
            
            <p className='text-[1.5vw] py-4'>AK-900 Wired Keyboard</p>
            <div className='flex gap-3 '> <p className='text-[1.5vw] text-red-600'>$960</p>
            <p className='text-[1.5vw]'>$160</p>  </div>
            <div className="flex space-x-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '8%' }} />
      ))}
    </div>
    </div>
          <div ><div className="bg-[#F5F5F5] w-[20vw] h-[65%] pt-14 pl-12 hover:translate-x-2"><Image src="/sound.png" width={0} height={0} alt='chair' sizes="100vw"
     style={{ width: '68%' }}></Image></div>
            <p className='text-[1.5vw] py-4'>IPS LCD Gaming Monitor</p>
            <div className='flex gap-3 '> <p className='text-[1.5vw] text-red-600'>$120</p>
            <p className='text-[1.5vw]'>$160</p> </div>
            <div className="flex space-x-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '8%' }} />
      ))}
    </div>
    </div>
          <div> <div className="bg-[#F5F5F5] w-[20vw] h-[65%] pt-7 pl-8  hover:translate-x-2 ">  <Image src="/table.png" width={0} height={0} alt='chair' sizes="100vw"
     style={{ width: '68%' }}></Image> </div>
            <p className='text-[1.5vw] py-4'>S-Series Comfort Chair </p>
            <div className='flex gap-3 '><p className='text-[1.5vw] text-red-600'>$120</p>
            <p className='text-[1.5vw]'>$160</p></div>
            <div className="flex space-x-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '8%' }} />
      ))}
    </div>
          </div>

        </div>
      </div>
      <div>


<div className='flex justify-between  bg-black w-[90%] m-20 py-16 px-14'>
  <div className='p-10'>
    <div><p className='text-green-500 font-bold mb-10'>Categories</p></div>
    <h1 className='text-white font-bold text-[2vw]'>Enhance Yours</h1>
    <h1 className='text-white font-bold text-[2vw]'>Music Experience</h1>
    <div className="flex gap-2 py-5">
    <div className=" p-2 rounded-full px-4 bg-white "> 
      <p className="text-[1vw]">Days</p>
      <span className="font-bold text-[1.5vw]">02</span>
     
    </div>
    <div className=" p-2 rounded-full px-4 bg-white   ">
      <p className="text-[1vw]">Hours</p>
      <span className="font-bold text-[1.5vw]">12</span>
      
    </div>
    <div className=" p-2 rounded-full px-3 bg-white "> 
      <p className="text-[1vw]">Minutes</p>
      <span className="font-bold text-[1.5vw]">30</span>
     
    </div>
    <div className=" p-2 rounded-full  bg-white ">
      <p className="text-[1vw]">Seconds</p>
      <span className="font-bold text-[1.5vw]">45</span>
   </div> 
  </div>
  <button className='bg-green-500 text-white  text-[1vw] h-[15%] w-[7vw]  rounded-sm'>Buy Now</button>
  </div>
  <div className='p-10'>
  <Image 
    src='/speaker.png' 
    alt='speaker' 
    width={0} 
    height={0} 
    sizes='100' 
    className='w-[100%] shadow-xl shadow-gray-500 rounded-full p-5'
  />
</div>


</div>


        <div className=''>


  <div className=' flex justify-between items-center p-11'>
  <div>
    <h1 className='font-bold text-[2vw]'>Explore Our Product</h1>
  </div>
  <div className=' sm:flex-wrap flex gap-2'>
    <div>
      <Image src='/Arrow.png' width={0} height={0} alt='arrow left'  
        sizes="100vw"
        style={{ width: '100%' }}/>
    </div>
    <div>
      <Image src='/arrowr.png' width={0} height={0} alt='arrow right'
     sizes="100vw"
     style={{ width: '100%' }} />
    </div>
  </div>
</div>

        <div className='flex flex-wrap justify-evenly p-6 pt-10'>
  <div className="w-1/4 p-5">
    <div className="bg-[#F5F5F5] h-[20vw] relative flex justify-center items-center hover:translate-x-2">
      <Image src="/milk.png" width={0} height={0} alt='HAVIT HV-G92 Gamepad'  sizes="100vw"
     style={{ width: '55%' }}/>
      <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon" sizes="100vw"
     style={{ width: '8%' }} />
    </div>
    <p className='text-[1vw] font-bold py-4'>Bread Dry Dog Food</p>
    <div className='flex gap-4 '><p className='text-[1vw] text-red-600'>$120</p>
    <div className="flex space-x-1 w-[100%]">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '8%' }} />
      ))}
    </div>
    </div>
    
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-[17vw] relative flex justify-center items-center hover:translate-x-2">
      <Image src="/cam.png" width={0} height={0} alt='AK-900 Wired Keyboard'   sizes="100vw"
     style={{ width: '65%' }}/>
      <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon"   sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon"  sizes="100vw"
     style={{ width: '8%' }} />
    </div>
    <button className='bg-black text-white w-[100%] h-[10%] rounded-sm text-[1vw]'>Add to cart</button>
    
    <p className='text-[1vw] font-bold py-4'>CANOS EOS DSLR Camera</p>
    <div className='flex gap-4 '><p className='text-[1vw] text-red-600'>$960</p>
    <div className="flex space-x-1 w-[100%]">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '8%' }} />
      ))}
    </div>
    </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-[20vw] relative flex justify-center items-center hover:translate-x-2">
      <Image src="/lap.png" width={0} height={0} alt='IPS LCD Gaming Monitor' sizes="100vw"
     style={{ width: '68%' }}/>
      <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon" sizes="100vw"
     style={{ width: '8%' }}/>
    </div>
    <p className='text-[1vw] font-bold py-4'>ASUS FHD Gaming Laptop</p>
    <div className='flex gap-4 '><p className='text-[1vw] text-red-600'>$120</p>
    <div className="flex space-x-1 w-[100%]">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '8%' }} />
      ))}
    </div> </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-[20vw] relative flex justify-center items-center hover:translate-x-2">
      <Image src="/bb.png" width={0} height={0} alt='S-Series Comfort Chair' sizes="100vw"
     style={{ width: '68%' }}/>
      <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon" sizes="100vw"
     style={{ width: '8%' }}/>
    </div>
    <p className='text-[1vw] font-bold py-4'>Curology Product Sell</p>
    <div className='flex gap-4 '><p className='text-[1vw] text-red-600'>$120</p>
    <div className="flex space-x-1 w-[100%]">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '8%' }} />
      ))}
    </div> </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-[20vw] relative flex justify-center items-center hover:translate-x-2">
      <Image src="/car.png" width={0} height={0} alt='HAVIT HV-G92 Gamepad' sizes="100vw"
     style={{ width: '68%' }}/>
      <Image src="/heart.png" width={0} height={20} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <button className='bg-green-500 text-white py-1 px-3 text-[1vw] h-[10%] w-[8vw] absolute top-3 left-3 rounded-md'>JS -40%</button>

    </div>
    <p className='text-[1vw] font-bold py-4'>Kids Electric Car</p>
    <div className='flex gap-4 '><p className='text-[1vw] text-red-500'>$120</p>
    <div className="flex space-x-1 w-[100%]">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '8%' }} />
      ))}
    </div>
    </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-[20vw] relative flex justify-center items-center hover:translate-x-2">
      <Image src="/shoes.png" width={0} height={0} alt='AK-900 Wired Keyboard' sizes="100vw"
     style={{ width: '68%' }}/>
      <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon" sizes="100vw"
     style={{ width: '8%' }}/>
    </div>
    
    <p className='text-[1vw] font-bold py-4'>Jr.Zoom Soccer Cleats</p>
    <div className='flex gap-4 '><p className='text-[1vw] text-red-600'>$960</p>
    <div className="flex space-x-1 w-[100%]">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '8%' }} />
      ))}
    </div>
    </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-[20vw] relative flex justify-center items-center hover:translate-x-2">
      <Image src="/rem.png" width={0} height={0} alt='IPS LCD Gaming Monitor'sizes="100vw"
     style={{ width: '68%' }} />
      <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon"sizes="100vw"
     style={{ width: '8%' }} />
      <button className='bg-green-500 text-white py-1 px-3 text-[1vw] h-[10%] w-[8vw] absolute top-3 left-3 rounded-md'>JS -40%</button>

    </div>
    <p className='text-[1vw] font-bold py-4'>GP11 Shooter USB Gamepade</p>
    <div className='flex gap-4 '><p className='text-[1vw] text-red-600'>$120</p>
    <div className="flex space-x-1 w-[100%]">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '8%' }} />
      ))}
    </div>
    </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-[20vw] relative flex justify-center items-center hover:translate-x-2">
      <Image src="/jack.png" width={0} height={0} alt='S-Series Comfort Chair'
      sizes="100vw"
     style={{ width: '68%' }} />
      <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon"
      sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon"
      sizes="100vw"
     style={{ width: '8%' }} />
    </div>
    <p className='text-[1vw] font-bold py-4'>Quilted Satin Jacket</p>
    <div className='flex gap-4 '><p className='text-[1vw] text-red-600'>$120</p>
    <div className="flex space-x-1 w-[100%]">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '8%' }} />
      ))}
    </div>
    </div>
  </div>
 <div className='m-12'> <button className='bg-red-500 text-center text-[1.5vw] p-4 w-[15vw] text-white rounded-md hover:bg-red-600'>view All product</button></div>
</div>
 </div>

</div>
   
      
<div className='p-8'> 
<h1 className='font-bold text-[3vw]'>New Arrival</h1>
  
  <div className='flex justify-center gap-3 mt-5'>
      <div>   <Image src="/frame1.png" width={0} height={0} alt="star icon"  sizes="100%" style={{ width: '100vw' }}/></div>
      <div>  <Image src="/frame.png" width={0} height={0} alt="star icon"     sizes="100%" style={{ width: '100vw' }} /></div>
     </div>



     <div className='flex justify-around m-10 p-11'>
  <div className=' text-center'><Image src="/trans.png" width={0} height={0} alt="transport icon" sizes="100%" className='ml-[25%] w-[40%]'/>
<div className='mt-5 pb-3'>  <h1  className='font-bold  text-[1vw]'>FREE AND FAST DELIVERY</h1>
<h1 className="text-[1vw]">Free delivery for all orders over $140</h1></div> 
</div>

<div className=' text-center'><Image src="/headphones.png" width={0} height={0} alt="headphone icon" sizes="100%" className='ml-[25%] w-[40%]' />
 <div className='mt-5 pb-3'> <h1  className='font-bold    text-[1vw]'>24/7 CUSTOMER SERVICE</h1>
 <h1 className="text-[1vw]"> Friendly 24/7 customer support</h1></div>
 </div>

<div className='text-center '><Image src="/tick.png" width={0} height={0} alt="tick icon" sizes="100%" className='ml-[25%] w-[40%]'/>
 <div className='mt-5 pb-3'> <h1  className='font-bold text-[1vw]' >MONEY BACK GUARANTEE</h1>
 <p className="text-[1vw]">We reurn money within 30 days</p></div>
  </div>
</div>

</div>


    </div>







  )
}
export default Homepage