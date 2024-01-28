import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMoon, faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons'
import { AREA_TEMP } from "../../mock/weather";

export default function ProductionEye() {
  return (
    <div className="border border-2 border-gray-300 rounded-t-xl text-center">
      <div className="px-6 lg:px-10 py-2">
        <h1 className="font-semibold text-2xl lg:text-5xl text-red-700">
          PRODUCTION EYE
        </h1>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm font-bold">Area Temps:</span>
            <span className="text-sm font-bold ml-2">Seguin: { AREA_TEMP.seguin.split('.')[0] }{'\u00b0'}</span>
            <span className="text-xs">/{ AREA_TEMP.seguin.split('.')[1] }"</span>
          </div>
          <div>
            <span className="text-sm font-bold">Conroe: { AREA_TEMP.conroe.split('.')[0] }{'\u00b0'}</span>
            <span className="text-xs">/{ AREA_TEMP.conroe.split('.')[1] }"</span>
          </div>
          <div>
            <span className="text-sm font-bold">Gunter: { AREA_TEMP.gunter.split('.')[0] }{'\u00b0'}</span>
            <span className="text-xs">/{ AREA_TEMP.gunter.split('.')[1] }"</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex space-x-4 items-center">
            <button className='px-2 py-1 rounded-lg bg-gray-900'>
              <FontAwesomeIcon icon={faBars} className='text-white' />
            </button>
            <button className='px-2 py-1 rounded-lg bg-gray-900'>
              <FontAwesomeIcon icon={faMoon} className='text-white' />
            </button>
            <button className='px-2 py-1 rounded-lg bg-gray-900'>
              <FontAwesomeIcon icon={faArrowAltCircleDown} className='text-white' />
            </button>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-md leading-5">
              ACTIVE TIMERS
            </span>
            <p className="font-semibold mb-2">
              <span className="text-6xl text-gray-300">0</span>
              <span className="text-6xl">38</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-3 bg-gray-700" />
    </div>
  )
}
