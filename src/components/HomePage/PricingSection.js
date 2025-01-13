import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PricingSection.css';


const PricingSection = () => {

  const [pricing, setPricing] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/pricings`)
      .then((res) => res.json())
      .then((info) => setPricing(info));
  }, []);

  return (

    <section className="pricing-section bg-[#372281] " id='pricing-sec'>
      {/* Section Spacer */}
      <div className="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
        {/* Section Container */}
        <div className="global-container">
          {/* Section Content Block */}
          <div className="jos mb-10 text-center lg:mb-12">
            <div className="jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]">
              <h2 className="font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]">
                Pricing Plan You Can Choose One
              </h2>
            </div>
          </div>
          {/* Section Content Block */}
          {/* Pricing Block */}
          <div className="container mx-auto">
            {/* Tab buttons */}

            {/* Pricing Block */}
            <div className="mt-12 lg:mt-16 xl:mt-20">

              <ul id="monthly" className="tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-3">

                {
                  pricing.map(b => b.packageName === 'Basic' && <li className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear ">
                    <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                      {b.packageName} Plan
                    </h3>

                    <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
                    <h4 className="mb-4 font-dmSans text-2xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[px]">
                      ${b.packagePrice}<span className=" "></span>
                    </h4>
                    <ul class="mb-10 flex flex-col gap-y-3">
                      <li class="flex items-center gap-x-3 font-bold ">
                        <div class="relative h-[24px] w-[24px]">
                          <img src="assets/img/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="h-full w-full object-cover" />
                          <img src="assets/img/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                        </div>
                        {b.packagePointOne}
                      </li>
                      <li class="flex items-center gap-x-3 font-bold ">
                        <div class="relative h-[24px] w-[24px]">
                          <img src="assets/img/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="h-full w-full object-cover" />
                          <img src="assets/img/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                        </div>
                        {b.packagePointTwo}
                      </li>
                      <li class="flex items-center gap-x-3 font-bold ">
                        <div class="relative h-[24px] w-[24px]">
                          <img src="assets/img/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="h-full w-full object-cover" />
                          <img src="assets/img/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                        </div>
                        {b.packagePointThree}
                      </li>
                      <li class="flex items-center gap-x-3 font-bold ">
                        <div class="relative h-[24px] w-[24px]">
                          <img src="assets/img/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="h-full w-full object-cover" />
                          <img src="assets/img/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                        </div>
                        {b.packagePointFour}
                      </li>
                      <li class="flex items-center gap-x-3 font-bold ">
                        <div class="relative h-[24px] w-[24px]">
                          <img src="assets/img/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="h-full w-full object-cover" />
                          <img src="assets/img/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                        </div>
                        {b.packagePointFive}
                      </li>
                    </ul>
                    <Link to={`/order-now/${b._id}`} className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-3 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:text-white">{b.packageButtonText}</Link>
                  </li>)}
                {
                  pricing.map(p => p.packageName === 'Premium' && <li className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear ">
                    <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                      {p.packageName} Plan
                    </h3>

                    <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
                    <h4 className="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[0px]">
                      ${p.packagePrice}<span className="text-lg font-semibold"></span>
                    </h4>
                    <ul class="mb-10 flex flex-col gap-y-3">
                      <li class="flex items-center gap-x-3 font-bold ">
                        <div class="relative h-[24px] w-[24px]">
                          <img src="assets/img/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="h-full w-full object-cover" />
                          <img src="assets/img/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                        </div>
                        {p.packagePointOne}
                      </li>
                      <li class="flex items-center gap-x-3 font-bold ">
                        <div class="relative h-[24px] w-[24px]">
                          <img src="assets/img/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="h-full w-full object-cover" />
                          <img src="assets/img/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                        </div>
                        {p.packagePointTwo}
                      </li>
                      <li class="flex items-center gap-x-3 font-bold ">
                        <div class="relative h-[24px] w-[24px]">
                          <img src="assets/img/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="h-full w-full object-cover" />
                          <img src="assets/img/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                        </div>
                        {p.packagePointThree}
                      </li>
                      <li class="flex items-center gap-x-3 font-bold ">
                        <div class="relative h-[24px] w-[24px]">
                          <img src="assets/img/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="h-full w-full object-cover" />
                          <img src="assets/img/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                        </div>
                        {p.packagePointFour}
                      </li>
                      <li class="flex items-center gap-x-3 font-bold ">
                        <div class="relative h-[24px] w-[24px]">
                          <img src="assets/img/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="h-full w-full object-cover" />
                          <img src="assets/img/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                        </div>
                        {p.packagePointFive}
                      </li>
                      <li class="flex items-center gap-x-3 font-bold ">
                        <div class="relative h-[24px] w-[24px]">
                          <img src="assets/img/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="h-full w-full object-cover" />
                          <img src="assets/img/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                        </div>
                        {p.packagePointSix}
                      </li>
                    </ul>
                    <Link to={`/order-now/${p._id}`} className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-3 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white">{p.packageButtonText}</Link>
                  </li>)}

                {
                  pricing.map(s => s.packageName === 'Standard' && <li className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear ">
                    <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                      {s.packageName} Plan
                    </h3>

                    <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
                    <h4 className="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[0px]">
                      ${s.packagePrice}<span className="text-lg font-semibold"></span>
                    </h4>
                    <ul class="mb-10 flex flex-col gap-y-3">
                      <li class="flex items-center gap-x-3 font-bold ">
                        <div class="relative h-[24px] w-[24px]">
                          <img src="assets/img/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="h-full w-full object-cover" />
                          <img src="assets/img/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                        </div>
                        {s.packagePointOne}
                      </li>
                      <li class="flex items-center gap-x-3 font-bold ">
                        <div class="relative h-[24px] w-[24px]">
                          <img src="assets/img/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="h-full w-full object-cover" />
                          <img src="assets/img/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                        </div>
                        {s.packagePointTwo}
                      </li>
                      <li class="flex items-center gap-x-3 font-bold ">
                        <div class="relative h-[24px] w-[24px]">
                          <img src="assets/img/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="h-full w-full object-cover" />
                          <img src="assets/img/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                        </div>
                        {s.packagePointThree}
                      </li>
                      <li class="flex items-center gap-x-3 font-bold ">
                        <div class="relative h-[24px] w-[24px]">
                          <img src="assets/img/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="h-full w-full object-cover" />
                          <img src="assets/img/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                        </div>
                        {s.packagePointFour}
                      </li>
                      <li class="flex items-center gap-x-3 font-bold ">
                        <div class="relative h-[24px] w-[24px]">
                          <img src="assets/img/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="h-full w-full object-cover" />
                          <img src="assets/img/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" class="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                        </div>
                        {s.packagePointFive}
                      </li>
                    </ul>

                    <Link to={`/order-now/${s._id}`} className=" button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-3 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white">{s.packageButtonText}</Link>
                  </li>)}

              </ul>
            </div>
            {/* Pricing Block */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default PricingSection;