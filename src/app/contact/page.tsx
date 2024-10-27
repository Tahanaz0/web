import Image from "next/image";
function Contact(){
  return(
    <div>

<div className="flex flex-col items-center justify-center gap-10 mx-auto w-full max-w-5xl mb-20">

    <div className="flex gap-10">

        <div className="w-[40%] shadow-lg p-4 rounded-lg"> {/* Using Tailwind's shadow-lg */}
            <div className="border-b-2 pb-4 mb-4">
                <div className="flex gap-4"> 
                    <div>
                        <Image src='/icons-phone.png' alt='Phone icon' width={0} height={0} sizes="100vw" 
                        style={{width:'100%'}} />
                    </div> 
                    <h1 className="font-bold">Call To Us</h1> 
                </div>
                <p className="mt-2">We are available 24/7, 7 days a week</p>
                <p className="mt-2">Phone: +8801611112222</p>
            </div>
            <div>
                <div className="flex gap-4"> 
                    <div>
                        <Image src='/icons-mail.png' alt='Mail icon' width={0} height={0} sizes="100vw" 
                        style={{width:'100%'}} />
                    </div> 
                    <h1 className="font-bold">Email Us</h1> 
                </div>
                <p className="mt-2">Fill out our form and we will contact you within 24 hours.</p>
                <p className="mt-2">Email: customer@exclusive.com</p>
                <p className="mt-2">Email: support@exclusive.com</p>
            </div>
        </div>

        <div className="w-full bg-white p-4 shadow-lg rounded-lg"> {/* Using Tailwind's shadow-lg */}
            <div className="flex gap-x-2">
                <input type="text" placeholder="Your Name" className="bg-[#F5F5F5] p-2 focus:outline-none border-2 focus:border-white rounded-md" />
                <input type="text" placeholder="Your Email" className="bg-[#F5F5F5] p-2 focus:outline-none border-2 focus:border-white rounded-md" />
                <input type="text" placeholder="Your Phone number" className="bg-[#F5F5F5] p-2 flex-1 focus:outline-none border-2 focus:border-white rounded-md" />
            </div>
            <input type="text" placeholder="Your Feedback" className="bg-[#F5F5F5] p-2 rounded-md w-full h-44 focus:outline-none border-2 focus:border-white mt-2" />
 <button className='bg-red-500 text-white py-1 px-3 text-sm  ml-[80%] mt-14 rounded-md'>Send Message</button>
 </div>
   
    </div>
</div>




       

    </div>
  )


}
export default Contact;