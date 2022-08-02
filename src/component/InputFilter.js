import React from 'react'

export default function InputFilter({data, onSearch}) {
  return (
    <div className='flex justify-center items-center bg-white rounded-lg px-3'>
        <div className="text-xl cursor-pointer">
            <ion-icon name="search-outline"></ion-icon>
        </div>
        <input type="text" value={} className='p-2 focus:outline-none' placeholder='Search ...' onChange={onSearch} />
    </div>
  )
}
