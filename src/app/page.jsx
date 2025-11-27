import Heropage from "@/Hero/page";
import Homeproductpage from "@/homeproduct/page";
import Image from "next/image";
import AboutPage from "./about/page";

export default function Home() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto items-center justify-center bg-zinc-50 font-sans dark:bg-black">
  
       
         <div  className="mt-2">
           <Heropage></Heropage>
         </div>
          
        
       <div className="mt-2">
         <Homeproductpage></Homeproductpage>
       </div>
       
        
      
     
    </div>
  );
}
