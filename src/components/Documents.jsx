import React, { useState } from 'react'
import Sidenav from './Sidenav'
import MgtNav from './MgtNav'
import { useNavigate } from 'react-router-dom'
import ConfirmModal from './ConfirmModal'
import SuccessfulModal from './SuccessfulModal'

const Documents = ({corporate, setCorporate}) => {


    const [showModal, setShowModal] = useState(false)
    const [succesful, setSuccessful] = useState(false)
    const navigate = useNavigate()

  return (
    <div className='flex bg-buttonBlue min-w-screen' >
      { showModal && <ConfirmModal setShowModal={setShowModal} setSuccessful={setSuccessful} />}
      { succesful && <SuccessfulModal setSuccessful={setSuccessful} />}
      <span className='lg:w-sidenavW w-0'>
            <Sidenav />
        </span>
        <span className='flex flex-col bg-dashbg lg:rounded-l-2xl lg:w-contentW p-7 w-full'>
          <MgtNav />
          <div className='bg-white rounded-xl p-7'>
          <div className="flex items-center gap-3">
            <h1 className="mb-3 lg:mb-2 font-semibold text-xl">Onboard Investors</h1>
            <div className="flex items-center gap-2">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="investorType" 
                  value="individual" 
                  className="mr-1" 
                  checked={!corporate}
                  onClick={() => setCorporate(false)}
                />
                Individual
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="investorType" 
                  value="corporate" 
                  className="mr-1" 
                  checked={corporate}
                  onClick={() => setCorporate(true)}
                />
                Corporate
              </label>
            </div>
          </div>
            <h2 className='lg:mb-4 mb-6 lg:opacity-55'>Add new investor</h2>
            <div className='page-indicator mb-14 flex justify-between text-buttonBlue'>
              <span className='flex items-center gap-2 text-buttonBlue'>
                <div className='w-7 h-7 rounded-full bg-buttonBlue flex items-center justify-center text-white'>
                  1
                </div>
                Investor details
                <div className='w-24 h-lineheight bg-buttonBlue opacity-70' ></div>
              </span>
              <span className='flex items-center gap-2'>
                <div className='w-7 h-7 rounded-full bg-buttonBlue flex items-center justify-center text-white'>
                  2
                </div>
                Business details
                <div className='w-24 h-lineheight bg-buttonBlue opacity-70'></div>
              </span>
              <span className='flex items-center gap-2'>
                <div className='w-7 h-7 rounded-full bg-buttonBlue flex items-center justify-center text-white'>
                  3
                </div>
                Address details
                <div className='w-24 h-lineheight bg-buttonBlue opacity-70'></div>
              </span>
              <span className='flex items-center gap-2'>
                <div className='w-7 h-7 rounded-full bg-buttonBlue flex items-center justify-center text-white'>
                  4
                </div>
                documents
                <div className='w-24 h-lineheight bg-buttonBlue opacity-70'></div>
              </span>
              <span>
                <div className='w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-white'>
                  
                </div>
              </span>
            </div>

            <form className='lg:grid lg:grid-cols-2 lg:gap-5'>
              {corporate ? (
                <>
                  <div className="input-container">
                    <label for="email">Attach Identification documents for authorized signatures</label>
                    <input type="email" id="email" name="email" />
                  </div>
                  <div className="input-container">
                    <label for="email">proof of business address</label>
                    <input type="email" id="email" name="email" />
                  </div>
                  <div className="input-container">
                    <label for="email">Certificate of Incorporation</label>
                    <input type="email" id="email" name="email" />
                  </div>
                  <div className="input-container">
                    <label for="email">Memorandum of Association</label>
                    <input type="email" id="email" name="email" />
                  </div>
                  <div className="input-container">
                    <label for="email">Ownership structure</label>
                    <input type="email" id="email" name="email" />
                  </div>
                </>
              ) : (
                <>
                  <div className="input-container">
                    <label for="email">photographic Identification</label>
                    <input type="email" id="email" name="email" />
                  </div>
                  <div className="input-container">
                    <label for="email">proof of address</label>
                    <input type="email" id="email" name="email" />
                  </div>
                </>
              )
              }
               
            </form>
            <div className='flex gap-2 justify-end'>
                <button className='text-buttonBlue px-7 py-2 rounded border border-buttonBlue'
                 onClick={() => navigate("/details/address")}
                >Back</button>
                <button className='text-white bg-buttonBlue px-7 py-2 rounded'
                  onClick={() => setShowModal(true)}
                >Submit</button>
            </div>
          </div>
        </span>
    </div>
  )
}

export default Documents