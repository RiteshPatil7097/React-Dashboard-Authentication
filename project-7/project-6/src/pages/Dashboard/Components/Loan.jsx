import React from 'react'

const Loan = () => {
  return (
    <>
     <div className='flex flex-row'>
            <div className='w-1/2 md:flex-1'>
            <div className='bg-white text-gray-600 p-6 mx-2 rounded-lg shadow-xl'>
                <button className='bg-[#5F00D9] text-white px-2 py-1  rounded-xl'>Loan</button>
                <div className='text-black-600 font-semibold text-lg mt-3'>
                    <p>Learn more about Loans – Keep your Bitcoin,
                    <br></br> access it’s value without selling it</p>
                </div>
        </div>
        </div>

        <div className='w-1/2 md:flex-1'>
            <div className='bg-[#5F00D9] text-gray-600 p-6 mx-2 rounded-lg shadow-xl'>
                <button className='bg-white text-[#5F00D9] px-2 py-1  rounded-xl'>
                    Contacts
                </button>
                <div className='text-white font-semibold text-lg mt-3'>
                    <p>Learn more about our real estate, mortgage, <br>
                    </br>and corporate account services</p>
                </div>
            </div>
        </div>
     </div>
     </>
  )
}

export default Loan