import Heropage from "@/Hero/page";
import Homeproductpage from "@/Homeproduct/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto items-center justify-center bg-zinc-50 font-sans dark:bg-black">
  
        <div className="">
          <Heropage></Heropage>
          
        </div>
        <Homeproductpage></Homeproductpage>
        
      
     
    </div>
  );
}
