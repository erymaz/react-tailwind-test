import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import { useDateTime } from '../../hooks'

export default function GlobalRundown() {
  const { date } = useDateTime();

  return (
    <div className="border border-2 border-gray-300 rounded-b-xl text-center">
      <div className="w-full h-3 bg-gray-700" />
      <div className="relative px-4 lg:px-6 py-2">
        <div className='absolute top-2 left-4'>
          <FontAwesomeIcon size='xl' icon={faAnglesDown} className='text-yellow-600' />
        </div>
        <h1 className="font-semibold text-xl lg:text-4xl text-gray-700 mb-2">
          GLOBAL RUNDOWN
        </h1>
        <div className="flex items-center text-lg font-bold">
          <div className="w-28 text-gray-500 text-right mr-2 leading-6">SEGUIN</div>
          <div className="flex-1">
            <div className="h-2 w-4/5 border border-gray-900 bg-gray-500" />
          </div>
        </div>
        <div className="flex items-center text-lg font-bold">
        <div className="w-28 text-gray-500 text-right mr-2 leading-6">CONROE</div>
          <div className="flex-1">
            <div className="h-2 border border-gray-900 bg-gray-700" />
          </div>
        </div>
        <div className="flex items-center text-lg font-bold">
        <div className="w-28 text-gray-400 text-right mr-2 leading-6">GUNTER</div>
          <div className="flex-1">
            <div className="h-2 w-3/5 border border-gray-900 bg-gray-400" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center text-3xl">
            <span className="font-semibold">UNITS</span>
            <span className="font-semibold text-gray-400 ml-2">00000</span>
          </div>
          <div className="flex items-center text-3xl">
            <span className="font-semibold ">TONS</span>
            <span className="font-semibold text-gray-400 ml-2">00000</span>
          </div>
        </div>
        <div className="text-gray-400 mt-2">
          <span className="text-lg font-semibold uppercase">{ moment(date).format('MMMM DD YYYY [||] h:mm a') }</span>
        </div>
      </div>
    </div>
  )
}
