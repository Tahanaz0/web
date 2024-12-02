import Image from "next/image"



function Footer (){
    return(
      <div>
       
        <div className='footer  bg-[#000000]  text-white  '>
      <div className="flex flex-col sm:flex-col md:flex-row justify-center   gap-5">
      <ul className="pt-10 p-7">
        <p className="font-bold  text-xl sm:text-xl md:text-xl">Exclusive</p>
        
        <li className="pt-2 text-xl sm:text-xl md:text-xl">Subscribe</li>
        <li className=" pt-2 pb-3 text-xl sm:text-xl md:text-xl">Get 10% off your first order</li>
           <div className="flex  border border-white gap-6 py-2 px-1 w-56">
               <button className=" text-xl sm:text-xl md:text-xl">Enter your email
                </button>
                <Image src='/aerrow.png' alt="aerow" width={30}height={30}  className=""></Image>
            </div>
        </ul>
     




      <ul className=" w-60 p-7">
        <p className=" font-bold  pt-2 text-xl sm:text-xl md:text-2xl">Support</p>
        <li className=" text-xl sm:text-xl md:text-xl pt-2">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
        
        <li className="text-xl sm:text-xl md:text-xl pt-2">exclusive@gmail.com</li>
        <li className="text-xl sm:text-xl md:text-xl pt-2">+88015-88888-9999</li>
        
      </ul>
      <ul className="p-7">
        <p className=" font-bold  text-xl sm:text-xl md:text-2xl">Account</p>
        <li className="text-xl sm:text-xl md:text-xl pt-2">My Account</li>
        <li className="text-xl sm:text-xl md:text-xl pt-2">Login / Register</li>
        <li className="text-xl sm:text-xl md:text-xl pt-2">Cart</li>
        <li className="text-xl sm:text-xl md:text-xl pt-2">
         Whishlist
        </li>
        <li className="text-xl sm:text-xl md:text-xl pt-2">Shop</li>
      </ul>
      <ul className=" p-7">
        <p className="font-bold  text-xl sm:text-xl md:text-2xl ">Quick Link</p>
        <li className=" text-xl sm:text-xl md:text-xl pt-2">Privacy Policy</li>
        <li className=" text-xl sm:text-xl md:text-xl pt-2 ">Terms</li>
        <li className=" text-xl sm:text-xl md:text-xl pt-2">FAQ</li>
        <li className="text-xl sm:text-xl md:text-xl pt-2">Contact</li>
    
      </ul>
      <div className="p-7">
        <p className="font-bold  text-xl sm:text-xl md:text-2xl ">Download App</p>
        <p className="pt-2 text-xl sm:text-xl md:text-xl">Save $3 with Apple User Only</p>  
        <div className="flex  gap-2 py-5"> 
          <Image  src='/Qrcode.png' alt="pizza" width={100} height={100}
               />

      <div className=" p-4"> 
         <Image  src='/playstor.png' alt="pizza" width={100} height={100}
 />
      
        <Image  src='/istor.png' alt="pizza" width={100} height={100} 
           className=" pt-3" /></div>
       </div>    
            <div className="flex  justify-center   gap-10 pt-5">
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