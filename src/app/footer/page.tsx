import Image from "next/image"



function Footer (){
    return(
      <div>
       
        <div className='footer  bg-[#000000]  text-white  '>
      <div className="flex justify-center   gap-10">
      <ul className="p-7">
        <p className="font-bold  text-[1vw]">Exclusive</p>
        
        <li className="pt-2 text-[1vw]">Subscribe</li>
        <li className=" pt-2 pb-3 text-[1vw]">Get 10% off your first order</li>
        <div className="flex  border border-white gap-6 p-2 pt-2"><button className=" text-[1vw]">Enter your email
            </button><Image src='/aerrow.png' alt="aerow" width={0}height={0} sizes="100vw" className="w-[15%]"></Image></div>
        </ul>
     




      <ul className=" w-60 p-7">
        <p className=" font-bold  pt-2 text-[1vw]">Support</p>
        <li className=" text-[1vw] pt-2">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
        
        <li className="text-[1vw] pt-2">exclusive@gmail.com</li>
        <li className="text-[1vw] pt-2">+88015-88888-9999</li>
        
      </ul>
      <ul className="p-7">
        <p className=" font-bold  text-[1vw]">Account</p>
        <li className="text-[1vw] pt-2">My Account</li>
        <li className="text-[1vw] pt-2">Login / Register</li>
        <li className="text-[1vw] pt-2">Cart</li>
        <li className="text-[1vw] pt-2">
         Whishlist
        </li>
        <li className="text-[1vw] pt-2">Shop</li>
      </ul>
      <ul className="lower-list p-7">
        <p className="font-bold  text-[1vw] ">Quick Link</p>
        <li className=" text-[1vw] pt-2">Privacy Policy</li>
        <li className=" text-[1vw] pt-2 ">Terms</li>
        <li className=" text-[1vw] pt-2">FAQ</li>
        <li className="text-[1vw] pt-2">Contact</li>
    
      </ul>
      <div className="p-7">
        <p className="font-bold  text-[1vw]">Download App</p>
        <p className="pt-2">Save $3 with Apple User Only</p>  
        <div className="flex justify-between gap-2 py-5"> 
          <Image  src='/Qrcode.png' alt="pizza" width={0} height={0}
               sizes="100vw" className="w-[10vw] "  />

      <div className=" p-4">  <Image  src='/playstor.png' alt="pizza" width={0} height={0}
          sizes="100vw" className="w-[10vw] pb-5" />
      
        <Image  src='/istor.png' alt="pizza" width={0} height={0} 
          sizes="100vw" className="w-[10vw] pt-3" /></div>
       </div>    
            <div className="flex justify-center gap-10 pt-5">
        <Image src='/Facebook.png' width={30} height={10} alt="footer"></Image>
        <Image src='/Twitter.png' width={30} height={10} alt="footer"></Image>
        <Image src='/instagram.png' width={30} height={10} alt="footer"></Image>
        <Image src='/Linkedin.png' width={30} height={10} alt="footer"></Image>
      </div>
      </div>
     
    </div>   
      </div>
</div>
    )
}
export default Footer