import React from "react";

export default function InputFilter({ data, onSearch, onFilter }) {
  return (
    <div className="flex justify-center items-center px-3">
      <input
        type="text"
        value={data}
        className="p-2 rounded-xl focus:outline-none"
        placeholder="Search ..."
        onChange={onSearch}
      />
      <div
        className="text-xl cursor-pointer ml-3 bg-white py-2 px-3 rounded-xl"
        onClick={onFilter}
      >
        <ion-icon name="search-outline"></ion-icon>
      </div>
    </div>
  );
}
