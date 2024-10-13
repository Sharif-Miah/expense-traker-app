import React from "react";

const ExpenseInputModal = () => {
  return (
    <div className="py-1" role="none">
      <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 rounded-md text-gray-600"
          id="filter-option-1"
        />
        <span className="ml-2">Education</span>
      </label>
      <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 rounded-md text-gray-600"
          id="filter-option-2"
        />
        <span className="ml-2">Food</span>
      </label>
      <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 rounded-md text-gray-600"
          id="filter-option-3"
        />
        <span className="ml-2">Health</span>
      </label>
    </div>
  );
};

export default ExpenseInputModal;
