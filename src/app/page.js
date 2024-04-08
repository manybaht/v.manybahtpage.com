"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState(false);

  function changeLang() {
    if(lang) setLang(false);
    else setLang(true);
  }

  return (
    <main className="bg-gradient-to-b from-white to-orange-400 flex flex-col min-h-dvh">
      <div className="pt-10 px-5 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <img className="w-64 h-full" src="/title.webp"/>
          <div className="flex flex-row lg:ml-auto gap-4 lg:gap-16">
            <a href="https://www.youtube.com/@laibaht" target="_blank">
              <p className="text-black font-semibold text-[5dvw] sm:text-xl">{lang ? "Talent" : "ทาเลนต์"}</p>
            </a>
            <a href="https://my.laibaht.ovh/shop" target="_blank">
              <p className="text-black font-semibold text-[5dvw] sm:text-xl">{lang ? "Merch" : "สินค้า"}</p>
            </a>
            <a href="mailto:vtuber@manybahtpage.com">
              <p className="text-black font-semibold text-[5dvw] sm:text-xl">{lang ? "Contact" : "ติดต่อ"}</p>
            </a>
            <p onClick={() => changeLang()} className="text-black font-semibold text-[5dvw] sm:text-xl cursor-pointer">EN/TH</p>
          </div>
        </div>
        <div className="flex flex-col-reverse xl:flex-row items-center mt-4 sm:mt-16 xl:mt-6">
          <img className="max-sm:hidden" src="/vtuber_images/1.png"/>
          <h1 className="text-orange-600 font-bold text-2xl sm:text-4xl xl:text-6xl my-auto text-center xl:text-left xl:leading-[96px]">{lang ? "Create joy for everyone, every day." : "มาสร้างรอยยิ้มให้ทุกคนในทุกวัน"}</h1>
        </div>
      </div>
      <div className="sm:hidden w-full min-h-dvh overflow-hidden bg-cover bg-center" style={{backgroundImage:"url('/vtuber_images/1.png')"}}></div>
      <div className="bg-[#121212] p-6 flex-grow">
        <div className="flex flex-col sm:flex-row justify-center gap-1 sm:gap-4">
          <p className="font-medium text-white">Manybaht, 2024</p>
          <a href="mailto:vtuber@manybahtpage.com">
            <p className="text-white">vtuber@manybahtpage.com</p>
          </a>
        </div>
      </div>
    </main>
  );
}
