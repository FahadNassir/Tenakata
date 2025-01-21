import React from 'react'
import image from '../assets/Piercy.jpg'

const ViewModal = ({setView}) => {
  return (
    <div className='modal-overlay fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center'>
     <div className="bg-white flex flex-col shadow-lg z-30 justify-center items-center w-statusheight h-inputWidth p-9">
       <div>
        <div className='flex justify-between'>
          <h1>View Image</h1>
          <select className='border border-formatB bg-white'>
              <option>
                JPEG
              </option>
            </select>
        </div>
        <img src={image} alt="passport-pic" className='h-statusheight w-graphHeight p-3 object-contain' />
       </div>
       <button className="bg-buttonBlue text-white py-2 px-6 w-ButtonW rounded-lg" 
        onClick={() => setView(false)}
       >Close</button>
     </div>
    </div>
  )
}

export default ViewModal