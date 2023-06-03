import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <div className="my-[70px]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[95%] mx-auto md:gap-10">
        <div className="flex items-start">
          <Image src="/foundation/f14.webp" width="200" height="200" alt="" />
          <div className="pb-5">
            <h1 className="pb-[15px] pl-5 text-3xl opacity-70">Contact</h1>
            <p className="pl-5 opacity-70">Email: arnfinn@soneva.com</p>
            <p className="pl-5 opacity-70">Address: 6 O-NES Tower, 10th</p>
            <p className="pl-5 opacity-70">Floor, Soi 6, Sukhumvit Road,</p>
            <p className="pl-5 opacity-70">Bangkok 10110, Thailand</p>
          </div>
        </div>
        <div className="flex items-start">
          <Image src="/foundation/f1.jpg" width="200" height="200" alt="" />
          <div className="pb-5">
            <h1 className="pb-[15px] pl-5 text-3xl opacity-70">Donate</h1>
            <p className="pl-5 opacity-70">
              If you would like to donate to the Soneva Foundation, kindly get
              in touch with us and we will facilitate this.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
