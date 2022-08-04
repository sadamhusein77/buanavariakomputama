import React from 'react'

export default function CircleIndicator({score}) {
  return (
    <div className="flex items-start justify-start flex-row-reverse gap-1">
      <div className={`flex items-center justify-center text-white rounded-full shadow-sm ${score === 5 ? 'bg-blue-500' : 'bg-slate-100'} h-7 w-9`}>
        5
      </div>
      <div className={`flex items-center justify-center text-white rounded-full shadow-sm ${score === 4 ? 'bg-green-500' : 'bg-slate-100'} h-7 w-9`}>
        4
      </div>
      <div className={`flex items-center justify-center text-white rounded-full shadow-sm ${score === 3 ? 'bg-yellow-500' : 'bg-slate-100'} h-7 w-9`}>
        3
      </div>
      <div className={`flex items-center justify-center text-white rounded-full shadow-sm ${score === 2 ? 'bg-red-500' : 'bg-slate-100'} h-8 w-9`}>
        2
      </div>
      <div className={`flex items-center justify-center text-white rounded-full shadow-sm ${score === 1 ? 'bg-slate-500' : 'bg-slate-100'} h-7 w-9`}>
        1
      </div>
      <div className={`flex items-center justify-center text-white rounded-full shadow-sm ${score === 0 ? 'bg-black' : 'bg-slate-100'} h-7 w-9`}>
        0
      </div>
    </div>
  )
}
