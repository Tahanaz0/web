import Link from "next/link";
// import Contact from "../";
import Image from "next/image";

function Header() {
    return (
        <div className="flex justify-between    font-Dancing script  border-b-2">
            <div className="font-bold  text-[2vw] p-2 pl-7 ">
                Exclusive
            </div>
            <div>
                <ul className="flex  gap-1 m-3 ">
                    <li className="text-[1.5vw]  hover:bg-[#F5F5F5]">
                        <Link href="home" className="p-4">Home</Link>
                    </li>
                    <li className="text-[1.5vw]  hover:bg-[#F5F5F5]">
                        <Link href="about" className="p-4">About</Link></li>
                    <li className="text-[1.5vw]  hover:bg-[#F5F5F5]">
                        <Link href="contact " className="p-4">Contact</Link>
                    </li>
                    <li className="text-[1.5vw]  hover:bg-[#F5F5F5]">
                        <Link href="signup" className="p-4"> Sign up</Link>
                    </li>

                </ul></div>
            <div className="flex justify-between m-3 gap-3 ">
               <div className="bg-[#F5F5F5] flex justify-between ">
               <div>
  <input 
    type="text" 
    name="" 
    id="" 
    className="p-1 bg-[#F5F5F5] w-[20vw] focus:border-gray-300 border border-transparent focus:outline-none" 
  />
</div>

                <div className="p-1"><Image src='/search.png' width={0} alt="vecto" height={0} className=" bg-[#F5F5F5]" 
                sizes="100vw"
                style={{ width: '1.5vw' }}></Image></div></div> 
                
                <div className="flex gap-3 m-1 ">

                    <div><Image src='/heart.png' width={0} alt="vecto" height={0}
                    sizes="100vw"  style={{ width: '1.5vw' }}></Image></div>
                    <div><Image src='/cart.png' width={0} alt="vecto" height={0}
                         style={{ width: '1.5vw' }}></Image></div>


                </div>
            </div>

           
        </div>)
}
export default Header;