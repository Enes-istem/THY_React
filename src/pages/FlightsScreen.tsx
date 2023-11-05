import React, { useState } from "react";
import Toggle from "../components/Toggle"
import flightsJson from "../data/flights.json"
import { IFlight } from "../Interfaces/index.ts"
import PriceCard from "../components/FlightsScreen/PriceCard";
import FlightsInformation from "../components/FlightsScreen/FlightsInformation";



export default function FlightsScreen() {
  return (
      <div className="flex flex-row justify-center items-center h-1/1 mt-6">
      <div className="w-4/5 h-1/2">
      <div className ="flex flex-row mb-5"><button className = "bg-red-500 w-32 p-1 text-white">Uçuş</button></div>
      <div className ="flex flex-row mb-5"><p>İstanbul - Antalya 6 Yolcu</p></div>
      <div><Toggle/></div>
      
      <div className= "flex flex-col justify-center items-center">
        <div className = "w-full flex flex-row justify-end items-center bg-blue-950 h-16">

            <div className = "w-[400px] flex flex-row justify-between">
                <div><button className= "p-2 text-white">Sıralama Kriteri</button></div>
                <div><button className= "p-2 border border-white rounded-sm text-white">Ekonomi Ücreti</button></div>
                <div><button className= "p-2 border border-white rounded-sm text-white mr-2">Kalkış Saati</button></div>
            </div>
        </div>

        <div className = "w-full flex flex-col bg-gray-200">

            {flightsJson.flights.map((item:IFlight,index:number) => (
                <div key = {index} className="flex flex-row justify-around m-2">
                <FlightsInformation item = {item} />
                <PriceCard element = {item} category = "ECONOMY" />
                <PriceCard element = {item} category = "BUSINESS"/>
            </div>
            ))}
        </div>

      </div>
      </div> 
      </div>
   
  );
}