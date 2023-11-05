import React from 'react'
import { IFlight } from "../../Interfaces/index"

interface FlightsInformationProps {
    item : IFlight
  }

const FlightsInformation = (props:FlightsInformationProps) => {
    const {item} = props
  return (
    <div className = "w-2/5 flex flex-row justify-between bg-white p-4 border border-white rounded-md shadow-lg text-gray-500">
                    <div className = "w-4/5 flex flex-row justify-between items-center mr-10">
                        <div className = "w-1/5">
                            <p className = "text-sm font-bold">{item.arrivalDateTimeDisplay}</p>
                            <p className = "text-sm text-gray-500">{item.originAirport.code}</p>
                            <p className = "text-[9px] text-gray-500">{item.originAirport.city.name}</p>

                        </div>
                        <div className = "w-3/5 border border-gray-400 h-[1px]"></div>
                        <div className = " flex flex-col justify-center items-end w-1/5">
                            <p className = "text-sm font-bold">{item.departureDateTimeDisplay}</p>
                            <p className = "text-sm text-gray-500">{item.destinationAirport.code}</p>
                            <p className = "text-[9px] text-gray-500">{item.destinationAirport.city.name}</p>
                        </div>
                    </div>
                    <div className = "w-1/4 flex flex-col justify-center">
                        <p className = "text-[9px] text-gray-500">Uçuş Süresi</p>
                        <p className = "text-sm font-bold">{item.flightDuration}</p>
                    </div>
                    
                </div>
  )
}

export default FlightsInformation