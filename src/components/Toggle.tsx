import React,{useState} from "react"

const Toggle = () => {
    const [isActive, setIsActive] = useState(false);
  
    const toggleHandler = () => {
      setIsActive(!isActive);
    };
  
    return (
      <div className="mb-4 flex items-center">
      <span className="text-xl  mr-4">Promosyon Kodu</span>
      <label className="cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="hidden"
            checked={isActive}
            onChange={toggleHandler}
          />
          <div className="toggle__line w-12 h-6 bg-gray-400 rounded-full shadow-inner"></div>
          <div className={`toggle__dot absolute top-0 w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${isActive ? 'translate-x-6' : ''}`}></div>
        </div>
       
      </label>
    </div>
    );
  };
  export default Toggle