import Image from "next/image";
import React from "react";

function CartPage() {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-900 lg:flex-row">
      <div
        className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:1/2 lg:px-20 xl:px-40" /*Product Container */
      >
        <div
          className="flex items-center justify-between mb-5" /*Single Item */
        >
          <Image src="/temporary/p1.png" alt="pic" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Siclian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$29.8</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div
          className="flex items-center justify-between mb-5" /*Single Item */
        >
          <Image src="/temporary/p1.png" alt="pic" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Siclian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$29.8</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div
          className="flex items-center justify-between mb-5" /*Single Item */
        >
          <Image src="/temporary/p1.png" alt="pic" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Siclian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$29.8</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      <div
        className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-5 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6" /*Payment container */
      >
        <div className="flex justify-between">
          <span>Subtotal (3 items)</span>
          <span>$20</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="text-green-700">FREE</span>
        </div>
        <div className="flex justify-between">
          <span>TOTAL</span>
          <span className="text-red-950 font-bold">$20</span>
        </div>
        <hr className=" my-2" />
        <button className="bg-red-950 text-white p-3 round-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default CartPage;
