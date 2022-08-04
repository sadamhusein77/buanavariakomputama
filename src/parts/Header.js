import React from "react";
import InputFilter from "../component/InputFilter";
export default function Header({ updateFilter, dataFilter, onHandleFilter }) {
  const onSearch = (event) => {
    updateFilter(event.target.value)
  };
  const onFilter = () => {
    onHandleFilter();
  };
  return (
    <div className="flex items-center justify-between px-14 py-3 bg-emerald-800">
      <div className="text-3xl text-white">My Cats</div>
      <InputFilter data={dataFilter} onSearch={onSearch} onFilter={onFilter} />
    </div>
  );
}
