import Image from 'next/image'
import Link from 'next/link';

function Signup(){
    return(
        <div>
            <div className='flex flex-col sm:flex-col md:flex-row p-2 py-10 '>
                <div className=' flex flex-1 '> 
                {/* <Image src="/signm.png" width={800} height={400} alt="star icon" /> */}
                <Image
  src="/signm.png"
  width={0}
  height={0}
  alt='sign'
  sizes="100vw"
  style={{ width: '100%',  }} 
/>
                     </div>
                <div className='flex  flex-col  my-20 flex-1  '>
                   <div className='ml-16 sm:ml-16 md:ml-20'>
                     <h1 className='font-bold text-2xl'>Create an account </h1>
                
                    <p>Enter your details below</p> <br />
                    <input type="text" placeholder='Name'  className='border-b-2 w-80 focus:border-gray-300  focus:outline-none' /> <br /> <br />
                    <input type="text" placeholder='Email or phone Number' className=' border-b-2 w-80 focus:border-gray-300  focus:outline-none' /><br /> <br />
                    <input type="text" placeholder='Pasword' className='border-b-2 w-80 focus:border-gray-300  focus:outline-none' />  <br />  <br />
                    <button className='bg-red-500 text-white py-3 px-28 hover:bg-red-600'>Create Account</button>
                    <br /> <br />
                    <button className='border border-solid w-80 h-12'>Create Account</button> <br />
                    <div className='flex'>
                    <p className='pl-20'>Already have account?</p> 
                    <Link href="login" className='pl-3' > Log in</Link>
                    </div> 
                    </div>
                  
                </div>
              
            </div>

        </div>
    )
}
export default Signup;