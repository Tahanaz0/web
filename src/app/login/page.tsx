import Image from "next/image";
import Link from "next/link";
function Login(){
    return(
        <div>   <div className='flex  h-[500px] '>
        <div className=' flex flex-1 '> 
        {/* <Image src="/signm.png" width={800} height={400} alt="star icon" /> */}
        <Image
src="/signm.png"
width={0}
alt=""
height={400}
sizes="100vw"
style={{ width: '100%',  }} 
/>
             </div>
        <div className='flex  flex-col  mt-20 flex-1  '>
           <div className='ml-[20%]'> <h1 className='font-bold text-2xl'>Login to Exclusive </h1>
        
            <p className="p-5">Enter your details below</p> <br />
       
            <input type="text" placeholder='Email or phone Number' className=' border-b-2 w-80' /><br /> <br />
            <input type="text" placeholder='Pasword' className='border-b-2 w-80 ' />  <br />  <br />
            
            
          
            <div className='flex gap-24'>
          <button className='bg-red-500 text-white w-[20%] h-8'>Login</button>
            <Link href="login" className='pl-3 text-red-500' > Forget password?.</Link>
            </div> 
            </div>
          
        </div>
      
    </div></div>
    )
}
export default Login;