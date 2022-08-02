import React from 'react'
import Cards from '../component/Cards'
export default function Contents() {
  return (
    <section id='content' className='mt-14'>
        <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="text-center uppercase text-4xl">list cats</div>
            <div className="flex justify-evenly flex-wrap mt-5 p-4 border border-b-slate-400 h-full max-h-[600px] overflow-auto rounded-lg">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    </section>
  )
}
