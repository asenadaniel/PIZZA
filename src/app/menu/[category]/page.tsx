import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Category() {
  return (
    <div className="flex flex-wrap  text-red-900">
      {pizzas.map((item) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-900 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {item.img && (
            <div className="relative h-[80%]" /*Image container */>
              <Image
                src={item.img}
                alt="pic"
                fill
                className="ob object-contain"
              />
            </div>
          )}
          <div
            className="flex items-center justify-between font-bold" /*Text Contianer */
          >
            <h1 className="text-2xl uppercase p-3">{item.title}</h1>
            <h2 className="g group-hover:hidden text-xl">₦{item.price}</h2>
            <button className="uppercase bg-red-900 text-white p-2 hidden group-hover:block">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Category;
