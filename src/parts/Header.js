import React from "react";
import InputFilter from "../component/InputFilter";
import { useState } from "react";
export default function Header({ updateFilter }) {
  const [filter, setFilter] = useState("");
  const onSearch = (event) => {
    setFilter(event.target.value);
  };
  const onFilter = () => {
    updateFilter(filter);
  };
  return (
    <div className="flex items-center justify-between px-14 py-3 bg-emerald-800">
      <div className="text-3xl text-white">My Cats</div>
      <InputFilter data={filter} onSearch={onSearch} onFilter={onFilter} />
    </div>
  );
}
