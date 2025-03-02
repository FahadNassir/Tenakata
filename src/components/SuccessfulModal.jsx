import React from 'react'

const SuccessfulModal = ({setSuccessful}) => {
  return (
    <div className='modal-overlay fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center'>
     <div className="bg-white flex flex-col shadow-lg z-30 justify-center items-center w-inputWidth h-statusheight p-9">
       <div className='text-trash text-trashColor'>
        <i class='bx bxs-check-circle'></i>
       </div>
       <h1 className='mb-1'>Investor added successfully</h1>
       <h2 className='mb-5 opacity-50'>Investor has been added successfully</h2>
       <button className="bg-buttonBlue text-white py-1 w-full rounded-lg" 
        onClick={() => setSuccessful(false)}
       >Dismiss</button>
     </div>
    </div>
  )
}

export default SuccessfulModal