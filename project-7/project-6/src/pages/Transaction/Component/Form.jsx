import React from 'react'

const Form = ({filteredData}) => {
  return (
    <table className="w-full text-left  border-gray-300 mt-4">
            <thead className="bg-gray-100">
                <tr>
                   <th className="p-2">ID</th>
                   <th className="p-2">Date & time</th>
                   <th className="p-2">Type</th>
                   <th className="p-2">Amount</th>
                   <th className="p-2">Status</th>
               </tr>
            </thead>
            <tbody className='font-semibold'>
                 {filteredData.map((row,index)=>(
                    <tr key={index} className="border-t">
                        <td className="p-2">{row.id}</td>

                        <td className="p-2">
                            <p>{row.Date}</p>
                            <p className='text-gray-500'>{row.Time}</p>
                        </td>

                        <td className="p-2">
                        {
                            row.type?.name?.includes("INR") ? (
                            <div>
                                <p>{row.type.name}</p>
                                <p className='text-gray-500'>{row.type.tag}</p>
                            </div>
                            ) : (
                            <p>{row.type || "Unknown"}</p>
                            )
                        }
                        </td>

                        <td className="p-2">
                        {
                            row.amount.bitcoin?.includes("BTC") ? (
                            <div>
                                <p>{row.amount.bitcoin}</p>
                                <p className='text-gray-500'>{row.amount.rs}</p>
                            </div>
                            ) : (
                            <p>{row.amount || "Unknown"}</p>
                            )
                        }
                        </td>
                        
                        <td className="p-2 inline-block">
                            {
                              row.status==="Completed" ?
                                (<p className='bg-green-700 px-1 py-1 text-white shadow-xl rounded-xl'>{row.status}</p>)
                                :
                              row.status==="Cancelled" ?
                                (<p className='bg-red-700 px-2 py-1 text-white shadow-xl rounded-xl'>{row.status}</p>)
                                :
                              row.status==="Pending" ?
                                (<p className='bg-[#F5A50B] px-3 py-1 text-white shadow-xl rounded-xl'>{row.status}</p>)
                                :
                                (<p className='bg-[#797E82] px-1 py-1 text-white shadow-xl rounded-xl'>{row.status}</p>)
                            }
                        </td>
                    </tr>
                 ))}
            </tbody>
        </table>
  )
}

export default Form