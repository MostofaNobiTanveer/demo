import React from "react";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main>
      <section className="relative max-w-[1556px] mx-auto p-4">
        <div className="grid grid-cols-12 space-y-14">
          <h1 class="col-start-5 col-span-full text-7xl tracking-tight">
            Creative Front—end Developer Based in Bangladesh.
          </h1>
          <p class="col-start-7 col-span-full text-lg opacity-80">
            Love to develop clean and aesthetic Web Applications & enjoy
            creating things that live on the internet. Velit perferendis
            accusamus voluptate in cum sequi? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Debitis ad cum amet inventore.
          </p>
        </div>

        <div class="relative w-full flex pt-4">
          {/* <div class="absolute h-full w-3/12 top-0 left-0 bg-gray-50">
            <div className="absolute w-full h-full bg-[#F3F2F7] rounded-br-lg"></div>
          </div>
          <div class="absolute h-full w-3/12 top-0 left-1/4 rounded-t-lg bg-gray-50">
          </div>
          <div class="absolute h-full w-6/12 top-0 left-2/4 bg-gray-50">
            <div className="absolute w-full h-full bg-[#F3F2F7] rounded-bl-lg"></div>
          </div> */}
          {/* <div class="absolute top-0 right-0 h-full w-3/12 bg- rounded-br-2xl">
            <div class="absolute w-full h-full bg-"></div>
            <div class="absolute w-full h-full bg- rounded-bl-2xl flex items-center z-10">
              <h1 className="text-2xl ">Mostofa Nobi</h1>
            </div>
          </div> */}
        </div>
        <div className="relative bg-gray-50 p-2 w-full h-[50vh] rounded-2xl">
          <div className="absolute w-60 h-10 bg-gray-50 -top-10 left-20 rounded-t-xl">
            <div className="absolute -left-4 w-4 h-4 bg-gray-50 bottom-0">
              <div className="absolute h-full w-full bg-[#F3F2F7] rounded-br-xl"></div>
            </div>
            <div className="absolute -right-4 w-4 h-4 bg-gray-50 bottom-0">
              <div className="absolute h-full w-full bg-[#F3F2F7] rounded-bl-xl"></div>
            </div>
          </div>
        </div>
        {/* <div class="mx-auto bg- rounded-2xl rounded-tl-none p-8">
        <div class="grid grid-cols-12 mb-8">
          <div class="col-span-12 flex items-center mb-4">
            <div class="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            <h4 className="">Leading No-Code &amp; Webflow Agency</h4>
          </div>
          <h1 class="col-span-12 text-[28px] leading-[40px] font-medium mb-4">
            We enable rapid growth through digital creation
          </h1>
          <p class="col-span-5 opacity-80 mb-4">
            Cut the Code is a leading no-code agency &amp; Webflow Partner based
            in Amsterdam, The Netherlands. We push our clients forward into
            tomorrow - and fast - by creating the next generation of web
            experiences.
          </p>
        </div>
      </div> */}
        {/* <div class="relative w-full flex pt-8">
        <div class="absolute w-2/3 h-full top-0 left-0">
          <div class="absolute w-full h-full bg-white"></div>
          <div class="absolute w-full h-full bg-[#F3F2F7] rounded-tr-2xl z-10"></div>
        </div>
        <div class="absolute top-0 left-2/3 p-4 h-20 w-1/3 bg-white rounded-b-2xl">
        </div>
      </div> */}
      </section>
    </main>
  );
};

export default App;

// <div className="relative max-w-7xl mx-auto px-4">
//   <div className="max-w-lg space-y-14">
//     <h1 className="text-[28px] leading-[40px] font-medium">
//       Creative Developer based in Bangladesh. Front-end Developer at Technext Limited.
//     </h1>
//     <p className="opacity-70">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
//       doloremque, eaque nobis iusto, voluptates maiores placeat at quo porro
//       possimus sed corporis! Incidunt facere soluta provident deleniti iste
//       impedit accusamus.
//     </p>
//     <button>View more</button>
//   </div>
// </div>
