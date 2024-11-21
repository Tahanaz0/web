
import Image from 'next/image'
import "../style/style.css"

function Homepage() {
  return (
    <div>

      {/* Menu */}
      <div className="flex flex-col  md:flex-row justify-around relative mt-8">
        {/* Menu */}
        <div className="w-full md:w-[35%] px-[5%] md:border-r-2 border-black-500">
          <ul className="flex flex-col items-start gap-4 md:gap-0">
            <li className="text-[4vw] sm:2xl md:text-[1.5vw] cursor-pointer hover:bg-[#F5F5F5] hover:border-l-4">
              {`Woman's Fashion`}
            </li>
            <li className="text-[4vw] sm:2xl md:text-[1.5vw] cursor-pointer  hover:bg-[#F5F5F5] hover:border-l-4">
              {`Men's Fashion`}
            </li>
            <li className="text-[4vw] sm:2xl md:text-[1.5vw] cursor-pointer hover:bg-[#F5F5F5] hover:border-l-4">
              Electronics
            </li>
            <li className="text-[4vw] sm:2xl md:text-[1.5vw] cursor-pointer hover:bg-[#F5F5F5] hover:border-l-4">
              Home & Lifestyle
            </li>
            <li className="text-[4vw] sm:2xl md:text-[1.5vw] cursor-pointer hover:bg-[#F5F5F5] hover:border-l-4">
              Medicine
            </li>
            <li className="text-[4vw] sm:2xl md:text-[1.5vw] cursor-pointer hover:bg-[#F5F5F5] hover:border-l-4">
              Sports & Outdoor
            </li>
            <li className="text-[4vw] sm:2xl md:text-[1.5vw] cursor-pointer hover:bg-[#F5F5F5] hover:border-l-4">
              {`Baby's & Toys`}
            </li>
            <li className="text-[4vw] sm:2xl md:text-[1.5vw] cursor-pointer hover:bg-[#F5F5F5] hover:border-l-4">
              Groceries & Pets
            </li>
            <li className="text-[4vw] sm:2xl md:text-[1.5vw] cursor-pointer hover:bg-[#F5F5F5] hover:border-l-4">
              Health & Beauty
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="mt-4 md:mt-0 pl-[5%] w-full md:w-auto">
          <Image
            src="/mainn.png"
            width={0}
            height={0}
            alt="main"
            sizes="100vw"
            style={{ width: "100%", maxWidth: "100%" }}
            className="block"
          />
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



      <div className="border-b-2 border-black-500">
        <div className=' flex justify-between items-center p-10'>
          <div>
            <h1 className=' sm:font-bold sm:text-2xl md:font-bold text-[2vw]'>Flash Sale</h1>
          </div>


          <div className="flex gap-2">
            <div className=" p-2 rounded">
              <p className="sm:text-1xl md:text-[1vw]">Days</p>
              <span className="font-bold sm:2xl md:text-[2vw]">03</span>

            </div>
            <div className=" p-2 rounded">
              <p className="sm:text-1xl md:text-[1vw]">Hours</p>
              <span className="font-bold sm:text-1xl md:text-[2vw]">23</span>

            </div>
            <div className=" p-2 rounded">
              <p className=" sm:text-1xl md:text-[1vw]">Minutes</p>
              <span className="font-boldsm:text-1xl md:text-[2vw]">19</span>

            </div>
            <div className=" p-2 rounded">
              <p className="sm:text-1xl md:text-[1vw]">Seconds</p>
              <span className="font-bold sm:text-1xl md:text-[2vw]">56</span>

            </div>
          </div>

          <div className=' sm:flex-wrap flex gap-2'>
            <div>
              <Image src='/Arrow.png' width={0} height={0} alt='arrow left'
                sizes="100vw"
                style={{ width: '100%' }} />
            </div>
            <div>
              <Image src='/arrowr.png' width={0} height={0} alt='arrow right'
                sizes="100vw"
                style={{ width: '100%' }} />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-auto justify-center  gap-4 sm:gap-2 sm:text-sm'>
          {/* Product 1 */}
          <div className="flex flex-col sm:w-[80%]  sm:items-center">
            <div className="bg-[#F5F5F5] sm:h-[30vw] md:h-[70%] w-full py-5  relative flex justify-center hover:translate-x-2">
              <Image src="/game.png" width={0} height={0} alt="HAVIT HV-G92 Gamepad" sizes="100vw" className='w-40' />
              <Image src="/heart.png" width={0} height={0} className="absolute top-4 right-1" alt="heart icon" sizes="100vw" style={{ width: '8%' }} />
              <Image src="/Eye.png" width={0} height={0} className="absolute top-9 right-1" alt="eye icon" sizes="100vw" style={{ width: '8%' }} />
              <button className="bg-red-500 text-white absolute sm:text-[2vw] md:text-[1vw] sm:h-[12%] sm:w-[15vw] md:h-[10%] md:w-[7vw] top-3 left-3 rounded-md">
                JS -40%
              </button>

            </div>
            <p className="text-[1.5vw] py-4 sm:text-base">HAVIT HV-G92 Gamepad</p>
            <div className="flex gap-3">
              <p className="text-[1.5vw] sm:text-base text-red-600">$120</p>
              <p className="text-light-blue-600 text-[1.5vw] sm:text-base">$160</p>
            </div>
            <div className="flex space-x-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/star.png"
                  width={0}
                  height={0}
                  alt="star icon"
                  sizes="100vw"
                  style={{ width: '20px' }} // Default width for all screens
                  className="sm:w-[16px] md:w-[20px] lg:w-[24px]" // Responsive width
                />
              ))}
            </div>

          </div>

          {/* Product 2 */}
          <div className="flex flex-col sm:w-[80%]  sm:items-center">
            <div className="bg-[#F5F5F5] sm:h-[25vw] md:h-[60%] w-full py-5 relative flex justify-center items-center hover:translate-x-2">
              <Image src="/keyboard.png" width={0} height={0} alt="AK-900 Wired Keyboard" sizes="100vw" className='w-44' />
              <div className="flex flex-col justify-between">
                <Image src="/heart.png" width={0} height={0} className="absolute top-4 right-1" alt="heart icon" sizes="100vw" style={{ width: '8%' }} />
                <Image src="/Eye.png" width={0} height={0} className="absolute top-9 right-1" alt="eye icon" sizes="100vw" style={{ width: '8%' }} />
              </div>
              <button className="bg-red-500 text-white absolute sm:text-[2vw] md:text-[1vw] sm:h-[12%] sm:w-[15vw] md:h-[10%] md:w-[7vw] top-3 left-3 rounded-md">
                JS -40%
              </button>

            </div>
            <button className="bg-black text-white h-[10%] w-full text-[1vw] sm:text-sm rounded-sm">Add to cart</button>
            <p className="text-[1.5vw] py-4 sm:text-base">AK-900 Wired Keyboard</p>
            <div className="flex gap-3">
              <p className="text-[1.5vw] sm:text-base text-red-600">$960</p>
              <p className="text-light-blue-600 text-[1.5vw] sm:text-base">$160</p>
            </div>
            <div className="flex space-x-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/star.png"
                  width={0}
                  height={0}
                  alt="star icon"
                  sizes="100vw"
                  style={{ width: '20px' }} // Default width for all screens
                  className="sm:w-[16px] md:w-[20px] lg:w-[24px]" // Responsive width
                />
              ))}
            </div>

          </div>

          {/* Product 3 */}
          <div className="flex flex-col sm:w-[80%]  sm:items-center">
            <div className="bg-[#F5F5F5] sm:h-[30vw] md:h-[70%] w-full py-5 relative flex justify-center items-center hover:translate-x-2">
              <Image src="/tv.png" width={0} height={0} alt="IPS LCD Gaming Monitor" sizes="100vw" className='w-44 p-5' />
              <Image src="/heart.png" width={0} height={0} className="absolute top-4 right-1" alt="heart icon" sizes="100vw" style={{ width: '8%' }} />
              <Image src="/Eye.png" width={0} height={0} className="absolute top-9 right-1" alt="eye icon" sizes="100vw" style={{ width: '8%' }} />
              <button className="bg-red-500 text-white absolute sm:text-[2vw] md:text-[1vw] sm:h-[12%] sm:w-[15vw] md:h-[10%] md:w-[7vw] top-3 left-3 rounded-md">
                JS -40%
              </button>

            </div>
            <p className="text-[1.5vw] sm:text-base py-4">IPS LCD Gaming Monitor</p>
            <div className="flex gap-3">
              <p className="text-[1.5vw] sm:text-base text-red-600">$120</p>
              <p className="text-light-blue-600 text-[1.5vw] sm:text-base">$160</p>
            </div>
            <div className="flex space-x-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/star.png"
                  width={0}
                  height={0}
                  alt="star icon"
                  sizes="100vw"
                  style={{ width: '20px' }} // Default width for all screens
                  className="sm:w-[16px] md:w-[20px] lg:w-[24px]" // Responsive width
                />
              ))}
            </div>

          </div>

          {/* Product 4 */}
          <div className="flex flex-col sm:w-[80%]  sm:items-center">
            <div className="bg-[#F5F5F5] sm:h-[30vw] md:h-[70%] w-full py-5 relative flex justify-center items-center hover:translate-x-2">
              <Image src="/chair.png" width={0} height={0} alt="S-Series Comfort Chair" sizes="100vw" className='w-40 p-5' />
              <Image src="/heart.png" width={0} height={0} className="absolute top-4 right-1" alt="heart icon" sizes="100vw" style={{ width: '8%' }} />
              <Image src="/Eye.png" width={0} height={0} className="absolute top-9 right-1" alt="eye icon" sizes="100vw" style={{ width: '8%' }} />
              <button className="bg-red-500 text-white absolute sm:text-[2vw] md:text-[1vw] sm:h-[12%] sm:w-[15vw] md:h-[10%] md:w-[7vw] top-3 left-3 rounded-md">
                JS -40%
              </button>

            </div>
            <p className="text-[1.5vw] sm:text-base py-4">S-Series Comfort Chair</p>
            <div className="flex gap-3">
              <p className="text-[1.5vw] sm:text-base text-red-600">$120</p>
              <p className="text-light-blue-600 text-[1.5vw] sm:text-base">$160</p>
            </div>
            <div className="flex space-x-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/star.png"
                  width={0}
                  height={0}
                  alt="star icon"
                  sizes="100vw"
                  style={{ width: '20px' }} // Default width for all screens
                  className="sm:w-[16px] md:w-[20px] lg:w-[24px]" // Responsive width
                />
              ))}
            </div>

          </div>
        </div>

        {/* View All Products Button */}
        <div className="text-center my-16">
          <button className="bg-red-500 text-[1vw] h-[3vw] w-[14vw] text-white rounded-md hover:bg-red-600">View All Products</button>
        </div>
      </div>

      <div>
        <div className='flex justify-between items-center p-7'>
          <div className='font-bold text-2xl sm:font-bold md:font-bold md:text-xl'>Browse By Category</div>
          <div className='flex gap-2'>
            <Image src='/Arrow.png' width={40} height={40} alt='Arrow' />
            <Image src='/arrowr.png' width={40} height={40} alt='Arrow' />
          </div>
        </div>

        <div className='flex flex-wrap justify-evenly p-10 gap-5'>
          <div className='border border-black-600 w-full sm:w-[45%] md:w-[15%] flex flex-col items-center hover:bg-red-500 hover:text-white'>
            <Image src='/mbl.png' width={100} height={100} alt='Phone' />
            <h1 className='text-sm mt-2'>Phone</h1>
          </div>

          <div className='border border-black-600 w-full sm:w-[45%] md:w-[15%] flex flex-col items-center hover:bg-red-500 hover:text-white'>
            <Image src='/comp.png' width={100} height={100} alt='Computer' />
            <h1 className='text-sm mt-2'>Computer</h1>
          </div>

          <div className='border border-black-600 w-full sm:w-[45%] md:w-[15%] flex flex-col items-center hover:bg-red-500 hover:text-white'>
            <Image src='/SmartWatch.png' width={100} height={100} alt='Smart Watch' />
            <h1 className='text-sm mt-2'>Smart Watch</h1>
          </div>

          <div className='border border-black-600 w-full sm:w-[45%] md:w-[15%] flex flex-col items-center hover:bg-red-500 hover:text-white'>
            <Image src='/caam.webp' width={100} height={100} alt='Camera' />
            <h1 className='text-sm mt-2'>Camera</h1>
          </div>

          <div className='border border-black-600 w-full sm:w-[45%] md:w-[15%] flex flex-col items-center hover:bg-red-500 hover:text-white'>
            <Image src='/Headphone.png' width={100} height={100} alt='Head Phone' />
            <h1 className='text-sm mt-2'>Head Phone</h1>
          </div>

          <div className='border border-black-600 w-full sm:w-[45%] md:w-[15%] flex flex-col items-center hover:bg-red-500 hover:text-white'>
            <Image src='/plus.png' width={100} height={100} alt='Game' />
            <h1 className='text-sm mt-2'>Game</h1>
          </div>
        </div>
      </div>


      <div>
        <div className='flex justify-between p-10'>
          <h1 className='font-bold text-2xl sm:font-bold md:font-bold md:text-xl'>Best Selling Products</h1>
          <div className='text-center m-5'>
            <button className='bg-red-500 text-center text-[1vw] h-[2.5vw] w-[9vw] text-white rounded-md hover:bg-red-600'>
              View All
            </button>
          </div>
        </div>

        {/* Flex container with responsive layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  mx-auto justify-center gap-5 mb-5'>

          {/* Product 1 */}
          <div className='flex flex-col items-center'>
            <div className="bg-[#F5F5F5] w-[20vw] h-[65%] pt-7 pl-8 hover:translate-x-2">
              <Image src="/jacket.png" width={0} height={0} alt='jacket' sizes="100vw" style={{ width: '68%' }} />
            </div>
            <p className='sm:2xl md:text-[1.5vw] py-4'>HAVIT HV-G92 Gamepad</p>
            <div className='flex gap-3'>
              <p className='sm:2xl md:text-[1.5vw] text-red-600'>$120</p>
              <p className='sm:2xl md:text-[1.5vw]'>$160</p>
            </div>
            <div className="flex space-x-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/star.png"
                  width={0}
                  height={0}
                  alt="star icon"
                  sizes="100vw"
                  style={{ width: '20px' }} // Default width for all screens
                  className="sm:w-[16px] md:w-[20px] lg:w-[24px]" // Responsive width
                />
              ))}
            </div>

          </div>

          {/* Product 2 */}
          <div className='flex flex-col items-center'>
            <div className="bg-[#F5F5F5] w-[20vw] h-[65%] pt-7 pl-8 hover:translate-x-2">
              <Image src="/bag.png" width={0} height={0} alt='keyboard' sizes="100vw" style={{ width: '68%' }} />
            </div>
            <p className='sm:2xl md:text-[1.5vw] py-4'>AK-900 Wired Keyboard</p>
            <div className='flex gap-3'>
              <p className='sm:2xl md:text-[1.5vw] text-red-600'>$960</p>
              <p className='sm:2xl md:text-[1.5vw]'>$160</p>
            </div>
            <div className="flex space-x-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/star.png"
                  width={0}
                  height={0}
                  alt="star icon"
                  sizes="100vw"
                  style={{ width: '20px' }} // Default width for all screens
                  className="sm:w-[16px] md:w-[20px] lg:w-[24px]" // Responsive width
                />
              ))}
            </div>

          </div>

          {/* Product 3 */}
          <div className='flex flex-col items-center'>
            <div className="bg-[#F5F5F5] w-[20vw] h-[65%] pt-14 pl-12 hover:translate-x-2">
              <Image src="/sound.png" width={0} height={0} alt='monitor' sizes="100vw" style={{ width: '68%' }} />
            </div>
            <p className='sm:2xl md:text-[1.5vw] py-4'>IPS LCD Gaming Monitor</p>
            <div className='flex gap-3'>
              <p className='sm:2xl md:text-[1.5vw] text-red-600'>$120</p>
              <p className='sm:2xl md:text-[1.5vw]'>$160</p>
            </div>
            <div className="flex space-x-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/star.png"
                  width={0}
                  height={0}
                  alt="star icon"
                  sizes="100vw"
                  style={{ width: '20px' }} // Default width for all screens
                  className="sm:w-[16px] md:w-[20px] lg:w-[24px]" // Responsive width
                />
              ))}
            </div>

          </div>

          {/* Product 4 */}
          <div className='flex flex-col items-center'>
            <div className="bg-[#F5F5F5] w-[20vw] h-[65%] pt-7 pl-8 hover:translate-x-2">
              <Image src="/table.png" width={0} height={0} alt='chair' sizes="100vw" style={{ width: '68%' }} />
            </div>
            <p className='sm:2xl md:text-[1.5vw] py-4'>S-Series Comfort Chair</p>
            <div className='flex gap-3'>
              <p className='sm:2xl md:text-[1.5vw] text-red-600'>$120</p>
              <p className='sm:2xl md:text-[1.5vw]'>$160</p>
            </div>
            <div className="flex space-x-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/star.png"
                  width={0}
                  height={0}
                  alt="star icon"
                  sizes="100vw"
                  style={{ width: '20px' }} // Default width for all screens
                  className="sm:w-[16px] md:w-[20px] lg:w-[24px]" // Responsive width
                />
              ))}
            </div>

          </div>

        </div>
      </div>

      <div>


        <div className='flex sm:flex-col sm:m-10   md:flex-row justify-between  bg-black w-[90%] md:m-16 p-16 '>
          <div className='p-10'>
          <div>
  <p className="text-green-500 text-[3vw] font-bold mb-10">Categories</p>
</div>
<h1 className="text-white font-bold text-[3vw] md:text-[2vw]">Enhance Yours</h1>
<h1 className="text-white font-bold text-[3vw] md:text-[2vw]">Music Experience</h1>
<div className="flex gap-2 py-5">
  <div className="p-2 rounded-full px-4 bg-white">
    <p className="text-[2vw] sm:text-1xl md:text-[1vw]">Days</p> {/* Font size changes for screen size */}
    <span className="font-bold text-[3vw] p-2 md:text-[1.5vw]">02</span>
  </div>


              <div className=" p-2 rounded-full px-4 bg-white   ">
                <p className="text-[2vw] sm:text-1xl md:text-[1vw]">Hours</p>
                <span className="font-bold text-[3vw] p-2 sm:2xl md:text-[1.5vw]">12</span>

              </div>
              <div className=" p-2 rounded-full px-3 bg-white ">
                <p className="text-[2vw] sm:text-1xl md:text-[1vw]">Minutes</p>
                <span className="font-bold text-[3vw] p-3 sm:2xl md:text-[1.5vw]">30</span>

              </div>
              <div className=" p-2 rounded-full  bg-white  ">
                <p className="text-[2vw] sm:text-1xl md:text-[1vw]">Seconds</p>
                <span className="font-bold text-[3vw] p-3 md:text-[1.5vw]">45</span>
              </div>
            </div>
            <button className='bg-green-500 text-white text-[2vw] sm:w-20 md:text-[1vw] h-[15%] w-[7vw]  rounded-sm hover:bg-green-400'>Buy Now</button>
          </div>
          <div className='p-5  rounded-full'>
            <Image
              src='/speaker.png'
              alt='speaker'
              width={0}
              height={0}
              sizes='100'
              className='w-[100%] shadow-2xl  shadow-gray-400 rounded-full  m-5 '
            />
          </div> 


        </div>


        <div className=''>


          <div className=' flex justify-between items-center p-11'>
            <div>
              <h1 className='font-bold text-2xl sm:font-bold md:font-bold md:text-xl'>Explore Our Product</h1>
            </div>
            <div className=' sm:flex-wrap flex gap-2'>
              <div>
                <Image src='/Arrow.png' width={0} height={0} alt='arrow left'
                  sizes="100vw"
                  style={{ width: '100%' }} />
              </div>
              <div>
                <Image src='/arrowr.png' width={0} height={0} alt='arrow right'
                  sizes="100vw"
                  style={{ width: '100%' }} />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto justify-center '>
            <div className=" p-2 ml-2">
              <div className="bg-[#F5F5F5]  relative flex justify-center items-center p-10 hover:translate-x-2">
                <Image src="/milk.png" width={0} height={0} alt='HAVIT HV-G92 Gamepad' sizes="100vw"
                  style={{ width: '70%' }} />
                <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
                  style={{ width: '8%' }} />
                <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon" sizes="100vw"
                  style={{ width: '8%' }} />
              </div>
              <p className='text-2xl md:text-[1.5vw] font-bold py-4'>Bread Dry Dog Food</p>
              <div className='flex gap-4 '><p className='text-2xl md:text-[1.5vw] text-red-600'>$120</p>
                <div className="flex p-3">
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '100%' }} />
                  ))}
                </div>
              </div>

            </div>

            <div className=" p-2 ml-2">
              <div className="bg-[#F5F5F5]  relative flex justify-center items-center p-10 hover:translate-x-2">
                <Image src="/cam.png" width={0} height={0} alt='AK-900 Wired Keyboard' sizes="100vw"
                  style={{ width: '80%' }} />
                <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
                  style={{ width: '8%' }} />
                <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon" sizes="100vw"
                  style={{ width: '8%' }} />
              </div>
              <button className='bg-black text-white w-[100%] h-[10%] rounded-sm text-[1vw]'>Add to cart</button>

              <p className='text-2xl md:text-[1.5vw] font-bold py-4'>CANOS EOS DSLR Camera</p>
              <div className='flex gap-4 '>
                <p className='text-2xl md:text-[1.5vw] text-red-600'>$960</p>
                <div className="flex p-3">
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '100%' }} />
                  ))}
                </div>
              </div>
            </div>

            <div className=" p-2 ml-2">
              <div className="bg-[#F5F5F5]  relative flex justify-center items-center p-10 hover:translate-x-2">
                <Image src="/lap.png" width={0} height={0} alt='IPS LCD Gaming Monitor' sizes="100vw"
                  style={{ width: '100%' }} />
                <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
                  style={{ width: '8%' }} />
                <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon" sizes="100vw"
                  style={{ width: '8%' }} />
              </div>
              <p className='text-2xl md:text-[1.5vw] font-bold py-4'>ASUS FHD Gaming Laptop</p>
              <div className='flex gap-4 '>
                <p className='text-2xl md:text-[1.5vw] text-red-600'>$120</p>
                <div className="flex p-3">
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '100%' }} />
                  ))}
                </div> </div>
            </div>

            <div className=" p-2 ml-2">
              <div className="bg-[#F5F5F5]  relative flex justify-center items-center p-10  hover:translate-x-2">
                <Image src="/bb.png" width={0} height={0} alt='S-Series Comfort Chair' sizes="100vw" className='mt-5'
                  style={{ width: '100%' }} />
                <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
                  style={{ width: '8%' }} />
                <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon" sizes="100vw"
                  style={{ width: '8%' }} />
              </div>
              <p className='text-2xl md:text-[1.5vw] font-bold py-4'>Curology Product Sell</p>
              <div className='flex gap-4 '>
                <p className='text-2xl md:text-[1.5vw] text-red-600'>$120</p>
                <div className="flex p-3">
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '100%' }} />
                  ))}
                </div> </div>
            </div>

            <div className=" p-2 ml-2">
              <div className="bg-[#F5F5F5]  relative flex justify-center items-center p-10 hover:translate-x-2">
                <Image src="/car.png" width={0} height={0} alt='HAVIT HV-G92 Gamepad' sizes="100vw" className='mt-14'
                  style={{ width: '100%' }} />
                <Image src="/heart.png" width={0} height={20} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
                  style={{ width: '8%' }} />
                <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon" sizes="100vw"
                  style={{ width: '8%' }} />
                <button className='bg-green-500 text-white py-1 px-3 sm:text-1xl md:text-[1vw]  absolute top-3 left-3 rounded-md'>JS -40%</button>

              </div>
              <p className='text-2xl md:text-[1.5vw] font-bold py-4'>Kids Electric Car</p>
              <div className='flex gap-4 '>
                <p className='text-2xl md:text-[1.5vw] text-red-500'>$120</p>
                <div className="flex p-3">
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '100%' }} />
                  ))}
                </div>
              </div>
            </div>

            <div className=" p-2 ml-2">
              <div className="bg-[#F5F5F5]  relative flex justify-center items-center p-10 hover:translate-x-2">
                <Image src="/shoes.png" width={0} height={0} alt='AK-900 Wired Keyboard' sizes="100vw" className='mt-5'
                  style={{ width: '100%' }} />
                <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
                  style={{ width: '8%' }} />
                <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon" sizes="100vw"
                  style={{ width: '8%' }} />
              </div>

              <p className='text-2xl md:text-[1.5vw] font-bold py-4'>Jr.Zoom Soccer Cleats</p>
              <div className='flex gap-4 '>
                <p className='text-2xl md:text-[1.5vw] text-red-600'>$960</p>
                <div className="flex p-3">
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '100%' }} />
                  ))}
                </div>
              </div>
            </div>

            <div className="p-2 ml-2 ">
              <div className="bg-[#F5F5F5]  relative flex justify-center items-center p-14 hover:translate-x-2">
                <Image src="/rem.png" width={0} height={0} alt='IPS LCD Gaming Monitor' sizes="100vw" className='mt-5'
                  style={{ width: '100%' }} />
                <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon" sizes="100vw"
                  style={{ width: '8%' }} />
                <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon" sizes="100vw"
                  style={{ width: '8%' }} />
                <button className='bg-green-500 text-white py-1 px-3 sm:text-1xl md:text-[1vw] absolute top-3 left-3 rounded-md'>JS -40%</button>

              </div>
              <p className='text-2xl md:text-[1.5vw] font-bold py-4 '>GP11 Shooter USB Gamepade</p>
              <div className='flex gap-4 '>
                <p className='text-2xl md:text-[1.5vw] text-red-600'>$120</p>
                <div className="flex p-3">
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '100%' }} />
                  ))}
                </div>
              </div>
            </div>

            <div className=" p-4 ml-2">
              <div className="bg-[#F5F5F5] relative flex justify-center items-center p-10 hover:translate-x-2">
                <Image src="/jack.png" width={0} height={0} alt='S-Series Comfort Chair'
                  sizes="100vw"
                  style={{ width: '100%' }} />
                <Image src="/heart.png" width={0} height={0} className="absolute top-2 right-2" alt="heart icon"
                  sizes="100vw"
                  style={{ width: '8%' }} />
                <Image src="/Eye.png" width={0} height={0} className="absolute top-10 right-2" alt="eye icon"
                  sizes="100vw"
                  style={{ width: '8%' }} />
              </div>
              <p className='text-2xl md:text-[1.5vw] font-bold py-4'>Quilted Satin Jacket</p>
              <div className='flex gap-4 '>
                <p className='text-2xl md:text-[1.5vw] text-red-600'>$120</p>
                <div className="flex p-3">
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src="/star.png" width={0} height={0} alt="star icon" sizes="100vw" style={{ width: '100%' }} />
                  ))}
                </div>
              </div>
            </div>
           
        </div> 
        <div className='m-12  text-center'>
            <button className='bg-red-500  sm:text-2xl  md:text-[1.5vw] p-3  text-white rounded-md hover:bg-red-600'>view All product</button></div>
        </div>

      </div>


      <div className='p-8'>
        <h1 className='font-bold text-[3vw]'>New Arrival</h1>

        <div className='flex justify-center gap-3 mt-5'>
          <div>
            <Image src="/frame1.png" width={0} height={0} alt="star icon" sizes="100%" style={{ width: '100vw' }} />
          </div>
          <div>
            <Image src="/frame.png" width={0} height={0} alt="star icon" sizes="100%" style={{ width: '100vw' }} />
          </div>
        </div>



        <div className='flex justify-around m-10 p-11'>
          <div className=' text-center'>
            <Image src="/trans.png" width={0} height={0} alt="transport icon" sizes="100%" className='ml-[25%] w-[40%]' />
            <div className='mt-5 pb-3'>
              <h1 className='font-bold  text-[1vw]'>FREE AND FAST DELIVERY</h1>
              <h1 className="text-[1vw]">Free delivery for all orders over $140</h1>
            </div>
          </div>

          <div className=' text-center'>
            <Image src="/headphones.png" width={0} height={0} alt="headphone icon" sizes="100%" className='ml-[25%] w-[40%]' />
            <div className='mt-5 pb-3'>
              <h1 className='font-bold    text-[1vw]'>24/7 CUSTOMER SERVICE</h1>
              <h1 className="text-[1vw]"> Friendly 24/7 customer support</h1>
            </div>
          </div>

          <div className='text-center '>
            <Image src="/tick.png" width={0} height={0} alt="tick icon" sizes="100%" className='ml-[25%] w-[40%]' />
            <div className='mt-5 pb-3'>
              <h1 className='font-bold text-[1vw]' >MONEY BACK GUARANTEE</h1>
              <p className="text-[1vw]">We reurn money within 30 days</p></div>
          </div>
        </div>

      </div>


    </div>







  )
}
export default Homepage