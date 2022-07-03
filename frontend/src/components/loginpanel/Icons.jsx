import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const Icons = ({ icon }) => {
  return (
    <div className='border border-gray-500 text-gray-500 rounded-full p-2 cursor-pointer hover:bg-gray-500 hover:text-white hover:transition-colors duration-700'>
        {icon}
    </div>
  )
}

export default Icons