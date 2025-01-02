


// import Link from "next/link"
// export default function Main(){
//   return(
//     <div>
//      <div className="w-full h-[600px] opacity-85 bg-black  bg-cover bg-center bg-[url('/shoppingbg.jpg')]">
     
//      <h1 className="flex justify-center items-center text-5xl font-serif font-bold pt-36 text-pink-500">WelCome tO Alvi Shop</h1>
//      <div className="flex justify-center items-center ">
//      <p className=" w-[550px] text-white">I am thrilled to announce the opening of my online store, Alvi Store! This platform is designed to offer customers a seamless shopping experience, featuring a diverse range of high-quality products that cater to all your needs. At Alvi Store, we prioritize customer satisfaction by ensuring competitive prices, fast delivery, and exceptional service</p>
//      </div>
//      <div className="flex justify-center items-center ">
//      <Link href={"/Products"}><button className="w-[200px] h-[60px] hover:bg-pink-500 mt-7 bg-pink-700 rounded-lg text-white font-serif ">Explore Products</button></Link>
//       </div>
//      </div>
//      </div>
    
//   )
// }




import Link from "next/link";

export default function Main() {
  return (
    <div>
      <div className="w-full h-[600px] bg-black bg-cover bg-center bg-[url('/shoppingbg.jpg')] opacity-85">
        {/* Heading */}
        <h1 className="flex justify-center items-center text-3xl sm:text-4xl md:text-5xl font-serif font-bold pt-20 sm:pt-28 md:pt-36 text-pink-500 text-center px-4">
          WelCome tO Alvi Shop
        </h1>

        {/* Paragraph */}
        <div className="flex justify-center items-center px-4">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-center w-full max-w-[550px]">
            I am thrilled to announce the opening of my online store, Alvi Store! This platform is designed to offer customers a seamless shopping experience, featuring a diverse range of high-quality products that cater to all your needs. At Alvi Store, we prioritize customer satisfaction by ensuring competitive prices, fast delivery, and exceptional service.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center items-center mt-5 sm:mt-7">
          <Link href={"/Products"}>
            <button className="w-[150px] sm:w-[180px] md:w-[200px] h-[50px] sm:h-[55px] md:h-[60px] bg-pink-700 hover:bg-pink-500 rounded-lg text-white font-serif text-sm sm:text-base md:text-lg">
              Explore Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
