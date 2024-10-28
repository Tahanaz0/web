
import Image from 'next/image'
import "../style/style.css"

function Homepage() {
  return (
    <div>
      <div className='flex justify-around relative'>
        <div className='w-75   px-16  border-r-2 border-black-500 '>
          <ul className='text-[1.5vw]'>
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
        <div className=' pl-10'>
          <Image src='/mainn.png ' width={0} alt="main" height={0}     sizes="100vw"
     style={{ width: '100%' }} />
    

        </div>
      
        
      </div>

<div className='w-full h-48 relative'>
    <Image src='/iphone.png ' width={0} alt="main" height={0}  className='absolute right-24 object-contain top-[-20%]'
        sizes="100vw"
     style={{ width: '30%' }}/>
</div>

      <div className=' border-b-2 border-black-500'>
 
      <div className=' flex justify-between items-center'>
  <div>
    <h1 className='font-bold text-[1.5vw]'>Flash Sale</h1>
  </div>

  {/* Countdown Timer */}
  <div className="flex gap-2">
    <div className=" p-2 rounded">
      <span className="font-bold text-[1.5vw]">02</span>
      <p className="text-[1vw]">Days</p>
    </div>
    <div className=" p-2 rounded">
      <span className="font-bold text-[1.5vw]">12</span>
      <p className="text-[1vw]">Hours</p>
    </div>
    <div className=" p-2 rounded">
      <span className="font-bold text-[1.5vw]">30</span>
      <p className="text-[1vw]">Minutes</p>
    </div>
    <div className=" p-2 rounded">
      <span className="font-bold text-[1.5vw]">45</span>
      <p className="text-[1vw]">Seconds</p>
    </div>
  </div>

  <div className=' sm:flex-wrap flex gap-2'>
    <div>
      <Image src='/Arrow.png' width={0} height={0} alt='arrow left'  
        sizes="100vw"
        style={{ width: '65%' }}/>
    </div>
    <div>
      <Image src='/arrowr.png' width={0} height={0} alt='arrow right'
     sizes="100vw"
     style={{ width: '65%' }} />
    </div>
  </div>
</div>

<div className='flex justify-evenly text-center gap-4'>
  <div>
    <div className="bg-[#F5F5F5] h-[70%] w-[20vw] py-5 relative flex justify-center items-cente hover:translate-x-2" >
      <Image src="/game.png" width={0} height={0} alt='HAVIT HV-G92 Gamepad' 
       sizes="100vw"
     style={{ width: '75%' }} />
      <Image src="/heart.png" width={0} height={0} className="absolute top-4 right-4" alt="heart icon" 
       sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/Eye.png" width={0} height={0} className="absolute top-12 right-4" alt="eye icon" 
       sizes="100vw"
     style={{ width: '8%' }} />
      <button className='bg-red-500 text-white py-1 px-3  absolute text-[1vw] h-[10%] w-[8vw] top-3 left-3 rounded-md'>JS -40%</button>
    </div>
    
    <p className='text-[1.5vw]'> HAVIT HV-G92 Gamepad</p>
    <p className='text-[1.5vw]'>$120</p>
    <p className="text-light-blue-600 text-[1.5vw]"> $160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
    </div>
  </div>

  <div>
    <div className="bg-[#F5F5F5]  h-[60%] w-[20vw] py-5 relative flex justify-center items-center">
      <Image src="/keyboard.png" width={0} height={0} alt='AK-900 Wired Keyboard'  sizes="100vw"
     style={{ width: '65%' }} />
      <Image src="/heart.png" width={0} height={0} className="absolute top-4 right-4" alt="heart icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/Eye.png" width={0} height={0} className="absolute top-12 right-4" alt="eye icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <button className='bg-red-500 text-white py-1 px-3 text-[1vw] h-[10%] w-[8vw] absolute top-3 left-3 rounded-md'>JS -40%</button>
    </div>
    <button className='bg-black text-white  h-[10%] w-[20vw] text-[1vw] rounded-sm'>Add to cart</button>
    <p className='text-[1.5vw]'> AK-900 Wired Keyboard</p>
    <p className='text-[1.5vw]'>$960</p>
    <p className="text-light-blue-600 text-[1.5vw]"> $160</p> 
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
    </div>
  </div>

  <div>
    <div className="bg-[#F5F5F5]  h-[70%] w-[20vw] py-5 relative flex justify-center items-center">
      <Image src="/tv.png" width={0} height={0} alt='IPS LCD Gaming Monitor'   sizes="100vw"
     style={{ width: '65%' }} />
      <Image src="/heart.png" width={0} height={0} className="absolute top-4 right-4" alt="heart icon"  sizes="100vw"
     style={{ width: '8%' }}  />
      <Image src="/Eye.png" width={0} height={0} className="absolute top-12 right-4" alt="eye icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <button className='bg-red-500 text-white py-1 px-3 text-[1vw] h-[10%] w-[8vw] absolute top-3 left-3 rounded-md'>JS -40%</button>
    </div>
    <p className='text-[1.5vw]'>IPS LCD Gaming Monitor</p>
    <p className='text-[1.5vw]'>$120</p>
    <p className="text-light-blue-600 text-[1.5vw]"> $160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
    </div>
  </div>

  <div>
    <div className="bg-[#F5F5F5]  h-[70%] w-[20vw] py-5 relative flex justify-center items-center">
      <Image src="/chair.png" width={0} height={0} alt='S-Series Comfort Chair'  sizes="100vw"
     style={{ width: '65%' }}  />
      <Image src="/heart.png" width={0} height={0} className="absolute top-4 right-4" alt="heart icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/Eye.png" width={0} height={0} className="absolute top-12 right-4" alt="eye icon"  sizes="100vw"
     style={{ width: '8%' }}  />
      <button className='bg-red-500 text-white py-1 px-3 text-[1vw] h-[10%] w-[8vw] absolute top-3 left-3 rounded-md'>JS -40%</button>
    </div>
    <p className='text-[1.5vw]'>S-Series Comfort Chair</p>
    <p className='text-[1.5vw]'>$120</p>
    <p className="text-light-blue-600 text-[1.5vw]"> $160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"   sizes="100vw"
     style={{ width: '8%' }} />
    </div>
  </div>
</div>




        <div className='text-center m-5'>
          <button className='bg-red-500 text-center  text-[1.5vw] h-[5vw] w-[23vw] text-white rounded-md'>view All product</button></div>
      </div>
      <div>
        <div className='flex justify-between text-[1.5vw] items-center'>
          <div className='font-bold text-[1.5vw]'>Browse By Category</div>
          <div className='flex gap-2'>
            <div><Image src='/Arrow.png' width={0} height={0} alt='aero'  sizes="100vw"
     style={{ width: '5%' }} ></Image></div>
            <div> <Image src='/arrowr.png' width={40} height={50} alt='aero'  sizes="100vw"
     style={{ width: '5%' }} ></Image> </div>
          </div>
        </div>
        <div className='flex justify-evenly  border-b-2 border-black-500 p-10 text-center '>
          <div className='border border-black-600 w-40  '> <Image src='/mbl.png' width={0} height={0} alt='3rd' className='m-6'  sizes="100vw"
     style={{ width: '65%' }} ></Image>
            <h1 className='text-[1.5vw]'>Phone</h1></div>
          <div className='border border-black-600 w-40'> <Image src='/comp.png' width={0} height={0} alt='3rd' className='m-6'  sizes="100vw"
     style={{ width: '65%' }} ></Image>
            <h1 className='text-[1.5vw]'>Computer</h1></div>
          <div className='border border-black-600 w-40'> <Image src='/SmartWatch.png' width={0} height={0} alt='3rd' className='m-6'  sizes="100vw"
     style={{ width: '65%' }} ></Image>
            <h1 className='text-[1.5vw]'>Smart Watch</h1></div>
          <div className='bg-red-500 text-white w-40'> <Image src='/Camera.png' width={0} height={0} alt='3rd' className='m-6'  sizes="100vw"
     style={{ width: '65%' }} ></Image>
            <h1 className='text-[1.5vw]'>Camera</h1></div>
          <div className='border border-black-600 w-40'> <Image src='/Headphone.png' width={0} height={0} alt='3rd' className='m-6'  sizes="100vw"
     style={{ width: '65%' }} ></Image>
            <h1 className='text-[1.5vw]'>Head Phone</h1></div>
          <div className='border border-black-600 w-40'> <Image src='/plus.png' width={0} height={0} alt='3rd' className='m-6'  sizes="100vw"
     style={{ width: '65%' }} ></Image>
            <h1 className='text-[1.5vw]'>Game</h1></div>
        </div>
      </div>

      <div>
        <div className='flex justify-between'> <h1 className='font-bold text-[1.5vw] m-5'>Best Selling Products</h1>
          <div className='text-center m-5'> <button className='bg-red-500 text-center  text-[1vw] h-[10%] w-[10vw] text-white rounded-md'>view All </button></div>

        </div>
        <div className='flex gap-10 pl-5    '>

          <div ><div className="bg-[#F5F5F5] w-[20vw] h-[65%] pt-7 pl-8 "> <Image src="/jacket.png" width={0} height={0} alt='chair'  sizes="100vw"
     style={{ width: '68%' }}  ></Image></div>
            <p className='text-[1.5vw]'>HAVIT HV-G92 Gamepad</p>
            <p className='text-[1.5vw]'>$120</p>
            <p className='text-[1.5vw]'>$160</p>
            <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
    </div></div>
          <div ><div className="bg-[#F5F5F5] w-[20vw] h-[65%] pt-7 pl-8 "><Image src="/bag.png" width={0} height={0} alt='chair'sizes="100vw"
     style={{ width: '68%' }}></Image></div>
            
            <p className='text-[1.5vw]'>AK-900 Wired Keyboard</p>
            <p className='text-[1.5vw]'>$960</p>
            <p className='text-[1.5vw]'>$160</p>  <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
    </div></div>
          <div ><div className="bg-[#F5F5F5] w-[20vw] h-[65%] pt-14 pl-12"><Image src="/sound.png" width={0} height={0} alt='chair' sizes="100vw"
     style={{ width: '68%' }}></Image></div>
            <p className='text-[1.5vw]'>IPS LCD Gaming Monitor</p>
            <p className='text-[1.5vw]'>$120</p>
            <p className='text-[1.5vw]'>$160</p>
            <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }} 
     />
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }} />
    </div></div>
          <div> <div className="bg-[#F5F5F5] w-[20vw] h-[65%] pt-7 pl-8  ">  <Image src="/table.png" width={0} height={0} alt='chair' sizes="100vw"
     style={{ width: '68%' }}></Image> </div>
            <p className='text-[1.5vw]'>S-Series Comfort Chair </p>
            <p className='text-[1.5vw]'>$120</p>
            <p className='text-[1.5vw]'>$160</p>
            <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
    </div>
          </div>

        </div>
      </div>
      <div>
        <div className=' border-b-2 border-black-500'>



        <div className='flex flex-wrap justify-evenly'>
  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-56 relative flex justify-center items-center">
      <Image src="/milk.png" width={0} height={0} alt='HAVIT HV-G92 Gamepad'  sizes="100vw"
     style={{ width: '55%' }}/>
      <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
     style={{ width: '8%' }} />
      <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon" sizes="100vw"
     style={{ width: '8%' }} />
    </div>
    <p className='text-[1.5vw]'>HAVIT HV-G92 Gamepad</p>
    <p className='text-[1.5vw]'>$120</p>
    <p className='text-[1.5vw]'>$160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon"  sizes="100vw"
     style={{ width: '8%' }}/>
    </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-52 relative flex justify-center items-center">
      <Image src="/cam.png" width={0} height={0} alt='AK-900 Wired Keyboard'   sizes="100vw"
     style={{ width: '65%' }}/>
      <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon"   sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon"  sizes="100vw"
     style={{ width: '8%' }} />
    </div>
    <button className='bg-black text-white w-[100%] h-[10%] rounded-sm'>Add to cart</button>
    
    <p className='text-[1.5vw]'>AK-900 Wired Keyboard</p>
    <p className='text-[1.5vw]'>$960</p>
    <p className='text-[1.5vw]'>$160</p>
    <div className="flex  space-x-1 mt-2"> 
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
    </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-56 relative flex justify-center items-center">
      <Image src="/lap.png" width={0} height={0} alt='IPS LCD Gaming Monitor' sizes="100vw"
     style={{ width: '68%' }}/>
      <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon" sizes="100vw"
     style={{ width: '8%' }}/>
    </div>
    <p className='text-[1.5vw]'>IPS LCD Gaming Monitor</p>
    <p className='text-[1.5vw]'>$120</p>
    <p className='text-[1.5vw]'>$160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
    </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-56 relative flex justify-center items-center">
      <Image src="/lap.png" width={0} height={0} alt='S-Series Comfort Chair' sizes="100vw"
     style={{ width: '68%' }}/>
      <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon" sizes="100vw"
     style={{ width: '8%' }}/>
    </div>
    <p className='text-[1.5vw]'>S-Series Comfort Chair</p>
    <p className='text-[1.5vw]'>$120</p>
    <p className='text-[1.5vw]'>$160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
    </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-56 relative flex justify-center items-center">
      <Image src="/car.png" width={0} height={0} alt='HAVIT HV-G92 Gamepad' sizes="100vw"
     style={{ width: '68%' }}/>
      <Image src="/heart.png" width={0} height={20} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <button className='bg-green-500 text-white py-1 px-3 text-[1vw] h-[10%] w-[8vw] absolute top-3 left-3 rounded-md'>JS -40%</button>

    </div>
    <p className='text-[1.5vw]'>HAVIT HV-G92 Gamepad</p>
    <p className='text-[1.5vw]'>$120</p>
    <p className='text-[1.5vw]'>$160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/star.png" width={0} height={0} alt="star icon" sizes="100vw"
     style={{ width: '8%' }}/>
    </div>
  </div>

  <div className="w-1/4 p-4">
    <div className="bg-[#F5F5F5] h-52 relative flex justify-center items-center">
      <Image src="/shoes.png" width={0} height={0} alt='AK-900 Wired Keyboard' sizes="100vw"
     style={{ width: '68%' }}/>
      <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
     style={{ width: '8%' }}/>
      <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon" sizes="100vw"
     style={{ width: '8%' }}/>
    </div>
    
    <p className='text-[1.5vw]'>AK-900 Wired Keyboard</p>
    <p className='text-[1.5vw]'>$960</p>
    <p className='text-[1.5vw]'>$160</p>
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
      <button className='bg-green-500 text-white py-1 px-3 text-[1vw] h-[10%] w-[8vw] absolute top-3 left-3 rounded-md'>JS -40%</button>

    </div>
    <p className='text-[1.5vw]'>IPS LCD Gaming Monitor</p>
    <p className='text-[1.5vw]'>$120</p>
    <p className='text-[1.5vw]'>$160</p>
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
    <p className='text-[1.5vw]'>S-Series Comfort Chair</p>
    <p className='text-[1.5vw]'>$120</p>
    <p className='text-[1.5vw]'>$160</p>
    <div className="flex  space-x-1 mt-2">
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
      <Image src="/star.png" width={20} height={20} alt="star icon" />
    </div>
  </div>
 <div> <button className='bg-red-500 text-center text-[1.5vw] h-[5vw] w-[18vw] text-white rounded-md'>view All product</button></div>
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
 <div className='mt-5'> <h1  className='font-bold  text-centertext-[1.5vw] '>24/7 CUSTOMER SERVICE</h1>
 <h1 className='text-[1.5vw]'>Friendly 24/7 customer support</h1></div></div>

<div className='  m-9 '><Image src="/tick.png" width={90} height={20} alt="star icon" className='ml-14'/>
 <div className='mt-5'> <h1  className='font-bold text-[1.5vw] ' >MONEY BACK GUARANTEE</h1>
 <p className='text-[1.5vw]'>We reurn money within 30 days</p></div>
  </div>
</div>



</div>


    </div>







  )
}
export default Homepage