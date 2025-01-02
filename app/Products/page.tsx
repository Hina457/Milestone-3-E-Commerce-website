




"use client"
import { useEffect, useState } from "react";
import Image from "next/image";






interface products{
  id:string;
  title:string;
  price:number;
  description:string;
  image:string;
  rating:{
    rate:number;
    count:number;
  };
}

const Productpage = () =>{
  const [products,setproducts] = useState <products[]>([]);

   
  useEffect(() => {
   
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products")
      const parsedResponse:products[] =await response.json()
      console.log(parsedResponse)
      setproducts(parsedResponse)
     
     
    };
    fetchData();
   
   },[]);
   

  return(
   <div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-6 bg-black pb-11 ">
   
  {products.map((item, index) => (
        
    <div 
      key={index} 
      className="border  p-4 rounded-md shadow-md  bg-white flex flex-col gap-2 hover:scale-90"
    >
        

<div className="mt-2 h-40 w-full flex justify-center">
        <Image 
          src={item.image} 
          alt={item.title} 
          width={500} 
          height={400}
          className="w-auto h-full object-contain rounded-md" 
        
        />
      </div>
      
      <p className="font-semibold text-blue-950 text-[20px] font-serif"><span className="font-normal">{item.title}</span></p>
      <p className="font-semibold text-red-600 text-[15px]">Price:<span className="font-normal">${item.price}</span></p>
      <div className="flex items-center gap-2">
        <p className="font-semibold">Rating:</p>
        <p className="font-normal">{item.rating.rate}</p>
        <p className="text-gray-500">(Count: {item.rating.count})</p>
      </div>
     
    </div>
  ))}
 
 
 </div>
 
</div>
    


  )
}
export default Productpage;