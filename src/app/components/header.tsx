import Link from "next/link";
// import Contact from "../";
import Image from "next/image";

function Header() {
    return (
        <div className="flex justify-around  h-14 font-Dancing script  ">
            <div className="font-bold py-5 text-[1vw] ">
                Exclusive
            </div>
            <div>
                <ul className="flex  gap-5 mt-4 mr-2  ">
                    <li className="text-[1vw]">
                        <Link href="home">Home</Link>
                    </li>
                    <li className="text-[1vw]"><Link href="about">About</Link></li>
                    <li className="text-[1vw]">
                        <Link href="contact">Contact</Link>
                    </li>
                    <li className="text-[1vw]">
                        <Link href="signup"> Sign up</Link>
                    </li>

                </ul></div>
            <div className="flex justify-between p-4 gap-3 ">
               <div className="bg-[#F5F5F5] flex justify-between">
                <div ><input type="text" name="" id="" className="bg-[#F5F5F5] w-[20vw]"  /></div>
                <div><Image src='/search.png' width={0} alt="vecto" height={0} className="bg-[#F5F5F5]" 
                sizes="100vw"
                style={{ width: '1.5vw' }}></Image></div></div> 
                
                <div className="flex gap-3  ">

                    <div><Image src='/heart.png' width={0} alt="vecto" height={0}
                    sizes="100vw"  style={{ width: '1.5vw' }}></Image></div>
                    <div><Image src='/cart.png' width={0} alt="vecto" height={0}
                         style={{ width: '1.5vw' }}></Image></div>


                </div>
            </div>

           
        </div>)
}
export default Header;