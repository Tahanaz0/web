import Image from 'next/image'
import Link from 'next/link';

function Signup(){
    return(
        <div>
            <div className='flex  h-[60%] '>
                <div className=' flex  '> 
                {/* <Image src="/signm.png" width={800} height={400} alt="star icon" /> */}
                <Image
  src="/signm.png"
  width={0}
  height={0}
  alt='sign'
  sizes="100vw"
  style={{ width: '90%',  }} 
/>
                     </div>
                <div className='flex  flex-col  mt-20   '>
                   <div className='ml-[20%]'> <h1 className='font-bold text-[1.5vw]'>Create an account </h1>
                
                    <p className='text-[1vw]'>Enter your details below</p> <br />
                    <input type="text" placeholder='Name'  className='border-b-2 w-[100%]' /> <br /> <br />
                    <input type="text" placeholder='Email or phone Number' className=' border-b-2 w-[100%]' /><br /> <br />
                    <input type="text" placeholder='Pasword' className='border-b-2 w-[100%] ' />  <br />  <br />
                    <button className='bg-red-500 text-white w-[60%] h-[12%] text-[1vw]'>Create Account</button>
                    <br /> 
                    <button className='border  border-solid w-[60%] h-[12%] text-[1vw]'>Create Account</button> <br />
                    <div className='flex'>
                    <p className='pl-20 text-[1vw]'>Already have account?</p> 
                    <Link href="login" className='pl-3 text-[1vw]' > Log in</Link>
                    </div> 
                    </div>
                  
                </div>
              
            </div>

        </div>
    )
}
export default Signup;