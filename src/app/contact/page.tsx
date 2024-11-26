import Image from "next/image";
function Contact() {
    return (
        <div>

            <div className="flex justify-center  m-14">

                <div className="flex   sm:flex-col md:flex-row gap-10">

                    <div className=" shadow-lg  rounded-lg">
                        <div className="border-b-2 m-5 p-2">
                            <div className="flex gap-4 m-5">
                                <div>
                                    <Image src='/icons-phone.png' alt='Phone icon' width={0} height={0} sizes="100vw"
                                        style={{ width: '100%' }} />
                                </div>
                                <h1 className="font-bold text-[1.5vw] sm:text-xl">Call To Us</h1>
                              </div>
                               <br />
                                 <p className="text-[1.5vw] sm:text-xl p-2 ">We are available 24/7, 7 days a week</p>
                                <p className="text-[1.5vw] sm:text-xl p-2">Phone: +8801611112222</p>
                         </div>
                         <div>
                            <div className="flex gap-4 m-5">
                                <div>
                                    <Image src='/icons-mail.png' alt='Mail icon' width={0} height={0} sizes="100vw"
                                        style={{ width: '100%' }} />
                                </div>
                                <h1 className="font-bold text-[1.5vw] sm:text-xl">Email Us</h1>
                            </div>
                            <br />
                            <p className="text-[1.5vw]  sm:text-xl m-5 ">Fill out our form and we will contact you within 24 hours.</p>
                            <p className="text-[1.5vw]  sm:text-xl m-5">Email: customer@exclusive.com</p>
                            <p className="text-[1.5vw] sm:text-xl m-5">Email: support@exclusive.com</p>
                        </div>
                    </div>

                    <div className="w-full bg-white p-5 shadow-lg rounded-lg">
                        <div className="flex gap-4 sm:flex-col md:flex-row">
                            <input type="text" placeholder="Your Name" className="bg-[#F5F5F5] p-4 focus:outline-none border-2 focus:border-white rounded-md " />
                            <input type="text" placeholder="Your Email" className="bg-[#F5F5F5] p-4 focus:outline-none border-2 focus:border-white rounded-md " />
                            <input type="text" placeholder="Your Phone number" className="bg-[#F5F5F5] p-4 flex-1 focus:outline-none border-2 focus:border-white rounded-md " />
                        </div>
                        <textarea  placeholder="Your Feed back"  className="bg-[#F5F5F5] py-28 px-5 rounded-md  focus:outline-none border-2 focus:border-white mt-5 w-[100%]" > </textarea>
                        <button className='bg-red-500 text-white p-2 text-xl sm:text-xl md:text-xl ml-80 mt-16 hover:bg-red-600 rounded-md'>Send Message</button>
                    </div>

                </div>
            </div>






        </div>
    )


}
export default Contact;