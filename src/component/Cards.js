import React from 'react'

export default function Cards({id, image, name, description, onShowDetail}) {
  return (
    <div className='group border border-slate-200 w-96 rounded-xl mb-3 h-fit hover:shadow-2xl'>
      <div className="h-fit relative z-[1]">
        <img src={image.url} alt="cat" className='w-auto h-auto rounded-xl ' />
        <div className="text-3xl rounded-full text-green-700 z-[2] absolute -bottom-6 right-2 w-fit cursor-pointer hidden group-hover:block" onClick={() => onShowDetail(id)}>
          <ion-icon name="chevron-down-circle"></ion-icon>
        </div>
      </div>
        <div className={`card-${id} p-2 text-center text-xl font-bold hidden group-hover:block`}>
            {name}
        </div>
        <div className={`card-${id} hidden p-1`}>
          {description}
        </div>
    </div>
  )
}
