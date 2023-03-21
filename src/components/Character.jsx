import { useState, useEffect } from "react";
import Header from "./Header";
import Category from "./Category";
import ReactPaginate from "react-paginate";

import Pagination from "./Pagination";
function Character() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState();
  const [info, setInfo] = useState();
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api)
        .then((res) => res.json())
        .catch((error) => {
          console.log("error handl", error);
        });
      let { info, results } = data;
      setData(results);
      setInfo(info);
    })();
  }, [api]);
  return (
    <div className="mx-[10%] mt-[2%]">
      <Header />
      <div className="flex  mt-[5%] bg-slate-100 h-16 rounded-lg">
        <input
          placeholder="Search Something. . ."
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 ml-4 mt-3 rounded-lg text-sm focus:outline-none"
          type="text"
          name="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className="h-10 w-24 bg-[#ecd06f] p-[.4rem]  mt-3 ml-2 rounded-lg text-[14px] text-lg text-white">
          {" "}
          Search
        </button>
        <p className="ml-auto mt-4 pr-3">{info?.count} Character</p>
      </div>
      <div className="mt-14">
        <div className="grid gap-[1rem] sm:grid-cols-[.5fr_1.5fr]">
          <div className="flex flex-col  ">
            <div className="bg-[#F3F4F6] rounded-lg p-[1rem] flex justify-between items-center sm:flex-col md:flex-row">
              <div className="text-[28px]">Filters</div>
              <div className="cursor-pointer">Clear Filters</div>
            </div>
            <span className="flex radio-group flex-col bg-slate-100 mt-3 pl-3 py-3">
              <div className="text-[20px] font-bold">Status</div>
              <input
                type="radio"
                name="status"
                id="flag-0"
                class=" hidden form-check-input x"
                onClick={(e) => updateStatus("Alive")}
              ></input>

              <label
                for="flag-0"
                className="border-2 border-gray-300 bg-white w-20 text-center p-[.5rem] rounded-lg cursor-pointer hover:bg-amber-300"
              >
                Alive
              </label>
              <input
                type="radio"
                name="status"
                id="flag-1"
                class=" hidden form-check-input x"
                onClick={(e) => updateStatus("Dead")}
              ></input>
              <label
                for="flag-1"
                className="border-2 border-gray-300 bg-white w-20 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300"
              >
                Dead
              </label>
              <input
                type="radio"
                name="status"
                id="flag-2"
                class="hidden form-check-input x"
                onClick={(e) => updateStatus("Unknown")}
              ></input>
              <label
                for="flag-2"
                className="border-2 border-gray-300 bg-white w-24 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300"
              >
                Unknown
              </label>
            </span>
            <span className="flex flex-col radio-group bg-slate-100 mt-3 p-5">
              <div className="text-[20px] font-bold">Species</div>
              <input
                type="radio"
                name="status"
                id="flag-4"
                class=" hidden form-check-input x"
                onClick={(e) => updateSpecies("Human")}
              ></input>
              <label
                for="flag-4"
                className="border-2 border-gray-300 bg-white w-24 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300"
              >
                Human
              </label>
              <input
                type="radio"
                name="status"
                id="flag-5"
                class=" hidden form-check-input x"
                onClick={(e) => updateSpecies("Alien")}
              ></input>
              <label
                for="flag-5"
                className="border-2 border-gray-300 bg-white w-24 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300"
              >
                Alien
              </label>
              <input
                type="radio"
                name="status"
                id="flag-6"
                class=" hidden form-check-input x"
                onClick={(e) => updateSpecies("Humanoid")}
              ></input>
              <label
                for="flag-6"
                className="border-2 border-gray-300 bg-white w-24 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300"
              >
                Humanoid
              </label>
              <input
                type="radio"
                name="status"
                id="flag-7"
                class=" hidden form-check-input x"
                onClick={(e) => updateSpecies("Poopybutthole")}
              ></input>
              <label
                for="flag-7"
                className="border-2 border-gray-300 bg-white w-32 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300"
              >
                Poopybutthole
              </label>
              <input
                type="radio"
                name="status"
                id="flag-8"
                class=" hidden form-check-input x"
                onClick={(e) => updateSpecies("Mythological")}
              ></input>
              <label
                for="flag-8"
                className="border-2 border-gray-300 bg-white w-32 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300 "
              >
                Mythological
              </label>
              <input
                type="radio"
                name="status"
                id="flag-9"
                class=" hidden form-check-input x"
                onClick={(e) => updateSpecies("Unknown")}
              ></input>
              <label
                for="flag-9"
                className="border-2 border-gray-300 bg-white w-24 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300"
              >
                Unknown
              </label>
              <input
                type="radio"
                name="status"
                id="flag-10"
                class=" hidden form-check-input x"
                onClick={(e) => updateSpecies("Animal")}
              ></input>
              <label
                for="flag-10"
                className="border-2 border-gray-300 bg-white w-20 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300"
              >
                Animal
              </label>
              <input
                type="radio"
                name="status"
                id="flag-11"
                class=" hidden form-check-input x"
                onClick={(e) => updateSpecies("Disease")}
              ></input>
              <label
                for="flag-11"
                className="border-2 border-gray-300 bg-white w-20 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300"
              >
                Disease
              </label>
              <input
                type="radio"
                name="status"
                id="flag-12"
                class=" hidden form-check-input x"
                onClick={(e) => updateSpecies("Robot")}
              ></input>
              <label
                for="flag-12"
                className="border-2 border-gray-300 bg-white w-24 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300"
              >
                Robot
              </label>
              <input
                type="radio"
                name="status"
                id="flag-13"
                class=" hidden form-check-input x"
                onClick={(e) => updateSpecies("Cronenberg")}
              ></input>
              <label
                for="flag-13"
                className="border-2 border-gray-300 bg-white w-28 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300"
              >
                Cronenberg
              </label>
              <input
                type="radio"
                name="status"
                id="flag-14"
                class=" hidden form-check-input x"
                onClick={(e) => updateSpecies("Planet")}
              ></input>
              <label
                for="flag-14"
                className="border-2 border-gray-300 bg-white w-20 text-center p-[.5rem] rounded-lg cursor-pointer mt-2 hover:bg-amber-300"
              >
                Planet
              </label>
            </span>
            <span className="flex flex-col bg-slate-100 mt-3 p-5">
              <div className="text-[20px] font-bold">Gender</div>
              <label className="border-2 border-gray-300 bg-white w-20 text-center p-[.5rem] rounded-lg cursor-pointer mt-2">
                female
              </label>
              <label className="border-2 border-gray-300 bg-white w-20 text-center p-[.5rem] rounded-lg cursor-pointer mt-2">
                male
              </label>
              <label className="border-2 border-gray-300 bg-white w-24 text-center p-[.5rem] rounded-lg cursor-pointer  mt-2">
                genderless
              </label>
              <label className="border-2 border-gray-300 bg-white w-20 text-center p-[.5rem] rounded-lg cursor-pointer mt-2">
                unknown
              </label>
            </span>
          </div>

          <div className="flex flex-col gap-[1rem] ">
            {data?.map((datas) => (
              <div
                className="bg-[#F3F4F6] rounded-lg p-[1rem] grid gap-[2rem]"
                key={datas.id}
              >
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
                      {datas?.status==="Alive"?( <div class="absolute top-[10px] left-[5px] ">
                        <div class="flex items-center gap-[.5rem]">
                          <div class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></div>
                          <div class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></div>
                          <div class="text-white">{datas?.status}</div>
                        </div>
                      </div>): 
                      <div class="absolute top-[10px] left-[5px] ">
                        <div class="flex items-center gap-[.5rem]">
                          <div class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></div>
                          <div class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></div>
                          <div class="text-white">{datas?.status}</div>
                        </div>
                      </div>}
                     
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
                        <div className="text-[#9E9E9E]">
                          Last know location:
                        </div>
                        <div className="text-[16px] lg:text-[20px]">
                          {datas?.location?.name}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-[#9E9E9E]">Origin:</div>
                        <div className="text-[16px] lg:text-[20px]">
                          {datas.origin?.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          updatePageNumber={updatePageNumber}
        />
      </div>
    </div>
  );
}

export default Character;
