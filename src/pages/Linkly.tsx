import React, { useState } from 'react'
import { useShortenURL, useFetchAllUrl } from '../hooks/api/linkly/useLinkly';
import Swal from 'sweetalert2'

function Linkly() {
    const [longUrl, setLongUrl]= useState("")
    const [shortUrl, setShortUrl]= useState("")
const shortenAPI= useShortenURL()
const [currentPage, setCurrentPage]= useState(1)
const fetchAllUrlAPI= useFetchAllUrl({pageNum:currentPage})
    const getShortenedUrl=()=>{
shortenAPI.mutate({
    originalUrl:longUrl,
    customShortUrl:shortUrl
}, 
{
    onSuccess(data){
console.log({data})
Swal.fire({
    title: 'Link shortened successfully!',
    // text: 'Do you want to continue',
    icon: 'success',
    confirmButtonText: 'Cool'
})
    },
    onError(err:any){
        Swal.fire({
            title: 'Error!',
            text: err?.response?.data?.error,
            icon: 'error',
            confirmButtonText: 'Ouch',
            confirmButtonColor:"red"
        })
        console.log({err})
    },
    onSettled(){
        fetchAllUrlAPI.refetch()
    }
})
    }

  return (
    <div >
   
     
<div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-8">
  <div className="relative w-full max-w-7xl mx-auto">
 
    <div className="flex justify-between items-center py-4 px-6">
      <div className="text-white text-3xl">Linkly</div>
      <div className="flex space-x-4">
        <button className="bg-gray-800 text-gray-400 border border-gray-700 rounded-full px-6 py-2 shadow-md">Login</button>
        <button className="bg-blue-600 text-white rounded-full px-6 py-2 shadow-md">Register Now</button>
      </div>
    </div>

    <div className="text-center mt-12">
      <h1 className="text-4xl text-white mb-4">Shorten Your Loooong Links :)</h1>
      <p className="text-gray-400 mb-8">Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
      <div className="grid grid-cols-1 justify-center items-center  ">
  <div className="flex justify-center gap-4 ">
  <div className="w-full max-w-lg flex justify-center gap-4">

<div className="w-full">
<p className='text-white text-left pl-4 pb-2'>
    Enter the Long URL
</p>
      <input
         type="text" 
         placeholder="Enter the link here" 
       
        value={longUrl}
        onChange={e=>{
            setLongUrl(e.currentTarget.value)
        }}
         className="input input-bordered  rounded-full px-4 py-2 w-full"
          />
</div>

<div className="w-full">
<p className='text-white text-left pl-4 pb-2'>Custom Url</p>
           <input
         type="text" 
         placeholder="Enter custom url here" 
       
        value={shortUrl}
        onChange={e=>{
            setShortUrl(e.currentTarget.value)
        }}
         className="w-full input input-bordered  rounded-full px-4 py-2 "
          />
</div>

  </div>
  </div>
  <div className="mt-4">

  
     
        <button
        onClick={getShortenedUrl}
        className="bg-blue-600 text-white rounded-full px-6 py-2 shadow-md">Shorten Now!</button>
      </div>
      </div>
      {/* <p className="text-gray-400 mt-4">You can create 05 more links. Register Now to enjoy Unlimited usage</p> */}
    </div>
    <table className="mt-12 w-full">
      <thead className="bg-gray-800 rounded-t-lg p-4  text-gray-400 font-bold">
        <th>Short Link</th>
        <th>Original Link</th>
        <th>QR Code</th>
        <th>Clicks</th>
        <th>Status</th>
        <th>Date</th>
      </thead>
      <tbody>
        
      
    {fetchAllUrlAPI.data?.urls?.map(item=> 
         <tr className="table-row  bg-gray-700 p-4 justify-between items-center text-center text-gray-400">
       <td>{item.shortUrl}</td>
       <td>{item.originalUrl}</td>
       <td className='flex items-center justify-center p-4'>
       
        <img
        src={item.qrCode} 
        alt=""
        />
        </td>
       <td>{item.redirectCount}</td>
       <td>{item.status}</td>
       <td>{item.updatedAt}</td>
      </tr>)}
      </tbody>
      <div className="join grid grid-cols-2 mt-4 text-white">
  <button className="join-item btn btn-outline text-white" disabled={currentPage===1} onClick={()=>setCurrentPage(prev=>prev-1)}>Previous page</button>
  <button className="join-item btn btn-outline text-white" disabled={currentPage===fetchAllUrlAPI.data?.totalPages }  onClick={()=>setCurrentPage(prev=>prev+1)}>Next</button>
</div>
      {/* Additional rows... */}
    </table>
  </div>
</div>
 
    </div>
  )
}

export default Linkly
