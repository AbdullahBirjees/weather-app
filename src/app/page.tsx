"use client";

import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "@/components/Weather";
import Spinner from '@/components/Spinner'



export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=54d827f9c0316e9df0f5a6eafbfae152`;

  const fetchWeather = (e: any) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    });
    setCity("");
    setLoading(false);
  };
  if (loading){
    return <Spinner />
  }
  else{
    return (
      <div>
        {/* <button onClick={fetchWeather}>Fetch Data</button> */}
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[1]" />
        {/* Background image */}
        <Image
          alt="bg-img"
          src="https://images.unsplash.com/photo-1619994948937-ef1e758d46ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80"
          layout="fill"
          className="object-cover"
        />
  
        {/* Search */}
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
          <form onSubmit={fetchWeather} className="flex justify-between items-center w-full m-auto p-2 bg-transparent border border-gray-300 text-white rounded-xl">
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent border-none text-white focus:outline-none text-xl"
                type="text"
                placeholder="Search City here"
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>
  
        {/* Weather */}
  
        {weather.main && <Weather data = {weather}/>}
      </div>
    );
  }
  
}
