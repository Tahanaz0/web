import Image from "next/image"



function Footer (){
    return(
      <div>
       
        <div className='footer  bg-[#000000]  text-white p-28 '>
      <div className="flex justify-around py-5  gap-4">
      <ul className="">
        <p className="font-bold  text-[1vw]">Exclusive</p>
        
        <li className="mt-5 text-[1vw]">Subscribe</li>
        <li className="mt-5 text-[1vw]">Get 10% off your first order</li>
        <div className="flex w-[50%]"><button className="border boder-solid-1 text-[1vw]">Enter your email
            </button><Image src='/aerrow.png' alt="aerow" width={10}height={10} ></Image></div>
        </ul>
     




      <ul className=" w-80">
        <p className=" font-bold   text-[1vw]">Support</p>
        <li className=" mt-5 text-[1vw]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
        
        <li className="mt-5 text-[1vw]">exclusive@gmail.com</li>
        <li className="mt-5 text-[1vw]">+88015-88888-9999</li>
        
      </ul>
      <ul className="">
        <p className=" font-bold  text-[1vw]">Account</p>
        <li className="mt-5 text-[1vw]">My Account</li>
        <li className="mt-5 text-[1vw]">Login / Register</li>
        <li className="mt-5 text-[1vw]">Cart</li>
        <li className="mt-5 text-[1vw]">
         Whishlist
        </li>
        <li className="text-[1vw]">Shop</li>
      </ul>
      <ul className="lower-list">
        <p className="font-bold  text-[1vw] ">Quick Link</p>
        <li className="mt-5 text-[1vw]">Privacy Policy</li>
        <li className="mt-5 text-[1vw]">Terms</li>
        <li className="mt-5 text-[1vw]">FAQ</li>
        <li className="text-[1vw]">Contact</li>
    
      </ul>
      <div className="">
        <p className="font-bold  text-[1vw]">Download App</p>  
        <div className="flex justify-between gap-2 py-5"> 
          <Image  src='/Qrcode.png' alt="pizza" width={0} height={0}
            sizes="100vw"
            style={{ width: '100%',  }}  />

      <div className="">  <Image  src='/playstor.png' alt="pizza" width={0} height={0}
        sizes="100vw"
        style={{ width: '100%',  }}  />
      <br />
        <Image  src='/istor.png' alt="pizza" width={0} height={0} 
          sizes="100vw"
          style={{ width: '100%',  }} /></div>
       

      

            
            </div>    
           
      </div>
    </div>   
      </div>
</div>
    )
}
export default Footer