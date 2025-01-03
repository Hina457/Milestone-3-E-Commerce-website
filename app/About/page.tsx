
// import Image from "next/image"
// export default function About(){
//     return(
//         <div>
//             <div className="flex justify-center items-center mt-6">

            
//            <div className="w-[900px] h-[600px]  gap-4 flex">
//             <div className="w-[400px] h-[500px] bg-pink-200 shadow-2xl">
//                 <h1 className="text-3xl font-bold ml-10 mt-6 font-serif text-center">About Us!</h1>
//                 <p className="font-serif">Welcome to Alvi Store your one-stop destination for all your shopping needs. We are committed to providing you with an exceptional shopping experience by offering a wide range of high-quality products at competitive prices. At Alvi Store we prioritize customer satisfaction by ensuring fast and reliable service, secure payment methods and prompt delivery. Whether youre looking for the latest trends, everyday essentials,
//                      or unique finds, we aim to make your shopping journey seamless and enjoyable. 
//                      Thank you for choosing Alvi Store where quality meets convenience Our store is designed to cater to a diverse range of needs, whether youre shopping for the latest fashion trends, home essentials, tech gadgets, or unique gifts. We take pride in curating a collection of premium products from reliable brands, ensuring that every item meets the highest standards of quality and functionality.!</p>
//             </div>
//             <div className="w-[500px] h-[500px]">
//                 <Image src="/about.jpg" alt="pic" width={700} height={500} className="shadow-2xl mt-16"/>

//             </div>
//            </div>
//         </div>
//         </div>  
//     )
// }





import Image from "next/image";

export default function About() {
  return (
    <div className="flex justify-center items-center mt-6 px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
        {/* Text Section */}
        <div className="flex-1 bg-pink-200 shadow-2xl p-6 rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-4 font-serif">About Us!</h1>
          <p className="font-serif text-justify leading-6 text-gray-800">
            Welcome to Alvi Store, your one-stop destination for all your shopping needs. 
            We are committed to providing you with an exceptional shopping experience by 
            offering a wide range of high-quality products at competitive prices. At Alvi 
            Store, we prioritize customer satisfaction by ensuring fast and reliable service, 
            secure payment methods, and prompt delivery. Whether you're looking for the latest 
            trends, everyday essentials, or unique finds, we aim to make your shopping journey 
            seamless and enjoyable. Thank you for choosing Alvi Store, where quality meets 
            convenience! Our store is designed to cater to a diverse range of needs, whether 
            you're shopping for the latest fashion trends, home essentials, tech gadgets, or 
            unique gifts. We take pride in curating a collection of premium products from 
            reliable brands, ensuring that every item meets the highest standards of quality 
            and functionality.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/about.jpg"
            alt="About Us Image"
            width={700}
            height={500}
            className="shadow-2xl rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
