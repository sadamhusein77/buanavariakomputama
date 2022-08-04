import React from "react";
import Indicator from "./Indicator";
export default function Cards({
  id,
  image,
  name,
  indoor,
  lap,
  adaptability,
  affection_level,
  child_friendly,
  dog_friendly,
  energy_level,
  grooming,
  health_issues,
  intelligence,
  shedding_level,
  social_needs,
  stranger_friendly,
  vocalisation,
  experimental,
  hairless,
  natural,
  rare,
  rex,
  suppressed_tail,
  short_legs,
  hypoallergenic,
  weight,
  origin,
  life_span,
  temperament,
  wikipedia_url,
  description,
  onShowDetail,
}) {
  return (
    <div className="group border border-slate-200 w-96 rounded-xl mb-3 h-fit hover:shadow-2xl">
      <div className="h-fit relative z-[1]">
        <img src={image.url} alt="cat" className="w-auto h-auto rounded-xl " />
        <div
          className="text-3xl rounded-full text-green-700 z-[2] absolute -bottom-6 right-2 w-fit cursor-pointer hidden group-hover:block"
          onClick={() => onShowDetail(id)}
        >
          <ion-icon name="chevron-down-circle"></ion-icon>
        </div>
      </div>
      <div
        className={`card-${id} p-2 text-center text-xl font-bold hidden group-hover:block`}
      >
        {name}
      </div>
      <div className={`card-${id} hidden p-3`}>
        <div className="h-40 overflow-auto scroll-green">
          <Indicator name={`Indoor`} score={indoor} />
          <Indicator name={`Lap`} score={lap} />
          <Indicator name={`Adaptability`} score={adaptability} />
          <Indicator name={`Affection Level`} score={affection_level} />
          <Indicator name={`Child Friendly`} score={child_friendly} />
          <Indicator name={`Dog Friendly`} score={dog_friendly} />
          <Indicator name={`Energy`} score={energy_level} />
          <Indicator name={`Grooming`} score={grooming} />
          <Indicator name={`Healt Issue`} score={health_issues} />
          <Indicator name={`Intelligence`} score={intelligence} />
          <Indicator name={`Shedding`} score={shedding_level} />
          <Indicator name={`Social`} score={social_needs} />
          <Indicator name={`Stranger Friendly`} score={stranger_friendly} />
          <Indicator name={`Vocalisation`} score={vocalisation} />
          <Indicator name={`Experimental`} score={experimental} />
          <Indicator name={`Hairless`} score={hairless} />
          <Indicator name={`Natural`} score={natural} />
          <Indicator name={`Rare`} score={rare} />
          <Indicator name={`Rex`} score={rex} />
          <Indicator name={`Suppressed Tail`} score={suppressed_tail} />
          <Indicator name={`Showrt Leg`} score={short_legs} />
          <Indicator name={`Hypoallergenic`} score={hypoallergenic} />
          <div className="flex">
            <div className="w-1/2">Weight</div>
            <div className="w-1/2">
              Imperal : {weight.imperial} <br />
              Metric : {weight.metric}
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">Origin</div>
            <div className="w-1/2">
              {origin}
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">Life Span</div>
            <div className="w-1/2">
              {life_span}
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">Temprament</div>
            <div className="w-1/2">
              {temperament}
            </div>
          </div>
        </div>
        <div className="mt-3 text-base">{description}</div>
        <div className="mt-3 text-start text-xl font-bold">
          More About {name}
        </div>
        <a href={wikipedia_url} className="text-base italic underline text-blue-400">{wikipedia_url}</a>
      </div>
    </div>
  );
}
