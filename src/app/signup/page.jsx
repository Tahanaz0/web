import Image from 'next/image'

function Signup(){
    return(
        <div>
            <div className='flex  h-[500px] '>
                <div className=' flex flex-1 '> 
                {/* <Image src="/signm.png" width={800} height={400} alt="star icon" /> */}
                <Image
  src="/signm.png"
  width={0}
  height={400}
  sizes="100vw"
  style={{ width: '100%',  }} // optional
/>
                     </div>
                <div className='flex justify-center flex-col items-center  flex-1  '>
                   <div> <h1>Create an account </h1>
                    <p>Enter your details below</p> <br />
                    <input type="text" placeholder='Name'  className='border-b-2 w-80' /> <br /> <br />
                    <input type="text" placeholder='Email or phone Number' className=' border-b-2 w-80' /><br /> <br />
                    <input type="text" placeholder='Pasword' className='border-b-2 w-80 ' /></div>
                </div>
              
            </div>

        </div>
    )
}
export default Signup;