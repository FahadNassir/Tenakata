import React from 'react'

const ConfirmModal = ({setShowModal, setSuccessful}) => {
  return (
    
    <div className='modal-overlay fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center'>
     <div className="bg-white flex flex-col shadow-lg z-30 justify-center items-center w-1/3 p-7">
        <h1>Confirm investor details</h1>
        <div className='bg-tablebg w-full mb-2 flex justify-between items-center'>
            <span className='flex flex-col gap-1 p-3'>
                <h1 className='font-semibold mb-2'>Details</h1>
                <h1 className='faded'>Full Name:</h1>
                <h1 className='faded'>Date of Birth:</h1>
                <h1 className='faded'>Nationality:</h1>
                <h1 className='faded'>Identification number;</h1>
                <h1 className='faded'>Physical Address:</h1>
                <h1 className='faded'>Mailing Address:</h1>
                <h1 className='faded'>Contact Information:</h1>
                <h1 className='faded'>Occupation & employer details:</h1>
                <h1 className='faded'>Source of funds:</h1>
                <h1 className='faded'>Photographic Identification:</h1>
            </span>
            <span className='flex flex-col gap-1 p-3 items-end'>
                <h1 className='mb-2 font-semibold text-tablebg'>deta</h1>
                <h1 className='faded'>John Doe</h1>
                <h1 className='faded'>20-09-1989</h1>
                <h1 className='faded'>Kenyan</h1>
                <h1 className='faded'>Lorem</h1>
                <h1 className='faded'>Lorem</h1>
                <h1 className='faded'>Lorem</h1>
                <h1 className='faded'>Lorem</h1>
                <h1 className='faded'>Lorem</h1>
                <h1 className='faded'>Lorem</h1>
                <h1 className='faded'>Lorem</h1>
            </span>
        </div>
        <div className='flex justify-end gap-2 w-full'>
                    <button className='border border-buttonBlue rounded-lg px-5 py-2 text-buttonBlue'
                        onClick={() => setShowModal(false)}
                    >Cancel</button>
                    <button className='bg-buttonBlue text-white rounded-lg px-5 py-2'
                        onClick={() => {
                            setSuccessful(true)
                            setShowModal(false)
                        }}
                    >Confirm</button>
            </div>
     </div>
    </div>

  )
}

export default ConfirmModal