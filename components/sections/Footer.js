import React from "react";

import Image from "next/image";

import Histes from "/assets/awards/Histes.png";
import Roblox from "/assets/awards/Roblox.png";
import Wsis from "/assets/awards/Wsis.png";

const Footer = () => {
  return (
    <section className="bg-black mt-16 overflow-auto text-white">
      <div className="container mx-auto max-w-screen-xl px-4 py-8 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16">
        <div className="basis-2/5 flex flex-col space-y-2 text-center">
          <span>
            © 2016-2021 KIBERone | Najbolja obrazovna ustanova za dogitalni
            odgoj djece od 6. do 15. godine u 2018. g. na teritoriju Europske
            Unije.
          </span>
          <span>
            Kroz natječaj UN i UNESCO dobili smo prvo mjesto u kategoriji
            najbolji međunarodni projekt edukacije za djecu u području digitalne
            tehnologije.
          </span>
        </div>
        <div className="basis-3/5 flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-4 flex justify-center items-center">
            <div className="relative aspect-w-16 aspect-h-9 w-full">
              <Image
                layout="fill"
                src={Histes}
                alt="Histes"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-4 flex justify-center items-center">
            <div className="relative aspect-w-16 aspect-h-9 w-full">
              <Image
                layout="fill"
                src={Roblox}
                alt="Roblox"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-4 flex justify-center items-center">
            <div className="relative aspect-w-16 aspect-h-9 w-full">
              <Image layout="fill" src={Wsis} alt="Wsis" objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;