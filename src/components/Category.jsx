import React from "react";
import { useState,useEffect } from "react";

import "./style.css"
function Category(props) {
   
  return (
    <div className="grid gap-[1rem] sm:grid-cols-[.5fr_1.5fr]">
      <div className="flex flex-col  ">
        <div className="bg-[#F3F4F6] rounded-lg p-[1rem] flex justify-between items-center sm:flex-col md:flex-row">
          <div className="text-[28px]">Filters</div>
          <div className="cursor-pointer">Clear Filters</div>
        </div>
        <span className="flex radio-group flex-col bg-slate-100 mt-3 pl-3 py-3">
          <div className="text-[20px] font-bold">Status</div>
          <input type="radio" name="status" id="flag-0" class=" hidden form-check-input x" onChange={(e)=>(updateStatus("Alive"))}></input>
          {console.log("Status",status)}
          <label for="flag-0" className="border-2 border-gray-300 bg-white w-20 text-center p-[.5rem] rounded-lg cursor-pointer hover:bg-amber-300">
            Alive
          </label>
          <input type="radio" name="status" id="flag-1" class=" hidden form-check-input x"></input>
          <label for="flag-1" className="border-2 border-gray-300 bg-white w-20 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300">
            Dead
          </label>
          <input type="radio" name="status" id="flag-2" class="hidden form-check-input x"></input>
          <label for="flag-2" className="border-2 border-gray-300 bg-white w-24 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300" >
            Unknown
          </label>
        </span>
        <span className="flex flex-col bg-slate-100 mt-3 p-5">
            <div className="text-[20px] font-bold">Species</div>
          <label className="border-2 border-gray-300 bg-white w-24 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300">Human</label>
          <label className="border-2 border-gray-300 bg-white w-24 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300">Alien</label>
          <label className="border-2 border-gray-300 bg-white w-24 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300">Humanoid</label>
          <label className="border-2 border-gray-300 bg-white w-32 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300">Poopybutthole</label>
          <label className="border-2 border-gray-300 bg-white w-32 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300">Mythological</label>
          <label className="border-2 border-gray-300 bg-white w-24 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300">Unknown</label>
          <label className="border-2 border-gray-300 bg-white w-20 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300">Animal</label>
          <label className="border-2 border-gray-300 bg-white w-20 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300">Disease</label>
          <label className="border-2 border-gray-300 bg-white w-24 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300">Robot</label>
          <label className="border-2 border-gray-300 bg-white w-28 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300">Cronenberg</label>
          <label className="border-2 border-gray-300 bg-white w-20 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300">Planet</label>
        </span>
        <span className="flex flex-col bg-slate-100 mt-3 p-5">
        <div className="text-[20px] font-bold">Gender</div>
          <label className="border-2 border-gray-300 bg-white w-20 text-center p-[.5rem] rounded-lg cursor-pointer mt-2">female</label>
          <label className="border-2 border-gray-300 bg-white w-20 text-center p-[.5rem] rounded-lg cursor-pointer mt-2">male</label>
          <label className="border-2 border-gray-300 bg-white w-24 text-center p-[.5rem] rounded-lg cursor-pointer  mt-2">genderless</label>
          <label className="border-2 border-gray-300 bg-white w-20 text-center p-[.5rem] rounded-lg cursor-pointer mt-2" >unknown</label>
        </span>
      </div>
      
      <div className="flex flex-col gap-[1rem] ">
        {props.data?.map((datas)=>(
            <div className="bg-[#F3F4F6] rounded-lg p-[1rem] grid gap-[2rem]" key={datas.id}>
            <div className="relative">
              <div className="flex flex-col gap-[.6rem] bg-white rounded-lg overflow-hidden md:flex-row">
                <div className="hidden absolute right-[10px] top-1/2 transform -translate-y-1/2 text-[120px] opacity-[.2] md:block">
                  # {datas.id}
                </div>
                <div className="overflow-hidden">
                  <img
                    className="w-full h-[220px] object-cover hover:scale-[1.25] transition-[.6s] duration-[.6s] brightness-[.9]"
                    src={datas?.image}
                    alt=""
                  />
                </div>
                <div className="p-[.5rem] flex flex-col gap-[.5rem]">
                  <div>
                    <div className="text-[16px] md:text-[20px] lg:text-[28px] font-bold">
                     {datas?.name}
                    </div>
                    <div className="flex gap-[.2rem]">
                      <div>{datas?.gender}</div>
                      <div> - </div>
                      <div>{datas?.species}</div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[#9E9E9E]">Last know location:</div>
                    <div className="text-[16px] lg:text-[20px]">{datas?.location?.name}</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[#9E9E9E]">Origin:</div>
                    <div className="text-[16px] lg:text-[20px]">{datas.origin?.name}</div>
                  </div>
                </div>
              </div>
            </div>
           </div>
        )
 
        )}
       
   
        
      </div>
    </div>
  );
}

export default Category;
