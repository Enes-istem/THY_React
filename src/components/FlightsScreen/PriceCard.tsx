import React from 'react'
import { IFlight } from '../../Interfaces/index'

interface PriceCardProps {
    category: string;
    element : IFlight
  }

const PriceCard = (props : PriceCardProps) => {
    const {category,element} = props
  return (
    <div className = "flex sm:flex-col lg:flex-row justify-between items-center w-1/4 bg-white p-4 border border-white rounded-md shadow-lg text-gray-500">
    <div className = "ml-1"><input className= "appearance-none rounded-full h-4 w-4 cursor-pointer bg-white border border-gray-400" type="checkbox"/></div>
    <p className="text-sm text-gray-500 w-1/3 mr-1">{category}</p>
    <div className = "flex flex-row justify-between items-center">
    <div className = "flex flex-col w-1/3 w-full mr-4">
        <p className = "text-[9px] text-gray-500">Yolcu Başına</p>
        <p className="text-sm font-bold">{`${element.fareCategories[props.category].subcategories[0].price.currency} ${element.fareCategories[props.category].subcategories[0].price.amount}`}</p>
    </div>
    <p className = "mr-2 rotate-180">^</p>
    </div>
</div>
  )
}

export default PriceCard