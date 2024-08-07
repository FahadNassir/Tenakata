import React from 'react';
import Sidenav from '../components/Sidenav';
import MgtNav from '../components/MgtNav';
import { useNavigate } from 'react-router-dom';

const InvestorDets = ({ corporate, setCorporate }) => {
  const navigate = useNavigate();

  return (
    <div className='flex bg-buttonBlue min-w-screen'>
      <span className='lg:w-sidenavW w-0'>
        <Sidenav />
      </span>
      <span className='flex flex-col bg-dashbg lg:rounded-l-2xl lg:w-contentW p-7 w-full'>
        <MgtNav />
        <div className='bg-white rounded-xl p-7'>
          <div className='flex items-center gap-3'>
            <h1 className='mb-3 lg:mb-2 font-semibold text-xl'>Onboard Investors</h1>
            <div className='flex items-center gap-2'>
              <label className='flex items-center'>
                <input
                  type='radio'
                  name='investorType'
                  value='individual'
                  className='mr-1'
                  checked={!corporate}
                  onClick={() => setCorporate(false)}
                />
                Individual
              </label>
              <label className='flex items-center'>
                <input
                  type='radio'
                  name='investorType'
                  value='corporate'
                  className='mr-1'
                  checked={corporate}
                  onClick={() => setCorporate(true)}
                />
                Corporate
              </label>
            </div>
          </div>

          <h2 className='lg:mb-4 mb-6 lg:opacity-55'>Add new investor</h2>

          <div className='page-indicator mb-14 flex justify-between'>
              <span className='flex items-center gap-2 text-buttonBlue'>
                <div className='w-7 h-7 rounded-full bg-buttonBlue flex items-center justify-center text-white'>
                  1
                </div>
                Investor details
                <div className='w-24 h-lineheight bg-buttonBlue opacity-70' ></div>
              </span>
              <span className='flex items-center gap-2'>
                <div className='w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-white'>
                  2
                </div>
                Business details
                <div className='w-24 h-lineheight bg-gray-500 opacity-70'></div>
              </span>
              <span className='flex items-center gap-2'>
                <div className='w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-white'>
                  3
                </div>
                Address details
                <div className='w-24 h-lineheight bg-black opacity-70'></div>
              </span>
              <span className='flex items-center gap-2'>
                <div className='w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-white'>
                  4
                </div>
                documents
                <div className='w-24 h-lineheight bg-black opacity-70'></div>
              </span>
              <span>
                <div className='w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-white'>
                </div>
              </span>
            </div>

          <form className='lg:grid lg:grid-cols-2 lg:gap-5'>
            { corporate ? (
              <>
                <div className="input-container">
                  <label htmlFor="companyName">Company Name</label>
                  <input type="text" id="companyName" name="companyName" />
                </div>
                <div className="input-container">
                  <label htmlFor="registrationNumber">Business Registration Number</label>
                  <input type="text" id="registrationNumber" name="registrationNumber" />
                </div>
                <div className="input-container">
                  <label htmlFor="countryOfIncorporation">Country of Incorporation</label>
                  <input type="text" id="countryOfIncorporation" name="countryOfIncorporation" />
                </div>
                <div className="input-container">
                  <label htmlFor="businessAddress">Business Address</label>
                  <input type="text" id="businessAddress" name="businessAddress" />
                </div>
                <div className="input-container">
                  <label htmlFor="mailingAddress">Mailing Address</label>
                  <input type="text" id="mailingAddress" name="mailingAddress" />
                </div>
                <div className="input-container">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="text" id="phoneNumber" name="phoneNumber" />
                </div>
              </>
            ) : (
              <>
                <div className="input-container">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" name="fullName" />
                </div>
                <div className="input-container">
                  <label htmlFor="dob">Date of Birth</label>
                  <input type="date" id="dob" name="dob" />
                </div>
                <div className="input-container">
                  <label htmlFor="nationality">Nationality</label>
                  <input type="text" id="nationality" name="nationality" />
                </div>
                <div className="input-container">
                  <label htmlFor="idType">Identification Type</label>
                  <input type="text" id="idType" name="idType" />
                </div>
              </>
            )}
          </form>
          <div className='flex justify-end'>
            <button
              className='text-white bg-buttonBlue px-7 py-2 rounded'
              onClick={() => navigate('/details/Business')}
            >
              Next
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};

export default InvestorDets;
