

import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90bh] m-auto text-gray-300 z-10">
      {/* Top */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='100'
            height='100'
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">{convertToFahrenheit(data.main.temp)}&#176;C</p>
      </div>

      {/* Bottom */}
      <div className="bg-black/50 relative p-8 rounded-md mt-20">
        <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">{convertToFahrenheit(data.main.feels_like)}&#176;C</p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{convertToKmph(data.wind.speed)} KPH</p>
            <p className="text-xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to convert temperature from Fahrenheit to Celsius
const convertToFahrenheit = (fahrenheit) => {
  return ((fahrenheit - 32) * 5 / 9).toFixed(0);
};

// Helper function to convert wind speed from MPH to KPH
const convertToKmph = (mph) => {
  return (mph * 1.60934).toFixed(0);
};

export default Weather;



// import React from "react";
// import Image from "next/image";

// const Weather = ({ data }) => {
//   return (
//     <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90bh] m-auto text-gray-300 z-10">
//       {/* Top */}
//       <div className="relative flex justify-between pt-12">
//         <div className="flex flex-col items-center">
//           <Image
//             src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
//             alt='/'
//             width='100'
//             height='100'
//           />
//           <p className="text-2xl">{data.weather[0].main}</p>
//         </div>
//         <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;F</p>
//       </div>

//       {/* Bottom */}
//       <div className="bg-black/50 relative p-8 rounded-md mt-20">
//         <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
//         <div className="flex justify-between text-center">
//           <div>
//             <p className="font-bold text-2xl">{data.main.feels_like.toFixed(0)}&#176;F</p>
//             <p className="text-xl">Feels Like</p>
//           </div>
//           <div>
//             <p className="font-bold text-2xl">{data.main.humidity}%</p>
//             <p className="text-xl">Humidity</p>
//           </div>
//           <div>
//             <p className="font-bold text-2xl">{data.wind.speed.toFixed(0)} MPH</p>
//             <p className="text-xl">Winds</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Weather;