


export default function HypothesisSelector({onChange}) {
  return (

    <div className="sm:col-span-4">
      <label htmlFor="hypothesis" className="block text-sm font-medium leading-6 text-gray-900">
        Hypothesis
      </label>
      <div className="mt-2">
        <select
          onChange={onChange}
          id="hypothesis"
          name="hypothesis"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option>Null</option>
        </select>
      </div>
    </div>
  )
}