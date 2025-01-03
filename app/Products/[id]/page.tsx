


"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const productData: Product = await response.json();
      setProduct(productData);
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <p>Loading Products...</p>;
  }

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
      
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="object-contain rounded-md"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-lg text-gray-700">{product.description}</p>
          <p className="text-xl font-semibold text-red-600">Price: ${product.price}</p>
          <div className="flex items-center gap-2 text-yellow-500">
            <p className="font-semibold">Rating:</p>
            <p>{product.rating.rate}</p>
            <p className="text-gray-500">(Count: {product.rating.count})</p>
            
          </div>
          <p className="mt-10">
           <Link href={"/Cart"}><button className="w-[150px] h-[60px] bg-pink-500 rounded-lg text-white">Add to cart</button></Link>
        </p>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetails;
