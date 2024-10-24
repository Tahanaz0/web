import Image from "next/image"



function Footer (){
    return(
      <div>
        <div> <div className='flex justify-center gap-5 my-5'>
      <div>   <Image src="/frame1.png" width={500} height={400} alt="star icon" /></div>
      <div>  <Image src="/frame.png" width={500} height={400} alt="star icon" /></div>
     </div>



<div className='flex justify-evenly'>
  <div className='  m-9 '><Image src="/trans.png" width={90} height={20} alt="star icon"  className='ml-14'/>
<div className='mt-5'>  <h1  className='font-bold  '>FREE AND FAST DELIVERY</h1>
<h1>Free delivery for all orders over $140</h1></div> </div>

<div className='  m-9 '><Image src="/headphones.png" width={90} height={20} alt="star icon" className='ml-14' />
 <div className='mt-5'> <h1  className='font-bold  text-center '>24/7 CUSTOMER SERVICE</h1>
 <h1>Friendly 24/7 customer support</h1></div></div>

<div className='  m-9 '><Image src="/tick.png" width={90} height={20} alt="star icon" className='ml-14'/>
 <div className='mt-5'> <h1  className='font-bold ' >MONEY BACK GUARANTEE</h1>
 <p>We reurn money within 30 days</p></div>
  </div>
</div>



</div>
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