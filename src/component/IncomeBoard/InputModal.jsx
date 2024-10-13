const InputModal = () => {
  return (
    <div className="py-1" role="none">
      <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 rounded-md text-gray-600"
          id="filter-option-1"
        />
        <span className="ml-2">Salary</span>
      </label>
      <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 rounded-md text-gray-600"
          id="filter-option-2"
        />
        <span className="ml-2">Outsourcing</span>
      </label>
      <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 rounded-md text-gray-600"
          id="filter-option-3"
        />
        <span className="ml-2">Bond</span>
      </label>

      <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 rounded-md text-gray-600"
          id="filter-option-3"
        />
        <span className="ml-2">Dividend</span>
      </label>
    </div>
  );
};

export default InputModal;
