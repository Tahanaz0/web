import Image from "next/image"



function Footer (){
    return(
      <div>
       
        <div className='footer  bg-[#000000]  text-white h-80 '>
      <div className="flex justify-around py-5  gap-4">
      <ul className="">
        <p className="font-bold ">Exclusive</p>
        
        <li className="mt-5">Subscribe</li>
        <li className="mt-5">Get 10% off your first order</li>
        <li> <button className="border boder-solid-1">Enter your email</button></li>
        </ul>
     




      <ul className=" w-80">
        <p className=" font-bold  ">Support</p>
        <li className=" mt-5">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
        
        <li className="mt-5">exclusive@gmail.com</li>
        <li className="mt-5">+88015-88888-9999</li>
        
      </ul>
      <ul className="">
        <p className=" font-bold ">Account</p>
        <li className="mt-5">My Account</li>
        <li className="mt-5">Login / Register</li>
        <li className="mt-5">Cart</li>
        <li className="mt-5">
         Whishlist
        </li>
        <li>Shop</li>
      </ul>
      <ul className="lower-list">
        <p className="font-bold  ">Quick Link</p>
        <li className="mt-5">Privacy Policy</li>
        <li className="mt-5">Terms</li>
        <li className="mt-5">FAQ</li>
        <li>Contact</li>
    
      </ul>
      <div className="">
        <p className="font-bold ">Download App</p>  
        <div className="flex justify-between gap-2 py-5"> 
          <Image  src='/Qrcode.png' alt="pizza" width={100} height={50} />

      <div className="">  <Image  src='/playstor.png' alt="pizza" width={100} height={50} />
      <br />
        <Image  src='/istor.png' alt="pizza" width={100} height={50} /></div>
       

      

            
            </div>    
           
      </div>
    </div>   
      </div>
</div>
    )
}
export default Footer