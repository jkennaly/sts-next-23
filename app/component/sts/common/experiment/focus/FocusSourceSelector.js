


export default function FocusSourceSelector({onChange}) {
  return (

    <div className="sm:col-span-4">
      <label htmlFor="focus-source" className="block text-sm font-medium leading-6 text-gray-900">
        Focus Source
      </label>
      <div className="mt-2">
        <select
          onChange={onChange}
          id="focus-source"
          name="focus-source"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option>None</option>
          <option>Researcher</option>
          <option>Institute</option>
        </select>
      </div>
    </div>
  )
}