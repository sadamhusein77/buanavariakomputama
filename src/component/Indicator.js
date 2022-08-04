import React from 'react'
import CircleIndicator from "./CircleIndicator";
export default function Indicator({name, score}) {
  return (
    <div className="flex items-baseline mt-2">
        <div className="w-1/2">{name}</div>
        <div className="w-1/2">
        <CircleIndicator score={score}/>
        </div>
    </div>
  )
}
