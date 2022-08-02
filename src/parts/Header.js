import React from 'react'
import InputFilter from '../component/InputFilter'
import { useState } from 'react';
export default function Header() {
    const [filter, setFilter] = useState('')
    const onSearch = (event) => {
        
        console.log(event.target.value);
    }
  return (
    <div className='flex items-center justify-between px-14 py-3 bg-emerald-800'>
        <div className="text-3xl text-white">My Cats</div>
        <InputFilter data={} onSearch={onSearch} />
    </div>
  )
}
