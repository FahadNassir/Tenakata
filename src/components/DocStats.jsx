import React, { useState } from 'react'
import Docmgt from '../components/Docmgt.jsx'
import Sidenav from '../components/Sidenav'
import { useNavigate } from 'react-router-dom'
import DelSuccess from '../components/DelSuccess'
import ViewModal from './ViewModal.jsx'

const DocumentStatus = ({viewModal}) => {

  const navigate = useNavigate()
  const [deluser, setDeluser] = useState(false)
  const [view, setView] = useState(false)
  const handleDelete = () => {
    setDeluser(true)
  }

  return (
    <div>
      {view && <ViewModal setView={setView} />}
      <div className='flex bg-buttonBlue min-w-screen'>
      {deluser && <DelSuccess setDeluser={setDeluser} />}
      <span className='lg:w-sidenavW w-0'>
        <Sidenav />
      </span>
      <span className='flex flex-col bg-dashbg lg:rounded-l-2xl lg:w-contentW p-7 w-full mb-5'>
      <Docmgt />
      <div className='flex justify-between mb-5 pr-5'>
        <span></span>
        <span className='flex gap-2'>
            <button className='px-6 py-2 rounded-lg text-statusColor bg-white border-statusColor border'>Update Doc Status</button>
            <button className='px-6 py-2 rounded-lg text-white bg-statusColor'>Upload Doc</button>
        </span>
        
      </div>
      <div className='pr-5'>
      <table className='bg-white rounded-xl w-full'>
        <thead>
          <tr>
            <th className='t-h'>Investor ID</th>
            <th className='t-h'>Investor name</th>
            <th className='t-h'>Amount</th>
            <th className='t-h'>Email address</th>
            <th className='t-h'>Amount</th>
            <th className='t-h'>Type</th>
            <th className='t-h'>Status</th>
            <th className='t-h'>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='t-d'>#001</td>
            <td className='t-d'>Fintree Ltd</td>
            <td className='t-d'>123.890</td>
            <td className='t-d'>Fin@gmail.com</td>
            <td className='t-d'>0745 67 78 90</td>
            <td className='t-d'>Corporate</td>
            <td className='t-d'>Active</td>
            <td className='t-d'>
              <i className='bx bxs-hide' onClick={() => setView(true)}></i>
              <i className='bx bxs-trash cursor-pointer' onClick={handleDelete}></i>
            </td>
          </tr>
          <tr>
            <td className='t-d'>#002</td>
            <td className='t-d'>Kamsari</td>
            <td className='t-d'>123.890</td>
            <td className='t-d'>Kam@gmail.com</td>
            <td className='t-d'>0700 70 790 90</td>
            <td className='t-d'>Individual</td>
            <td className='t-d'>Inactive</td>
            <td className='t-d'>
             <i className='bx bxs-hide' onClick={() => setView(true)}></i>
             <i className='bx bxs-trash cursor-pointer' onClick={handleDelete}></i>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      </span>
      </div>
    </div>
    
  )
}

export default DocumentStatus