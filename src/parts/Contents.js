import React from 'react'
import Cards from '../component/Cards'
export default function Contents({data, onGetData, isLoading, isFilter}) {
  const onShowDetail = (id) => {
    const elementHidden = Array.from(document.getElementsByClassName(`card-${id}`))
    if (elementHidden.length !== 0) {
      elementHidden.forEach(item => {
          item.classList.toggle('hidden');
      });
  }
  }
  const getData = () => {
    onGetData()
  }
  return (
    <section id='content' className='mt-14'>
        <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="text-center uppercase text-4xl font-bold">list cats</div>
            <div className="mt-5 p-4 border border-b-slate-400 h-full max-h-[600px] overflow-auto rounded-lg scroll-green">
              <div className="flex justify-evenly flex-wrap">
                {
                  data.length > 0 ?
                  data.map(item => (
                    <Cards {...item} key={item.id} onShowDetail={onShowDetail} />
                  ))
                  :
                  <div className="text-2xl text-slate-400 text-center">Tidak ada data</div>
                }
              </div>
              <div className="flex items-center justify-center my-4">
                {
                  isFilter === '' ? 
                  <div className="text-5xl text-slate-400 cursor-pointer rounded-full animate-bounce" onClick={getData}>
                  {
                    isLoading ? 
                    <div className="text-2xl">Loading...</div>
                    :
                    <ion-icon name="arrow-down-circle-outline"></ion-icon>
                  }
                </div>
                :
                ''
                }
              </div>
            </div>
        </div>
    </section>
  )
}
