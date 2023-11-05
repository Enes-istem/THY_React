import { useState,useEffect, useRef, ChangeEvent, FormEvent } from 'react'
import axios, { AxiosResponse,AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BoyIcon from '@mui/icons-material/Boy';
import Airport from "../model/Airport.js"

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState<Airport>([])
  const [filteredData, setFilteredData] = useState<Airport>([])
  const [openListOrigin,setOpenListOrigin] = useState(false)
  const [openListDeparture,setOpenListDeparture] = useState(false)

  const [textOrigin,setTextOrigin] = useState("")
  const [textDeparture,setTextDeparture] = useState("")

  const listOriginRef = useRef(null)
  const listDepartureRef = useRef(null)
  const inputOriginRef = useRef(null)
  const inputDepartureRef = useRef(null)

  const fetchData = () => {
     axios.get("http://localhost:8080/api/allAirport").then((res: AxiosResponse) => {
    console.log('res :>> ', res.data);
    setData(res.data)
    setFilteredData(res.data)
     }).catch((err:AxiosError )=> console.log('err :>> ', err))
  }
  useEffect(() => {
    fetchData()
  },[])

  useEffect(() => {
    document.addEventListener('click',handleClickOutSide)

    return () => {
      document.removeEventListener('click',handleClickOutSide)
    }
  },[])

  const handleClickOutSide = (e) => {
    if(listOriginRef.current && !listOriginRef.current.contains(e.target) && !inputOriginRef.current.contains(e.target)){
      setOpenListOrigin(false)
    }
    else if(listDepartureRef.current && !listDepartureRef.current.contains(e.target) && !inputDepartureRef.current.contains(e.target)){
      setOpenListDeparture(false)
    }
  }


  const onFocusFrom = () => {
    setOpenListOrigin(true)
  }

  const onFocusDeparture = () => {
    setOpenListDeparture(true)
  }

  const onChangeFrom = (event:ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const filterData = data.filter((item : Airport) =>{
      return item.code.toLowerCase().includes(value.toLowerCase()) || item.name.toLowerCase().includes(value.toLowerCase())
    }
    );
    setFilteredData(filterData)
    setTextOrigin(value)
  }

  const onChangeDeparture = (event:ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const filterData = data.filter((item : Airport) =>{
    return item.code.toLowerCase().includes(value.toLowerCase()) || item.name.toLowerCase().includes(value.toLowerCase())
  }
   
  );
    setFilteredData(filterData)
    setTextDeparture(value)
  }


  const onClickFrom = (element : Airport) => {
    setTextOrigin(`(${element.name}) - ${element.code}`)
    setOpenListOrigin(false)
  }

  const onClickDeparture = (element : Airport) => {
    setTextDeparture(`(${element.name}) - ${element.code}`)
    setOpenListDeparture(false)
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    const originAirport = inputOriginRef.current.value
    const departureAirport = inputDepartureRef.current.value
    if(originAirport === departureAirport){
      alert("Kalkış ve varış noktaları birbirinden farklı olmalıdır. Lütfen seçtiğiniz uçuş noktalarından birini değiştirin.")
      
    }else if(originAirport ==="" || departureAirport === ""){
      alert("Lütfen kalkış veya varış noktalarını seçtiğinizden emin olunuz")
    }else{
    const formData = {
      originAirport ,
      departureAirport 
    }
    console.log('formData', formData)
    navigate('/flights/screen');
  }
  }

  return (

<div className="bg-sky-900 min-h-screen flex flex-col justify-center items-center text-white">
  <p className="text-2xl mb-1">Merhaba</p>
  <p className="text-lg mb-5">Nereyi Keşfetmek istersiniz</p>

  <div className="w-[976px] bg-gray-400 bg-opacity-60 h-1/2 flex flex-col justify-center items-center p-8">
    <form className="flex flex-col lg:flex-row">
      <div className="relative flex-2 mx-2 w-[280px]">
        
        <input ref = {inputOriginRef} type="text" autocomplete = "off" name = "originAirports" className="p-5 border border-gray-300  my-2 w-full text-black" placeholder="Nereden" value = {textOrigin} onChange ={(e) => onChangeFrom(e)} onFocus={onFocusFrom} />
        {textOrigin ? null : <FlightTakeoffIcon className="absolute top-7 text-gray-400  lg:left-20 xl:left-24 left-24" />}
        {openListOrigin === true ? (
  <ul ref = {listOriginRef} className="absolute z-50 mt-2 py-2 w-[280px] bg-white border shadow-lg">
    {filteredData.map((element:Airport, index:number) => {
      return(
      <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black" onClick={() => onClickFrom(element)}>
        {`(${element.name}) - ${element.code}`}
      </li>
    )})}
  </ul>
) : null}

      </div>

      <div className="relative flex-2 mx-2 w-[280px]">
        <input ref = {inputDepartureRef} type="text" autocomplete = "off" name = "destinationAirport" className="p-5 border border-gray-300  my-2 w-full text-black" placeholder="Nereye" value = {textDeparture} onChange ={(e) => onChangeDeparture(e)} onFocus={onFocusDeparture} />
        {textDeparture ? null : <FlightLandIcon className="absolute top-7 text-gray-400 lg:left-20 xl:left-24 left-24" />}
        {openListDeparture === true ? (
  <ul ref = {listDepartureRef} className="absolute z-50 mt-2 py-2 w-[280px] bg-white border shadow-lg">
    {data.map((element:Airport, index:number) => {
      console.log('index :>> ', index);
      return(
      <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black" onClick={() => onClickDeparture(element)}>
        {`(${element.name}) - ${element.code}`}
      </li>
    )})}
  </ul>
) : null}
      </div>

      <div className="relative flex-1 mx-2 sm :w-[280px] lg:w-[160px]">
      <input type="text" className="w-full lg:w-6/6 p-5 border-none bg-blue-950 my-2 mr-2 placeholder-white" placeholder="Tarih" />
        <CalendarMonthIcon className="absolute top-7 text-gray-400 lg:left-20 xl:left-24 left-24" />
      </div>

      <div className="relative flex-1 mx-2 sm :w-[280px] lg:w-[160px]">
      <input type="text" className="w-full lg:w-6/6 p-5 border-none bg-blue-950 my-2 mr-2 " />
      <span className="absolute right-2 top-2 font-bold text-gray-400">1</span>
        <BoyIcon fontSize = "large" className="absolute right-1/2 top-7 text-gray-400" />
      </div>
      <button type="submit" value="Submit" onClick={handleSubmit} className="w-full  sm:w-[300px] w-[280px] lg:w-1/12 bg-red-500 my-2 mr-2"> <ArrowForwardIosIcon /></button>
      </form>
  </div>
</div>
  )
}
export default Home