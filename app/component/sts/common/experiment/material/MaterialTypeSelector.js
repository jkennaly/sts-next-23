


export default function MaterialTypeSelector() {
  return (

    <div className="sm:col-span-4">
      <label htmlFor="material-type" className="block text-sm font-medium leading-6 text-gray-900">
        Material Type
      </label>
      <div className="mt-2">
        <select
          id="material-type"
          name="material-type"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option>Person</option>
          <option>Knowledge</option>
          <option>Object</option>
          <option>Animal</option>
          <option>Plant</option>
          <option>Substance</option>  
        </select>
      </div>
    </div>
  )
}