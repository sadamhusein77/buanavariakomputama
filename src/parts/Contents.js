import React from 'react'
import Cards from '../component/Cards'
export default function Contents(data) {
  const onShowDetail = (id) => {
    const elementHidden = Array.from(document.getElementsByClassName(`card-${id}`))
    if (elementHidden.length !== 0) {
      elementHidden.forEach(item => {
          item.classList.toggle('hidden');
      });
  }
  }
  return (
    <section id='content' className='mt-14'>
        <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="text-center uppercase text-4xl font-bold">list cats</div>
            <div className="flex justify-evenly flex-wrap mt-5 p-4 border border-b-slate-400 h-full max-h-[600px] overflow-auto rounded-lg">
              {
                data.data.length > 0 ?
                data.data.map(item => (
                  <Cards {...item} key={item.id} onShowDetail={onShowDetail} />
                ))
                :
                <div className="">Tidak ada data</div>
              }
            </div>
        </div>
    </section>
  )
}
