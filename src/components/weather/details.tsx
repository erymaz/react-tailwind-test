import WeatherSeguin from "./seguin"

export default function WeatherDetails() {
  return (
    <div className="w-full">
      <div className="flex">
        <div className="w-2/4 text-lg lg:text-2xl font-bold bg-gray-300 flex justify-center items-center">
          <span className="text-gray-700">SEGUIN :</span>
          <span className="text-gray-500 ml-2">12</span>
        </div>
        <div className="w-1/4 text-sm lg:text-base font-bold bg-gray-500 flex justify-center items-center">
          <span className="text-gray-200">CONROE</span>
        </div>
        <div className="w-1/4 text-sm lg:text-base font-bold bg-gray-800 flex justify-center items-center">
          <span className="text-gray-200">GUNTER</span>
        </div>
      </div>
      <div className="h-96 overflow-auto">
        <WeatherSeguin />
      </div>
    </div>
  )
}
